import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState, useCallback} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';

export default function StudentHomeScreen({navigation, route}) {
  const [userId, setUserid] = useState('');
  const [data, setData] = useState([]);
  const [allnotification, setAllnotification] = useState(0);
  const [refreshed, setRefreshed] = useState(false);
  const [loader, setLoader] = useState(true);

  // Alert.alert(JSON.stringify(data));
  useEffect(() => {
    
    const {id} = route.params;
    try {
      AsyncStorage.setItem('id', id);
      // console.log('Data stored successfully',id);
    } catch (error) {
      console.log('Error storing data:', error);
    }
    setUserid(id);
    fetchallnotification();
    classlistapi();
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (refreshed) {
    fetchallnotification();
    classlistapi();
 // Alert.alert('Home Screen refreshed');
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

  // console.log(userId);
  const fetchallnotification = async () => {
    try {
      await fetch(
        `https://www.sales.g9media.ca/mobile_api/total_notification?id=${userId}&type=student`,
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
          // console.log(json);
          // Alert.alert(JSON.stringify(json.total));
          setAllnotification(json.total);
          
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log('error', error);
    }
  };

  const classlistapi = async () => {
    var requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch(
      `https://www.sales.g9media.ca/mobile_api/classlist?id=${userId}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        //    Alert.alert(result);
        console.log(result);
        setData([result]);
        setLoader(false);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#3d3e40',
          marginTop: Platform.OS == 'ios' ? 57 : '',
        }}>
        <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: 'orange',
                marginLeft: 12,
              }}
              source={require('../../../Assets/Image/menuicon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.maintext}>Student Screen</Text>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AllNotification', {id: userId})
              }>
              <Image
                style={{
                  width: 28,
                  height: 28,
                  marginRight: 10,
                  top: 10,
                  right: 5,
                }}
                source={require('../../../Assets/Image/bell.png')}
              />
              <View
                style={{
                  backgroundColor: 'red',
                  borderRadius: 50,
                  width: 22,
                  top: -25,
                  left: 10,
                }}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  {allnotification}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#28282B', width: '100%'}}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 8,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Student Classes
          </Text>
        </View>

        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StudentDanceClass', {
                  info: data,
                  userid: userId,
                })
              }>
              <View
                style={{
                  width: '95%',
                  backgroundColor: '#3d3e40',
                  margin: 10,
                  borderRadius: 10,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'orange', fontSize: 18, margin: 10}}>
                      {item.time} {item.classname}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 5,
                        marginBottom: 10,
                      }}>
                      <Text
                        style={{
                          color: 'orange',
                          fontSize: 18,
                          textAlign: 'center',
                        }}>
                        {' '}
                        {item.location}
                      </Text>
                      <Text
                        style={{
                          color: 'orange',
                          fontSize: 13,
                          textAlign: 'center',
                        }}>
                        {' '}
                        {'(' + ' ' + item.instructor_name + ' ' + ')'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
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
    </View>
  );
}

const styles = StyleSheet.create({
  topview: {
    height: 60,
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  maintext: {
    color: '#f5c849',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
