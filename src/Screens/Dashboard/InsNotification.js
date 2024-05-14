import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Toast from 'react-native-toast-message';

const InsNotification = ({navigation, route}) => {
  const {id, instructorName} = route.params;

  const [insid, setInsid] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [backgroundStates, setBackgroundStates] = useState({});
  const [msgid, setMsgid] = useState('');
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [refreshed, setRefreshed] = useState(false);

  // console.warn(msgid)
  useEffect(() => {
    const id = route.params.id;
    setInsid(id);
    getnotifications();
  }, []);
  // console.log(insid);

  useEffect(() => {
    // Refresh the screen when the refreshed state changes
    const unsubscribe = navigation.addListener('focus', () => {
      if (refreshed) {
        getnotifications();
        // Alert.alert("Home Screen refreshed");
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

  const getnotifications = async () => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);

    try {
      await fetch(
        `https://www.sales.g9media.ca/mobile_api/get_notification?id=${instructorName}&type=admin`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
        .then(response => response.json())
        .then(json => {
          // console.log("console.log"+JSON.stringify(json));
          setNotifications(json);
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log('error', error);
    }
  };

  const notificationread = async messageId => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      message_id: messageId,
      id: instructorName,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://www.sales.g9media.ca/mobile_api/message_read',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        setMsgid(messageId);
        setBackgroundStates(preState => ({
          ...preState,
          [messageId]: true,
        }));

        navigation.navigate('InsMessage', {
          msg: notifications.find(item => item.message_id === messageId)
            .message,
          date: notifications.date,
          classname: notifications.classname,
          location: notifications.location,
          time: notifications.time,
          sender_name: notifications.sender_name,
        });

        // navigation.navigate('InsMessage', {
        //   msg: notifications.find(item => item.message_id === messageId)
        //     .message,
        // });

        // console.log("HelloAnkit",result)
      })
      .catch(error => console.error(error));
  };

  const handlePressNotification = async messageId => {};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: 25,
              height: 25,
              tintColor: 'orange',
            }}
            source={require('../../../Assets/Image/back1.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={styles.headertext}>Notifications</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <FlatList
            data={notifications}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    notificationread(item.message_id);
                  }}
                  style={[
                    styles.msg,
                    {backgroundColor: item.read === 0 ? 'gray' : '#1d2f40'},
                  ]}>
                     <View style={{marginBottom: 12}}>
            <Text style={styles.text}>{item.message}</Text>
          </View>
          <View style={{}}>
            <Text style={styles.text2}>Student Name : {item.sender_name}</Text>
            <Text style={styles.text2}>
              Class Name : {item.time}{" "}
              {item.classname}
            </Text>
            <Text style={styles.text2}>Date : {item.date.split(' ')[0]}</Text>
          </View>
          <View style={{}}>
            
            <Text style={styles.text2}>
              Location : {item.location}
            </Text>
          </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
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
            <ActivityIndicator size={'large'} color={'orange'} />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 55,
    width: '100%',
    backgroundColor: '#3d3e40',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: Platform.OS === 'ios' ? 57 : 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
  headertext: {
    color: '#f5c849',
    fontSize: 18,
    fontWeight: 'bold',
  },
  msg: {
    margin: 2,
    padding: 10,
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 12,
    marginTop: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
  text: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text2: {
    color: 'white',
    marginTop: 2,
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default InsNotification;
