import React, {useEffect, useRef, useState, useCallback} from 'react';
import {
  Image,
  Animated,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
  ToastAndroid,
  Modal,
  Button,
  Platform,
} from 'react-native';
import Video from 'react-native-video';
import Textarea from 'react-native-textarea';
import {Dropdown} from 'react-native-element-dropdown';
import WebView from 'react-native-webview';
import Toast from 'react-native-toast-message';

export default function StudentDanceClass({navigation, route}) {
  const [video, setVideo] = useState(false);
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState(false);
  const [notes, setNotes] = useState(false);
  const [data, setData] = useState('');
  const [notify, setNotify] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [shop, setShop] = useState(false);
  const [information, setInformation] = useState('');
  const [information2, setInformation2] = useState('');
  const [information3, setInformation3] = useState('');
  const [information4, setInformation4] = useState('');
  // const [information, set] = useState('');
  const [videoLoaded, setVideoLoaded] = useState(false);

  const [videodata, setVideodata] = useState([]);
  const [userid, setUserid] = useState('');
  const [notesdata, setNotesdata] = useState([]);
  const [msgdata, setMsgdata] = useState('');
  const [date, , setDate] = useState(new Date());
  const [notifydata, setNotifydata] = useState('');

  const [msgerror, setMsgerror] = useState(false);
  const [notifyerror, setNotifyerror] = useState(false);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [instructorName, setInstructor] = useState('');
  const [refreshed, setRefreshed] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    userData();
    fetchvideo();
    // fetchnotes(page);
  }, [videodata]);

  useEffect(() => {
    // Refresh the screen when the refreshed state changes
    const unsubscribe = navigation.addListener('focus', () => {
      if (refreshed) {
        Alert.alert('Home Screen refreshed');
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

  const loadMoreNotes = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Alert.alert(JSON.stringify(notesdata));
  // Alert.alert(date.toDateString());
  async function userData() {
    // Alert.alert(JSON.stringify(route.params.info[0].classname))
    const data = await route.params.info[0].classname;
    setInformation(data);
    const data2 = await route.params.info[0].location;
    setInformation2(data2);
    const data3 = await route.params.info[0].time;
    setInformation3(data3);
    const data4 = await route.params.info[0].type;
    setInformation4(data4);
    const instructor = await route.params.info[0].instructor_name;
    setInstructor(instructor);
    //  console.warn(instructor);
    const id = await route.params.userid;
    setUserid(id);
  }

  const actloader = () => {
    setTimeout(() => {
      <ActivityIndicator size="large" color="#0000ff" />;
    }, 2000);
  };

  // console.warn(information2, information, information3, instructorName)
  console.log(
    `https://www.sales.g9media.ca/mobile_api/classvideo?location=${information2}&classname=${information}&classtime=${information3}&instructor_name=${instructorName}`,
  );
  const fetchvideo = async () => {
    try {
      await fetch(
        `https://www.sales.g9media.ca/mobile_api/classvideo?location=${information2}&classname=${information}&classtime=${information3}&instructor_name=${instructorName}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
        .then(response => response.json())
        .then(async json => {
          console.log('Videodata', json);
          let videoData = await json;
          setVideodata(videoData);
          console.log(videoData);
        })
        .catch(error => console.log('error ', error));
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoader(false);
    }
  };

  // const fetchvideo = async () => {

  //     try {
  //         await fetch(`https://www.sales.g9media.ca/mobile_api/classvideo?location=${classlocation}&classname=${classname}&classtime=${classtime}&intructor_name=${allInstructorName}`, {
  //             method: 'GET',
  //             headers: {
  //                 Accept: 'application/json',
  //                 "Content-Type": 'application/json'
  //             }
  //         }).then(response => response.json())
  //             .then(async (json) => {
  //                 console.log("Videodata", json);
  //                 let videoData = await json
  //                 setVideodata(videoData);
  //                 // console.log(videoData);
  //             })
  //             .catch(error => console.log("error ", error))
  //     }
  //     catch (error) {
  //         console.log("error", error);
  //     }

  // }

  const fetchnotes = async pageNumber => {
    try {
      // setLoader(true)
      await fetch(
        `https://www.sales.g9media.ca/mobile_api/getnotes?user_id=${userid}&page=${pageNumber}`,
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
          // console.log("notesdata", json);
          // setNotesdata(json);
          setNotesdata(prevNotes => [...prevNotes, ...json]);
          setLoading(false);
        })
        .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  // const sendmessage = async () => {
  //     try {

  //         await fetch(`https://www.sales.g9media.ca/mobile_api/sendnotification`, {
  //             method: 'POST',
  //             headers: {
  //                 Accept: 'application/json',
  //                 'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify({
  //                 from_id: userid,
  //                 toid: 'admin',
  //                 message: msgdata,
  //                 date: date.toDateString(),

  //             }).then(response =>console.log(response), response.text())
  //                 .then(json => {
  //                     console.log(json);
  //                     if (json.status) {
  //                         console.log("message send successfull!");
  //                         ToastAndroid.show("Message send successfull", ToastAndroid.LONG);
  //                     }
  //                     else {
  //                         console.log("message not sent",JSON.stringify(json));
  //                         ToastAndroid.show("Message not send!!", ToastAndroid.LONG);
  //                     }
  //                 })

  //         })
  //     }
  //     catch (error) {
  //         console.log(error);
  //         ToastAndroid.show("Message not send!!", ToastAndroid.LONG);
  //     }

  // }
  const sendmessage = async () => {
    setMessage(false);
    setLoader(true);

    if (message == '') {
      Toast.show({
        type: 'success',
        text1: 'Please Fill the Reason.',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
        style: {
          backgroundColor: '#000000',
          borderRadius: 10,
          padding: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: 100,
        },
        textStyle: {
          color: '#FFFFFF',
        },
      });
      return;
    }

    try {
      let hasError = false;
      !msgdata ? (setMsgerror(true), (hasError = true)) : setMsgerror(false);

      if (!hasError) {
        const response = await fetch(
          `https://www.sales.g9media.ca/mobile_api/sendnotification`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from_id: userid,
              toid: instructorName,
              classname: information,
              location: information2,
              time: information3,
              message: msgdata,

              // date: date.toDateString(),
            }),
          },
        );

        const json = await response.json();
        console.log(json);

        if (json.status) {
          setLoader(false);
          console.log('message send successfull!', json);
          // ToastAndroid.show("Message Send Successfull", ToastAndroid.LONG);
          Toast.show({
            type: 'success',
            text1: 'Message Send Successfully!',
            visibilityTime: 3000,
            autoHide: true,
            position: 'bottom',
            style: {
              backgroundColor: '#000000',
              borderRadius: 10,
              padding: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              height: 100,
            },
            textStyle: {
              color: '#FFFFFF',
            },
          });
        } else {
          console.log('message not sent', JSON.stringify(json));
          // ToastAndroid.show("Message Not Send!!", ToastAndroid.LONG);
          Toast.show({
            type: 'success',
            text1: 'Message Not Send!!',
            visibilityTime: 3000,
            autoHide: true,
            position: 'bottom',
            style: {
              backgroundColor: '#000000',
              borderRadius: 10,
              padding: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              height: 100,
            },
            textStyle: {
              color: '#FFFFFF',
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
      // ToastAndroid.show("Message not send!!", ToastAndroid.LONG);
      Toast.show({
        type: 'success',
        text1: 'Message not send!!',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
        style: {
          backgroundColor: '#000000',
          borderRadius: 10,
          padding: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: 100,
        },
        textStyle: {
          color: '#FFFFFF',
        },
      });
    }
  };

  const sendnotify = async () => {
    setNotify(false);
    setLoader(true);

    if (notifydata == '') {
      Toast.show({
        type: 'success',
        text1: 'Please Fill the Reason.',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
        style: {
          backgroundColor: '#000000',
          borderRadius: 10,
          padding: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: 100,
        },
        textStyle: {
          color: '#FFFFFF',
        },
      });
      return;
    }

    try {
      let hasError = false;

      !notifydata
        ? (setNotifyerror(true), (hasError = true))
        : setNotifyerror(false);

      if (!hasError) {
        // const response = await fetch(`https://www.sales.g9media.ca/mobile_api/sendabsent`, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         student_id: userid,
        //         reason: notifydata,
        //         toid: instructorName,
        //         classname: information,
        //         location: information2,
        //         time: information3,
        //     })

        // });
        const response = await fetch(
          `https://www.sales.g9media.ca/mobile_api/sendnotification`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from_id: userid,
              toid: instructorName,
              classname: information,
              location: information2,
              time: information3,
              message: notifydata,

              // date: date.toDateString(),
            }),
          },
        );

        const json = await response.json();
        setTimeout(() => {
          setLoader(false);
        }, 2000);
        console.log(json);

        if (json.status) {
          console.log('notify absense send successfull!', json);
          // ToastAndroid.show("Notify Absense Send Successfull", ToastAndroid.LONG);
          Toast.show({
            type: 'success',
            text1: 'Notify Absense Send Successfull',
            visibilityTime: 3000,
            autoHide: true,
            position: 'bottom',
            style: {
              backgroundColor: '#000000',
              borderRadius: 10,
              padding: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              height: 100,
            },
            textStyle: {
              color: '#FFFFFF',
            },
          });
        } else {
          console.log('notify absense not sent', JSON.stringify(json));
          ToastAndroid.show('Notify Absense Not Send!!', ToastAndroid.LONG);
          Toast.show({
            type: 'success',
            text1: 'Notify Absense Not Send!!',
            visibilityTime: 3000,
            autoHide: true,
            position: 'bottom',
            style: {
              backgroundColor: '#000000',
              borderRadius: 10,
              padding: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              height: 100,
            },
            textStyle: {
              color: '#FFFFFF',
            },
          });
        }
      }
    } catch (error) {
      console.log('error', error);
      ToastAndroid.show('Notify absense not send!!', ToastAndroid.LONG);
      Toast.show({
        type: 'success',
        text1: 'Notify absense not send!!',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
        style: {
          backgroundColor: '#000000',
          borderRadius: 10,
          padding: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: 100,
        },
        textStyle: {
          color: '#FFFFFF',
        },
      });
    }
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const openvideo = async () => {
    setVideo(!video);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const openmessage = () => {
    setMessage(!message);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const opennotes = () => {
    setNotes(!notes);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const opennotification = () => {
    setNotification(!notification);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const opennotify = () => {
    setNotify(!notify);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const openfacebok = () => {
    setFacebook(!facebook);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const openinstagram = () => {
    setInstagram(!instagram);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const openyoutube = () => {
    setYoutube(!youtube);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const openshop = () => {
    setShop(!shop);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const filter = [
    {label: 'user 1'},
    {label: 'user 2'},
    {label: 'user 3'},
    {label: 'user 4'},
  ];

  const notelist = notesdata.map((allnotes, index) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: '#28282B',
          margin: 5,
          padding: 5,
          borderRadius: 10,
        }}>
        <Text style={styles.paranotes}>{allnotes.comment}</Text>
      </View>
    );
  });

  return (
    <View style={{flex: 1}}>
      {/* <View style={styles.topview}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: 'orange',
                        }}
                        source={require('../../../Assets/Image/back1.png')}
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.maintext}>{information}</Text>
                </View>
            </View> */}
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
          <Text style={styles.mainText}>
            {information3} {information}
          </Text>
          <Text style={styles.subText}>
            {information2} {information4}
          </Text>
        </View>
      </View>

      <ScrollView
        style={{backgroundColor: '#000'}}
        showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <TouchableOpacity
                style={[
                  styles.box,
                  {backgroundColor: video ? '#8c6326' : '#35383b'},
                ]}
                onPress={() => {
                  fetchvideo(),
                    openvideo(),
                    setLoader(true),
                    setNotification(false),
                    setMessage(false),
                    setNotes(false),
                    setNotify(false);
                }}>
                <View
                  style={{
                    marginVertical: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.img}
                    source={require('../../../Assets/Image/video7.png')}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: video ? '#e6d927' : 'orange',
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    Videos
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.box2,
                  {backgroundColor: message ? '#8c6326' : '#35383b'},
                ]}
                onPress={() => {
                  openmessage(),
                    setNotification(false),
                    setVideo(false),
                    setNotes(false),
                    setNotify(false),
                    setMsgerror(false);
                }}>
                <View
                  style={{
                    marginVertical: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.img}
                    source={require('../../../Assets/Image/message.jpg')}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: video ? '#e6d927' : 'orange',
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    Message
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  styles.box3,
                  {backgroundColor: notes ? '#8c6326' : '#35383b'},
                ]}
                onPress={() => {
                  fetchnotes(page),
                    opennotes(),
                    setLoader(true),
                    setVideo(false),
                    setMessage(false),
                    setNotification(false),
                    setNotify(false);
                }}>
                <View
                  style={{
                    marginVertical: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.img}
                    source={require('../../../Assets/Image/notes2.png')}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: video ? '#e6d927' : 'orange',
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    Notes
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.box4,
                  {backgroundColor: notify ? '#8c6326' : '#35383b'},
                ]}
                onPress={() => {
                  opennotify(),
                    setVideo(false),
                    setMessage(false),
                    setNotes(false);
                }}>
                <View
                  style={{
                    marginVertical: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.img}
                    source={require('../../../Assets/Image/notify.png')}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: video ? '#e6d927' : 'orange',
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    Notify Absense
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {video === true ? (
              <SafeAreaView>
                <Animated.View>
                  <View style={{flex: 1}}>
                    {videodata.length > 0 ? (
                      videodata.map((video, index) => {
                        return (
                          <View
                            key={index}
                            style={{
                              backgroundColor: '#28282B',
                              margin: 5,
                              borderRadius: 10,
                            }}>
                            <Text style={styles.vname}>{video.name}</Text>
                            <Text style={styles.date}>
                              {video.date} {video.time}
                            </Text>
                            <Video
                              source={{uri: video.url}}
                              playWhenInactive={true}
                              style={styles.videos}
                              repeat={true}
                              // controls={true}
                              onLoad={() => setVideoLoaded(true)}
                            />
                            {videoLoaded ? null : (
                              <ActivityIndicator
                                size={'small'}
                                color={'skyblue'}
                              />
                            )}
                          </View>
                        );
                      })
                    ) : (
                      <View
                        style={{
                          margin: 8,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: 10,
                          backgroundColor: '#28282B',
                          borderRadius: 10,
                        }}>
                        <Text
                          style={{
                            padding: 10,
                            fontSize: 15,
                            fontWeight: 900,
                            margin: 5,
                          }}>
                          No videos found
                        </Text>
                      </View>
                    )}
                  </View>
                </Animated.View>
              </SafeAreaView>
            ) : null}

            {/* {

                            video === true ?
                                <SafeAreaView>
                                    <Animated.View>
                                        <View style={{ flex: 1 }}>
                                            {videodata.map((video, index) => (
                                                <View key={index} style={{ backgroundColor: '#28282B', margin: 5, borderRadius: 10 }}>

                                                    <Text style={styles.vname}>{video.name}</Text>
                                                    <Text style={styles.date}>{video.date} {video.time}</Text>
                                                    <Video
                                                        source={{ uri: video.url }}  // Assuming LightVideo is the source for your video
                                                        playWhenInactive={true}
                                                        style={styles.videos}
                                                        repeat={true}
                                                        // controls={true}
                                                        onLoad={() => setVideoLoaded(true)}
                                                    />
                                                    {videoLoaded ? null : <ActivityIndicator size={"small"} color={"skyblue"} />}
                                                </View>

                                            ))}
                                        </View>
                                    </Animated.View>
                                </SafeAreaView>

                                : ('')

                        } */}

            {message == true ? (
              <SafeAreaView>
                <Animated.View>
                  <View
                    style={{
                      marginVertical: 14,
                      backgroundColor: '#4a4646',
                      margin: 8,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        marginVertical: 12,
                        fontSize: 14,
                        fontWeight: '700',
                        color: 'orange',
                        marginLeft: 18,
                      }}>
                      Send Message to Instructor
                    </Text>
                    <Textarea
                      style={{
                        borderWidth: 1.5,
                        borderColor: 'orange',
                        width: '90%',
                        margin: 10,
                        marginLeft: 18,
                        borderRadius: 10,
                        textAlignVertical: 'top',
                        padding: 8,
                        height: 150,
                        color: 'white',
                      }}
                      onChangeText={text => setMsgdata(text)}
                      value={msgdata}
                    />
                    <TouchableOpacity
                      onPress={() => sendmessage()}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 12,
                      }}>
                      <View style={styles.btnsubmit}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: '#fff',
                            fontWeight: '600',
                          }}>
                          Send Message
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              </SafeAreaView>
            ) : (
              ''
            )}
            {notes == true ? (
              <SafeAreaView>
                <Animated.View>
                  <View style={{flex: 1}}>
                    <View>
                      {notesdata.length > 0 ? (
                        notesdata.map((allnotes, index) => {
                          return (
                            <View
                              key={index}
                              style={{
                                backgroundColor: '#28282B',
                                margin: 8,
                                padding: 8,
                                borderRadius: 10,
                              }}>
                              <Text style={styles.paranotes}>
                                {allnotes.comment}
                              </Text>
                            </View>
                          );
                        })
                      ) : (
                        <View
                          style={{
                            margin: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10,
                            backgroundColor: '#28282B',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              padding: 10,
                              fontSize: 15,
                              fontWeight: 900,
                              margin: 5,
                            }}>
                            No Notes Available
                          </Text>
                        </View>
                      )}
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        loadMoreNotes(), fetchnotes(page), setLoading(true);
                      }}
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 5,
                        backgroundColor: '#454543',
                        borderRadius: 20,
                      }}>
                      {loading ? (
                        <ActivityIndicator
                          style={{padding: 10}}
                          size={'small'}
                          color={'skyblue'}
                        />
                      ) : (
                        <Text
                          style={{
                            fontSize: 15,
                            color: 'white',
                            fontWeight: 'bold',
                            padding: 10,
                          }}>
                          Load More
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              </SafeAreaView>
            ) : (
              ''
            )}
            {notify == true ? (
              <SafeAreaView>
                <Animated.View>
                  <View
                    style={{
                      marginVertical: 14,
                      backgroundColor: '#4a4646',
                      margin: 8,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        marginVertical: 12,
                        fontSize: 14,
                        fontWeight: '700',
                        color: 'orange',
                        marginLeft: 18,
                      }}>
                      Notify Here
                    </Text>
                    <Textarea
                      style={{
                        borderWidth: 1.5,
                        borderColor: 'orange',
                        width: '90%',
                        margin: 10,
                        marginLeft: 18,
                        borderRadius: 10,
                        textAlignVertical: 'top',
                        padding: 8,
                        height: 150,
                        color: 'white',
                      }}
                      onChangeText={text => setNotifydata(text)}
                      value={notifydata}
                    />

                    <View>
                      <TouchableOpacity
                        onPress={() => sendnotify()}
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View style={styles.btnsubmit}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: '#fff',
                              fontWeight: '600',
                            }}>
                            Send
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Animated.View>
              </SafeAreaView>
            ) : (
              ''
            )}
          </View>

          <View>
            {/* <ScrollView horizontal={true}> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
                marginTop: 100,
              }}>
              <TouchableOpacity
                style={{height: 50, width: 50, borderRadius: 10, margin: 13}}
                onPress={() => {
                  openfacebok(), setInstagram(false), setYoutube(false);
                }}>
                <Image
                  source={require('../../../Assets/Image/fb2.png')}
                  resizeMode="cover"
                  style={{height: 50, width: 50, borderRadius: 50}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 50, width: 50, borderRadius: 10, margin: 13}}
                onPress={() => {
                  openinstagram(), setFacebook(false), setYoutube(false);
                }}>
                <Image
                  source={require('../../../Assets/Image/instagram.jpg')}
                  resizeMode="cover"
                  style={{height: 50, width: 50, borderRadius: 50}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 50, width: 50, borderRadius: 10, margin: 13}}
                onPress={() => {
                  openyoutube(), setFacebook(false), setInstagram(false);
                }}>
                <Image
                  source={require('../../../Assets/Image/youtube.png')}
                  resizeMode="cover"
                  style={{height: 50, width: 50, borderRadius: 50}}
                />
              </TouchableOpacity>
            </View>

            {facebook ? (
              <View style={{flex: 1}}>
                <WebView
                  scalesPageToFit={true}
                  bounces={false}
                  androidHardwareAccelerationDisabled={true}
                  javaScriptEnabled={true}
                  scrollEnabled={true}
                  style={{flex: 1, height: 500, margin: 5}}
                  source={{
                    uri: 'https://www.facebook.com/',
                  }}
                  automaticallyAdjustContentInsets={false}
                  startInLoadingState={true}
                  renderLoading={() => (
                    <View style={styles.actvityIndicator}>
                      <ActivityIndicator size={'small'} color={'#447ef2'} />
                    </View>
                  )}
                />
              </View>
            ) : (
              ''
            )}
            {instagram ? (
              <View style={{flex: 1}}>
                <WebView
                  scalesPageToFit={true}
                  bounces={false}
                  androidHardwareAccelerationDisabled={true}
                  javaScriptEnabled={true}
                  scrollEnabled={true}
                  style={{flex: 1, height: 500, margin: 5}}
                  source={{
                    uri: 'https://www.instagram.com/',
                  }}
                  automaticallyAdjustContentInsets={false}
                  startInLoadingState={true}
                  renderLoading={() => (
                    <View style={styles.actvityIndicator}>
                      <ActivityIndicator size={'small'} color={'#447ef2'} />
                    </View>
                  )}
                />
              </View>
            ) : (
              ''
            )}
            {youtube ? (
              <View style={{flex: 1}}>
                <WebView
                  scalesPageToFit={true}
                  bounces={false}
                  androidHardwareAccelerationDisabled={true}
                  javaScriptEnabled={true}
                  scrollEnabled={true}
                  style={{flex: 1, height: 500, margin: 5}}
                  source={{
                    uri: 'https://www.youtube.com/',
                  }}
                  automaticallyAdjustContentInsets={false}
                  startInLoadingState={true}
                  renderLoading={() => (
                    <View style={styles.actvityIndicator}>
                      <ActivityIndicator size={'small'} color={'#447ef2'} />
                    </View>
                  )}
                />
              </View>
            ) : (
              ''
            )}

            {/* </ScrollView> */}
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                padding: 10,
                color: 'orange',
              }}>
              HELPFUL LINKS
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('ClassCancel')}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  padding: 10,
                  color: 'skyblue',
                }}>
                - CLASS REQUEST FORM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:7733245188`)}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  padding: 10,
                  color: 'skyblue',
                }}>
                - CALL US
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openshop();
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  padding: 10,
                  color: shop ? '#e6d927' : 'skyblue',
                }}>
                - SHOP
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => { opennotify(), setVideo(false), setMessage(false), setNotes(false), setNotification(false) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 10, color: notify ? '#1c3beb' : 'skyblue' }}>- NOTIFY ABSENSE</Text>
                        </TouchableOpacity> */}

            {shop ? (
              <View style={{flex: 1}}>
                <WebView
                  scalesPageToFit={true}
                  bounces={true}
                  androidHardwareAccelerationDisabled={true}
                  javaScriptEnabled={true}
                  scrollEnabled={true}
                  style={{flex: 1, height: 500, margin: 5}}
                  source={{
                    uri: 'https://g9bhangra.ca/',
                  }}
                  automaticallyAdjustContentInsets={false}
                  automaticallyAdjustsScrollIndicatorInsets={true}
                  startInLoadingState={true}
                  renderLoading={() => (
                    <View style={styles.actvityIndicator}>
                      <ActivityIndicator size={'small'} color={'#447ef2'} />
                    </View>
                  )}
                />
              </View>
            ) : (
              ''
            )}
          </View>
        </View>

        {notification == true ? (
          <SafeAreaView>
            <Animated.View>
              <View style={{flex: 1}}>
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={{fontSize: 12, color: 'white'}}
                  selectedTextStyle={{fontSize: 12, padding: 5}}
                  inputSearchStyle={{
                    height: 40,
                    fontSize: 16,
                    backgroundColor: '#3d3e40',
                  }}
                  data={filter}
                  maxHeight={220}
                  labelField="label"
                  valueField="value"
                  placeholder="Select user..."
                  value={data}
                  itemContainerStyle={{backgroundColor: '#3d3e40'}}
                  itemTextStyle={{color: 'white'}}
                  onChange={item => {
                    setData(item.label);
                  }}
                />
                <Text style={{color: 'white', marginLeft: 25}}>
                  Type message here
                </Text>
                <Textarea
                  style={{
                    borderWidth: 1,
                    borderColor: 'orange',
                    width: '90%',
                    margin: 10,
                    marginLeft: 18,
                    borderRadius: 10,
                    textAlignVertical: 'top',
                    padding: 8,
                    height: 150,
                  }}
                />

                <TouchableOpacity
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={styles.btnsubmit}>
                    <Text
                      style={{fontSize: 14, color: '#fff', fontWeight: '600'}}>
                      Send
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </SafeAreaView>
        ) : (
          ''
        )}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    width: '100%',
    backgroundColor: '#3d3e40',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
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
  topview: {
    height: 60,
    width: '100%',

    backgroundColor: '#232329',
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
    fontWeight: 900,
    marginTop: -40,
    width: '80%',
  },
  box: {
    width: '45%',
    height: 180,
    margin: 10,
    borderRadius: 10,
  },
  box2: {
    backgroundColor: '#2d2d2e',
    width: '45%',
    height: 180,
    margin: 10,
    borderRadius: 10,
  },
  box3: {
    backgroundColor: '#2d2d2e',
    width: '45%',
    height: 180,
    margin: 10,
    borderRadius: 10,
  },
  box4: {
    backgroundColor: '#2d2d2e',
    width: '45%',
    height: 180,
    margin: 10,
    borderRadius: 10,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: 'stretch',
    marginBottom: 20,
  },

  vname: {
    color: 'orange',
    fontSize: 15,
    marginTop: 5,
    padding: 5,
  },
  date: {
    padding: 5,
    color: 'white',
  },
  videos: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  dropdown: {
    margin: 10,
    height: 50,
    borderColor: 'orange',
    borderWidth: 1,
    width: '90%',
    paddingLeft: 5,
    borderRadius: 10,
    marginLeft: 20,
  },
  btnsubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    textAlign: 'center',
    margin: 10,
    borderRadius: 12,
    width: '33%',
    height: 38,
  },
  btncancel: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    color: 'black',
    padding: 10,
    borderRadius: 10,
  },
  headnotes: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    padding: 5,
    marginTop: 5,
  },
  paranotes: {
    fontSize: 15,
    padding: 5,
    color: '#ced9ed',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    padding: 5,
    marginLeft: 15,
    fontWeight: 900,
    top: -12,
  },
});
