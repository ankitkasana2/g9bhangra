import React, {useEffect, useState, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Modal,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Platform,
  RefreshControl,
} from 'react-native';

const AllNotification = ({navigation, route}) => {
  const [id, setId] = useState('');
  const [allnotification, setAllnotification] = useState([]);
  const [msgid, setMsgid] = useState('');
  const [data, setData] = useState('');
  const [backgroundStates, setBackgroundStates] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [refreshed, setRefreshed] = useState(false);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const {id} = route.params;
    setId(id);
    fetchnotification();
  }, [allnotification]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (refreshed) {
        // Alert.alert('Home Screen refreshed');
        fetchnotification();
        readmessage();
      }
    });

    return unsubscribe;
  }, [navigation, refreshed]);

  const handleBackFromNotification = useCallback(() => {
    setRefreshed(true); // Trigger refresh when coming back from notification
  }, []);

  useEffect(() => {
    navigation.addListener('focus', handleBackFromNotification);
    return () => {
      navigation.removeListener('focus', handleBackFromNotification);
    };
  }, [navigation, handleBackFromNotification]);

  // useEffect(() => {
  //     setTimeout(() => {
  //         setLoader(false);
  //     }, 3000);
  // }, []);

  const fetchnotification = async () => {
    try {
    
      const response = await fetch(
        `https://www.sales.g9media.ca/mobile_api/get_notification?id=${id}&type=student`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();
      console.log(JSON.stringify(json));
      setAllnotification(json);
    } catch (error) {
      console.log('error', error);
    } finally {
    }
  };

  const readmessage = async () => {
    try {
      const response = await fetch(
        `https://www.sales.g9media.ca/mobile_api/message_read`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message_id: msgid,
            id: id,
          }),
        },
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleNotificationPress = messageId => {
    setMsgid(messageId);
    setBackgroundStates(prevState => ({
      ...prevState,
      [messageId]: true,
    }));
    readmessage();
    navigation.navigate('MessageRead', {
      msg: allnotification.find(item => item.message_id === messageId).message,
      //   userDetails: allnotification
    });
  };

  // const renderItem = ({ item }) => (
  //     <TouchableOpacity
  //         onPress={() => handleNotificationPress(item.message_id)}
  //         style={[styles.notification, { backgroundColor: backgroundStates[item.message_id] ? '#5e86ad' : '#5a5b5c' }]}
  //     >
  //         <View>
  //             <Text style={styles.text}>{item.message}</Text>
  //         </View>
  //     </TouchableOpacity>
  // );

  const onRefresh = () => {
    setRefreshing(true);
    fetchnotification();
    // Perform any necessary actions to reload data
    // For example, fetch new data from an API

    // Simulate an asynchronous task (e.g., fetching data from an API)
    setTimeout(() => {
      // After the task is done, set refreshing to false to stop the loader
      setRefreshing(false);
    }, 2000); // Simulating a delay of 2 seconds
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            style={styles.backImage}
            source={require('../../../Assets/Image/back1.png')}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.maintext}>Notifications Screen </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#9Bd35A', 'red', 'blue']}
          />
        }>
        <View
          style={{
            flex: Platform.OS == 'ios' ? 1 : 1,
            backgroundColor: Platform.OS == 'ios' ? 'black' : '',
            marginTop: 12,
          }}>
          <FlatList
            data={allnotification}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handleNotificationPress(item.message_id)}>
                <View
                  style={[
                    styles.notification,
                    {
                      backgroundColor: item.read == 1 ? '#1d2f40' : '#5a5b5c',
                    },
                  ]}>
                  <Text style={styles.text}>
                    {item.message.split(' ').slice(0, 15).join(' ')}
                    {item.message.split(' ').length > 15 ? '......' : ''}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text2}>
                      Instructor: {item.sender_name}
                    </Text>
                    <Text style={[styles.text2, {marginLeft: 8}]}>
                      Date: {item.date.split(' ')[0]}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.message_id.toString()}
            onLayout={() =>{
              setTimeout(()=>{
                setLoader(false)
                }, 8000)
              }
            }
          />
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={loader}
        animationType="fade"
        onRequestClose={() => setLoader(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(76, 76, 77,0.5)',
          }}>
          <ActivityIndicator size={'large'} color={'skyblue'} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    width: '100%',
    backgroundColor: '#3d3e40',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: Platform.OS === 'ios' ? 57 : 0,
  },
  mainText: {
    color: 'orange',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 16,
    textAlign: 'center',
  },
  subText: {
    color: 'orange',
    fontSize: 14,
    // fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    marginRight: 16,
  },
  backImage: {
    width: 25,
    height: 25,
    tintColor: 'orange',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    Width: '100%',
  },
  maintext: {
    color: '#f5c849',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginRight: 15,
  },
  notification: {
    minHeight: 90,
    marginVertical: 5,
    padding: 10,
    width: '92%',
    justifyContent: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 8,
  },
  text: {
    color: 'orange',
    fontSize: 15,
    fontWeight: '800',
  },
  text2: {
    marginTop: 8,
    color: '#white',
    fontSize: 11,
    fontWeight: 'bold'
  },
});

export default AllNotification;
