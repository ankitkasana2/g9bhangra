import React, {useEffect, useState, useCallback} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  Alert,
  Platform,
  RefreshControl,
  ActivityIndicator,
  Modal
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function Dashboard({navigation, route}) {
  const [data, setData] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [cal, setCal] = useState(true);
  const [insdata, setInsdata] = useState('');
  const [insclasslist, setInsclasslist] = useState([]);
  const [insclasslist2, setInsclasslist2] = useState([]);
  const [alllocation, setAlllocation] = useState([]);
  const [allnotification, setAllnotification] = useState(0);
  const [myClassButton, setMyClassButton] = useState(0);
  const [extraClassButton, setExtraClassButton] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshed, setRefreshed] = useState(false);
  const [loader, setLoader] = useState(true);


  const filter = [
    {label: 'KITCHENER', value: 'KITCHENER'},
    {label: 'CAMBRIDGE', value: 'CAMBRIDGE'},
    {label: 'LONDON', value: 'LONDON'},
    {label: 'GUELPH', value: 'GUELPH'},
    {label: 'BRANTFORD', value: 'BRANTFORD'},
    {label: 'WOODSTOCK', value: 'WOODSTOCK'},
    {label: 'BURLINGTON', value: 'BURLINGTON'},
    {label: 'MILTON', value: 'MILTON'},
    {label: 'KANATA', value: 'KANATA'},
    {label: 'VAUDREUIL-DORION', value: 'VAUDREUIL-DORION'},
    {label: 'STONEY CREEK', value: 'STONEY CREEK'},
    {label: 'WINDSOR', value: 'WINDSOR'},
  ];

  const insInfoData = async () => {
    const instructordata = await route.params.data;
    await AsyncStorage.setItem('role', instructordata.role);
    await AsyncStorage.setItem('id', instructordata.user_id);
    // console.log(instructordata.role);
    // console.log(instructordata.user_id);
    // console.log(instructordata.role);
    setInsdata(instructordata);
  };

  useEffect(() => {
    insInfoData();
    getInstructorClassList();
    getalllocation();
    getAllNotification();
  }, [insdata, allnotification]);

  useEffect(() => {
    // Refresh the screen when the refreshed state changes
    const unsubscribe = navigation.addListener('focus', () => {
      if (refreshed) {
        getAllNotification();
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

  const getInstructorClassList = async () => {
    try {
      const response = await fetch(
        `https://www.sales.g9media.ca/mobile_api/get_instructor_class?name=${insdata.name}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();
      setInsclasslist(json.my_class);
      setInsclasslist2(json.extra_class);
      // console.log(json.extra_class);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //location based search instructor class list
  const handleDropdownChange = async selectedItem => {
    setData(selectedItem.label);
    try {
      const response = await fetch(
        `https://www.sales.g9media.ca/mobile_api/get_instructor_class?name=${insdata.name}&location=${selectedItem.value}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();
      setInsclasslist(json.my_class);
      setInsclasslist2(json.extra_class);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //get all location
  const getalllocation = async () => {
    try {
      await fetch(`https://www.sales.g9media.ca/mobile_api/get_location`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(json => {
          // console.log(JSON.stringify(json));
          setAlllocation(json);
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log('eror', error);
    }
  };
  // console.log("all location: ",alllocation);

  //get all notification
  const getAllNotification = async () => {
    try {
      await fetch(
        `https://www.sales.g9media.ca/mobile_api/total_notification?id=${insdata.name}&type=admin`,
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
          // console.log("getAllNotification", JSON.stringify(json));
          setAllnotification(json.total);
          setRefreshed(false);
          setLoader(false);
        })
        .catch(error => console.log('error ', error));
    } catch (error) {
      console.log('eror', error);
    }
  };
  // console.log(allnotification);

  //refresh page control
  // const onRefresh = async () => {
  //     setRefreshing(true);
  //     try {
  //         const response = await fetch(`https://www.sales.g9media.ca/mobile_api/get_instructor_class?name=${insdata.name}`, {
  //             method: 'GET',
  //             headers: {
  //                 Accept: 'application/json',
  //                 'Content-Type': 'application/json'
  //             }
  //         });
  //         const json = await response.json();
  //         setInsclasslist(json.my_class);
  //         setInsclasslist2(json.extra_class);
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //     }
  //     getallNotification();

  //     setTimeout(() => {
  //         setRefreshing(false);
  //     }, 2000);
  // };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const response = await fetch(
        `https://www.sales.g9media.ca/mobile_api/get_instructor_class?name=${insdata.name}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();
      setInsclasslist(json.my_class);
      setInsclasslist2(json.extra_class);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    getAllNotification();
    setRefreshing(false);
  };

  // console.warn(insclasslist);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Platform.OS == 'ios' ? '#bfbdbd' : '#28282b',
      }}>
      <View
        style={{
          backgroundColor: '#3d3e40',
          marginTop: Platform.OS == 'ios' ? 57 : '',
        }}>
        <View style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                width: 24,
                height: 24,
                tintColor: 'orange',
                marginLeft: 13,
              }}
              source={require('../../../Assets/Image/menuicon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.maintext}>Dashboard</Text>
          <View style={styles.notificationContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('InsNotification', {
                  id: insdata.user_id,
                  instructorName: insdata.name,
                })
              }>
              <Image
                style={{
                  width: 28,
                  height: 28,
                  marginRight: 15,
                  top: 10,
                  right: 5,
                }}
                source={require('../../../Assets/Image/bell.png')}
              />
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: 'red',
                  width: 20,
                  height: 20,
                  top: -25,
                  left: 10,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.show}>{allnotification}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <View>
                <TouchableOpacity onPress={() => navigation.navigate('AdminHome')}><Text style={{color:'orange'}}>AdminHome</Text></TouchableOpacity>
            </View> */}
      <View style={{flex: 1, backgroundColor: '#28282b'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#28282B',
            paddingHorizontal: 12,
            marginTop: 24,
          }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={{backgroundColor: '#3d3e40', borderRadius: 8}}
            data={filter}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Search by Location"
            value={data}
            itemContainerStyle={{
              backgroundColor: '#3d3e40',
              borderRadius: 8,
              borderWidth: 0.1,
              margin: 5,
              alignItems: 'center',
              borderColor: 'white',
              shadowOpacity: 0.1,
              shadowRadius: 8,
            }}
            itemTextStyle={{
              color: 'white',
              fontSize: 15,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}
            activeColor="#28282B"
            onChange={handleDropdownChange}
          />

          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={styles.datePicker}>
            {cal ? (
              <Text style={{color: 'white', fontSize: 14, alignSelf: 'center'}}>
                Search Time
              </Text>
            ) : (
              <Text style={{color: 'white', fontSize: 14, alignSelf: 'center'}}>
                {date.toLocaleString()}
              </Text>
            )}
          </TouchableOpacity>
          <DatePicker
            modal
            mode="time"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setCal(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#fff', 'red', 'blue']}
              tintColor={'orange'}
            />
          }>
          <View
            style={{backgroundColor: '#28282B', width: '100%', marginTop: 10}}>
            <View
              style={{
                justifyContent: 'center',
                marginVertical: 13,
                marginLeft: 13,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                My Classes
              </Text>
            </View>

            <FlatList
              data={insclasslist}
              renderItem={({item}) => {
                //    console.log(item);
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DanceClass', {
                        insname: insdata.name,
                        id: insdata.user_id,
                        name: item.classname,
                        location: item.location,
                        time: item.time,
                        type: item.type,
                        myClassButtonValue: myClassButton,
                        instructorName: item.instructor_name,
                        mainInstructorName: item.main_instructor_name,
                      })
                    }>
                    <View
                      style={{
                        width: '95%',
                        minHeight: 85,
                        backgroundColor: '#3d3e40',
                        margin: 10,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: 'black',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        elevation: 5, // For iOS elevation
                      }}>
                      {/* {console.warn(item.type)} */}
                      <Text
                        style={{
                          color: 'orange',
                          fontSize: 18,
                          margin: 10,
                          textAlign: 'center',
                        }}>
                        {' '}
                        {item.time} {item.classname}{' '}
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
                          {'(' + ' ' + item.main_instructor_name + ' ' + ')'}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{backgroundColor: '#28282B', width: '100%'}}>
            <View
              style={{
                justifyContent: 'center',
                marginVertical: 18,
                marginLeft: 13,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                Extra Classes
              </Text>
            </View>
            <FlatList
              data={insclasslist2}
              renderItem={({item}) => {
                // console.log(item);
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DanceClass', {
                        insname: insdata.name,
                        id: insdata.user_id,
                        name: item.classname,
                        location: item.location,
                        time: item.time,
                        type: item.type,
                        myClassButtonValue: extraClassButton,
                        instructorName: item.instructor_name,
                        mainInstructorName: item.main_instructor_name,
                      })
                    }>
                    <View
                      style={{
                        width: '95%',
                        minHeight: 85,
                        backgroundColor: '#3d3e40',
                        margin: 10,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: 'black',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        elevation: 5, // For iOS elevation
                      }}>
                      <Text
                        style={{
                          color: 'orange',
                          fontSize: 18,
                          margin: 10,
                          textAlign: 'center',
                        }}>
                        {item.time} {item.classname}{' '}
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
                          {'(' + ' ' + item.main_instructor_name + ' ' + ')'}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
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
          <ActivityIndicator size={'large'} color={'skyblue'} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  topview: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
  maintext: {
    color: '#f5c849',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  dropdown: {
    height: 43,
    borderRadius: 8,
    shadowColor: '#3d3e40',
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    width: '50%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#3d3e40',
  },
  datePicker: {
    height: 43,
    borderRadius: 8,
    shadowColor: '#3d3e40',
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    width: '40%',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#3d3e40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderStyle: {
    fontSize: 14,
    color: 'white',
  },
  selectedTextStyle: {
    fontSize: 14,
    padding: 5,
    color: 'white',
  },
  show: {
    color: 'white',
  },
});
