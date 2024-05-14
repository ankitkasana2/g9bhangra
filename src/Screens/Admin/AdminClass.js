import React, { useEffect, useRef, useState, useTransition } from 'react';
import { ActivityIndicator, Alert, Animated, Image, LayoutAnimation, Modal, PermissionsAndroid, Platform, Pressable, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cell } from 'react-native-table-component';
import DatePicker from 'react-native-date-picker';
import Textarea from 'react-native-textarea';
import Video from 'react-native-video'
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Dropdown } from 'react-native-element-dropdown';
import VideoPlayer from 'react-native-video-player';

export default function AdminClass({ navigation, route }) {

    const [list, setList] = useState(false);
    const [video, setVideo] = useState(false);
    const [popup, setPopup] = useState(false);
    const [resonpopup, setReasonpopup] = useState(false);
    const [upload, setUpload] = useState(false);
    const [notification, setNotification] = useState(false);
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [date3, setDate3] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [cal, setCal] = useState(true);
    const [cal2, setCal2] = useState(true);
    const [cal3, setCal3] = useState(true);
    const [data, setData] = useState('');
    const [enrolled, setEnrolled] = useState(false);
    const [newenrolled, setNewEnrolled] = useState(false);
    const [walking, setWalking] = useState(false);
    const [addnew, setAddnew] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [yes, setYes] = useState(false);
    const [message, setMessage] = useState(false);
    const [message2, setMessage2] = useState(false);
    const [enrollsubmenu, setEnrollSubMenu] = useState(false);
    const [boxVisibility, setBoxVisibility] = useState([]);
    const [inactiveuser, setInactibeuser] = useState(false);

    const [classname, setClassname] = useState('');
    const [classlocation, setClasslocation] = useState('');
    const [classtime, setClasstime] = useState('');
    const [classtype, setClasstype] = useState('');
    const [studentlist, setStudentlist] = useState([]);
    const [inactivestudentlist, setInactiveStudentlist] = useState([]);
    const [adminname, setAdminname] = useState('');
    const [videodata, setVideodata] = useState([]);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [adminid, setAdminid] = useState('');

    const [msg, setMsg] = useState('');
    const [msgerror, setMsgerror] = useState(false);

    const [selectvideo, setSelectevideo] = useState(false);

    const [newlyinrold, setNewlyinrold] = useState([]);
    const [newlystudetnid, setNewlystudentid] = useState('');
    const [enrollstudetnid, setEnrollstudentid] = useState('');
    const [stumsg, setStumsg] = useState('');
    const [stumsg2, setStumsg2] = useState('');
    const [stumsgerror, setStumsgerror] = useState(false);
    const [stumsgerror2, setStumsgerror2] = useState(false);
    const [dance, setDance] = useState('');

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videotitle, setVideotitle] = useState('');
    const [videoextension, setVideoextendsion] = useState('');
    const [videoresposne, setVideoresponse] = useState({});
    const [videoloader, setVideoloader] = useState(false);

    const [videotitleerror, setVideotitleerror] = useState(false);
    const [dateerror, setDateerror] = useState(false);
    const [dateerror2, setDateerror2] = useState(false);
    const [videoresponseerror, setVideoresponseerror] = useState(false);

    const [walkinfirstname, setWalkinfirstname] = useState('');
    const [walkinlastname, setWalkinlastname] = useState('');
    const [walkinphone, setWalkinphone] = useState('');
    const [walkinemail, setWalkinemail] = useState('');
    const [walkincity, setWalkincity] = useState('');
    const [walkinpostal, setWalkinpostal] = useState('');
    const [walkinloader, setWalkinloader] = useState(false);

    const [walkinfirsterror, setWalkinfirsterror] = useState(false);
    const [walkinlasterror, setWalkinlasterror] = useState(false);
    const [walkinphoneerror, setWalkinphoneerror] = useState(false);
    const [walkinemailerror, setWalkinemailerror] = useState(false);
    const [walkincityerror, setWalkincityerror] = useState(false);
    const [walkinpostalerror, setWalkinpostalerror] = useState(false);
    const [walkindanceerror, setWalkindanceerror] = useState(false);
    const [walkindateerror, setWalkindateerror] = useState(false);

    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        const cname = route.params.name;
        setClassname(cname);
        // console.log("admin class name",cname);
        const loc = route.params.location;
        // console.log("amdin locaiton",loc);
        setClasslocation(loc);
        const t = route.params.time;
        // console.log("amdim class time",t);
        setClasstime(t);
        const ty = route.params.type;
        // console.log("admin class type", ty);
        setClasstype(ty);
        const iname = route.params.insname;
        // console.log("amdin name ",iname);
        setAdminname(iname);
        const id = route.params.id;
        setAdminid(id);
        // console.log("admin id",id)

        getStudentList();
        getinactivelist();
        fetchvideo();
    //  const id=AsyncStorage.getItem("id");
        getnewlyenrolled();

    }, [videodata]);

    // console.log(adminid);
    const getStudentList = async () => {

        try {
            const response = await fetch(`https://www.sales.g9media.ca/mobile_api/get_student_list?location=${classlocation}&type=${classtype}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json();
            // console.log(JSON.stringify(json));
            setStudentlist(json);
            // setBoxVisibility(Array(json.length).fill(false));
        }
        catch (error) {
            console.log("Errors ", error);
        }


    }
    // console.log("student list ", studentlist);

    const getinactivelist = async () => {

        try {
            const response = await fetch(`https://www.sales.g9media.ca/mobile_api/get_inactive_student?location=${classlocation}&type=${classtype}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json();
            // console.log(JSON.stringify(json));
            setInactiveStudentlist(json);

        }
        catch (error) {
            console.log("Errors ", error);
        }


    }
    // console.log("inactive lsit", inactivestudentlist);


    //get videos
    const fetchvideo = async () => {

        try {
            await fetch(`https://www.sales.g9media.ca/mobile_api/classvideo?location=${classlocation}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                }
            }).then(response => response.json())
                .then(async (json) => {
                    // console.log("Videodata", json);
                    let videoData = await json
                    setVideodata(videoData);
                    // console.log(videoData);
                })
                .catch(error => console.log("error ", error))
        }
        catch (error) {
            console.log("error", error);
        }

    }


    //send notification by admin
    const sendnotification = async () => {
        try {

            let hasError = false;
            ((!msg) ? (setMsgerror(true), hasError = true) : setMsgerror(false))

            if (!hasError) {

                const response = await fetch(`https://www.sales.g9media.ca/mobile_api/sendnotification`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        from_id: adminid,
                        toid: 'instructor',
                        message: msg,

                        // date: date.toDateString(),
                    })
                });

                const json = await response.json();
                console.log(json);

                if (json.status) {
                    console.log("message send successfull!", json);
                    ToastAndroid.show("Message Send Successfully", ToastAndroid.LONG);

                } else {
                    console.log("message not sent", JSON.stringify(json));
                    ToastAndroid.show("Message Not Send!!", ToastAndroid.LONG);
                }
            }
        } catch (error) {
            console.log(error);
            ToastAndroid.show("Message not send!!", ToastAndroid.LONG);
        }
    };


    //get newly enroled 
    const getnewlyenrolled = async () => {

        try {
            const response = await fetch(`https://www.sales.g9media.ca/mobile_api/get_enrolled_student?location=${classlocation}&type=${classtype}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json();
            // console.log(JSON.stringify(json));
            setNewlyinrold(json);

        }
        catch (error) {
            console.log("Errors ", error);
        }


    }

    //confirm student
    const studentconfirm = async () => {

        try {
            await fetch(`https://www.sales.g9media.ca/mobile_api/change_enrolled?id=${newlystudetnid}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(json => {
                    console.log(JSON.stringify(json));
                    if (json.status) {
                        console.log("student confirm");
                    }
                    else {
                        console.log("student not confirm");
                    }
                })
                .catch(error => console.log("error", error))



        }
        catch (eror) {
            console.log("error", eror);
        }



    }


    //send newly studetn message by admin
    const sendmessage = async () => {

        try {

            let hasError = false;
            ((!stumsg) ? (setStumsgerror(true), hasError = true) : setStumsgerror(false))

            if (!hasError) {
                setMessage(!message)
                const response = await fetch(`https://www.sales.g9media.ca/mobile_api/sendnotification`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: {
                        from_id: adminid,
                        toid: newlystudetnid,
                        message: stumsg

                    }

                })
                const json = await response.json();
                console.log(json);

                if (json.status) {
                    console.log("message send successfull!", json);
                    ToastAndroid.show("Message Send Successfull", ToastAndroid.LONG);

                } else {
                    console.log("message not sent", JSON.stringify(json));
                    ToastAndroid.show("Message Not Send!!", ToastAndroid.LONG);
                }

            }
        }
        catch (error) {
            console.log("error", error);
            ToastAndroid.show("Message Not Sent", ToastAndroid.LONG);
        }
    }

    //sent enroll studtn msg by admin
    const sendmessage2 = async () => {

        try {

            let hasError = false;
            ((!stumsg2) ? (setStumsgerror2(true), hasError = true) : setStumsgerror2(false))

            if (!hasError) {
                setMessage2(!message2)
                const response = await fetch(`https://www.sales.g9media.ca/mobile_api/sendnotification`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: {
                        from_id: adminid,
                        toid: enrollstudetnid,
                        message: stumsg

                    }

                })
                const json = await response.json();
                // console.log(json);

                if (json.status) {
                    console.log("message send successfull!", json);
                    ToastAndroid.show("Message Send Successfull", ToastAndroid.LONG);

                } else {
                    console.log("message not sent", JSON.stringify(json));
                    ToastAndroid.show("Message Not Send!!", ToastAndroid.LONG);
                }

            }
        }
        catch (error) {
            console.log("error", error);
            ToastAndroid.show("Message Not Sent", ToastAndroid.LONG);
        }
    }

    // walkin api by admin
    const sendwalkin = async () => {

        try {
            const hasError = false;

            ((!walkinfirstname) ? (setWalkinfirsterror(true), hasError = true) : setWalkinfirsterror(false));
            ((!walkinlastname) ? (setWalkinlasterror(true), hasError = true) : setWalkinlasterror(false));
            (!(walkinphone.length >= 10 && walkinphone.length <= 12) ? (setWalkinphoneerror(true), hasError = true) : setWalkinphoneerror(false));
            ((!walkinemail) ? (setWalkinemailerror(true), hasError = true) : setWalkinemailerror(false));
            ((!walkincity) ? (setWalkincityerror(true), hasError = true) : setWalkincityerror(false));
            (!(walkinpostal.length >= 6 && walkinpostal.length <= 6) ? (setWalkinpostalerror(true), hasError = true) : setWalkinpostalerror(false));
            ((!dance) ? (setWalkindanceerror(true), hasError = true) : setWalkindanceerror(false));

            ((date3.toLocaleDateString() === null) ? (setWalkindateerror(true), hasError = true) : setWalkindateerror(false));

            console.log(date3.toLocaleDateString());

            if (!hasError) {
                setWalkinloader(true)
                await fetch(`https://g9bhangra.ca/api/walkIn`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "first-name": walkinfirstname,
                        "last-name": walkinlastname,
                        "tel-813": walkinphone,
                        "tel-814": "",
                        "tel-391": "",
                        "email": walkinemail,
                        "dob": "",
                        "address": "",
                        "city": walkincity,
                        "Postal": walkinpostal,
                        "ClassType": classtype,
                        "Location": classlocation,
                        "dance_form": dance,
                        "firstclass": date3.toLocaleDateString(),
                        "time": "8:00 AM"

                    })
                }).then(response => response.json())
                    .then(json => {
                        console.log(JSON.stringify(json));
                        if (json.status) {
                            console.log("submit successfully");
                            ToastAndroid.show("Submit Successfully!", ToastAndroid.LONG);

                        }
                        else {
                            console.log("not submitted");
                            ToastAndroid.show("Not Submit Successfully!", ToastAndroid.LONG);
                        }
                    })
                    .catch(error => console.log("error ", error))
            }

        }
        catch (error) {
            console.log("error", error);
            ToastAndroid.show("Invalid Credentials", ToastAndroid.LONG);
        }
        finally {
            setWalkinloader(false);
        }

    }


    // upload video by admin
    const uploadVideo = async () => {

        try {
            const hasError = false;
            ((!videotitle) ? (setVideotitleerror(true), hasError = true) : setVideotitleerror(false));
            ((!date.toDateString()) ? (setDateerror(true), hasError = true) : setDateerror(false));
            ((!date2.toLocaleTimeString()) ? (setDateerror2(true), hasError = true) : setDateerror2(false));
            ((!videoresposne) ? (setVideoresponseerror(true), hasError = true) : setVideoresponseerror(false));


            if (!hasError) {
                setVideoloader(true);
                const myHeader = new Headers();
                myHeader.append('Content-Type', 'multipart/form-data');
                console.log("my headers", myHeader);
                console.log("my select video", videoresposne.assets);
                console.log("my select video uri", videoresposne.assets[0].uri);

                const formdata = new FormData();
                formdata.append("vtitle", videotitle);
                formdata.append("location", classlocation);
                formdata.append("category", "Dance");
                formdata.append("time", date2.toLocaleTimeString());
                formdata.append("recorded_date", date.toDateString());
                formdata.append("days", "Sunday");
                formdata.append("element_name", videoextension);
                // formdata.append("image", fileInput.files[0], videoresposne.assets[0].uri);
                formdata.append("image", {
                    uri: videoresposne.assets[0].uri,
                    name: videoresposne.assets[0].uri,
                    type: 'video/mp4'
                });

                console.log("headers ", formdata);
                const requestOptions = {
                    method: "POST",
                    headers: myHeader,
                    body: formdata,
                    redirect: "follow"
                };



                await fetch("https://www.sales.g9media.ca/mobile_api/upload_video", requestOptions)
                    .then((response) => response.text())
                    .then((result) => {
                        console.log("video successfully uploaded");
                        console.log("result", result);
                        if (result) {
                            console.log("video successfully uploaded");
                            ToastAndroid.show("Video Successfully Uploaded.", ToastAndroid.LONG);
                        }
                        else {
                            console.log("video not uploaded.");
                            ToastAndroid.show("Video Not Uploaded.", ToastAndroid.LONG);
                        }

                    })

                    .catch((error) => console.error(error));
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setVideoloader(false);
        }

    }



    //open gallery
    // const openImagePicker = () => {
    //     const options = {
    //         mediaType: 'video',
    //         includeBase64: true,
    //         videoQuality: 'high',
    //         // maxHeight: 2000,
    //         // maxWidth: 2000,
    //     };

    //     launchImageLibrary(options, (response) => {
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('Image picker error: ', response.error);
    //         } else {
    //             let imageUri = response.uri || response.assets?.[0]?.uri;
    //             setSelectedVideo(imageUri);
    //             const parts = imageUri.split('/');
    //             const fileNameWithExtension = parts[parts.length - 1];
    //             setVideoextendsion(fileNameWithExtension);
    //             // console.log(imageUri);

    //         }
    //     });
    // };
    const openImagePicker = () => {
        const options = {
            mediaType: 'video'
        };

        launchImageLibrary(options, (response) => {
            console.log('Image picker response:', response);
            setVideoresponse(response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || (response.assets && response.assets[0]?.uri);
                console.log('Selected video URI:', imageUri);
                setSelectedVideo(imageUri);
                const parts = imageUri.split('/');
                const fileNameWithExtension = parts[parts.length - 1];
                setVideoextendsion(fileNameWithExtension);
                // console.log("Video extendsion ",videoextension);
            }
        });
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchvideo();
        // Perform any necessary actions to reload data
        // For example, fetch new data from an API
    
        // Simulate an asynchronous task (e.g., fetching data from an API)
        setTimeout(() => {
          // After the task is done, set refreshing to false to stop the loader
          setRefreshing(false);
        }, 2000); // Simulating a delay of 2 seconds
      };



    //   console.log(selectedVideo);
    //   console.log(videoextension);

    // Split the file path by '/'
    // const parts = selectedVideo.split('/');

    // Get the last part which contains the file name
    // const fileNameWithExtension = parts[parts.length - 1];

    // Split the file name by '.' to separate the file name and extension
    // const fileNameParts = fileNameWithExtension.split('.');

    // Get the file name without extension
    // const fileName = fileNameParts.slice(0, -1).join('.');

    // console.log(fileNameWithExtension);

    const danceform = [
        { label: 'Bhangra', value: 'Bhangra' },
        { label: 'Giddha', value: 'Giddha' },
        { label: 'Bhangra & Giddha', value: 'Bhangra & Giddha' },
        { label: 'Bollywood', value: 'Bollywood' },
        { label: 'Classical', value: 'Classical' },
        { label: 'Zumba', value: 'Zumba' },
    ];


    const filter = [
        { label: 'user 1', value: 'user 1' },
        { label: 'user 2', value: 'user 2' },
        { label: 'user 3', value: 'user 3' },
        { label: 'user 4', value: 'user 4' },
    ]

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef();

    const openlist = () => {
        setList(!list)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }

    const openvideo = () => {
        setVideo(!video)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }

    const openupload = () => {
        setUpload(!upload)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }

    const opennotification = () => {
        setNotification(!notification)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }
    const scrollToPosition = (position) => {
        // Use the scrollTo method with x and y coordinates
        scrollViewRef.current.scrollTo({ x: 0, y: position, animated: true });
        // Adjust the 'y' value according to the position you want to scroll to
    };

    const openenrolled = () => {
        setEnrolled(!enrolled)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }
    const opennewenroll = () => {
        setNewEnrolled(!newenrolled)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }

    const openinactibe = () => {
        setInactibeuser(!inactiveuser)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }
    const openaddnew = () => {
        setAddnew(!addnew)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }
    const openenrollsubmenu = () => {
        setEnrollSubMenu(!enrollsubmenu)
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded)
    }

    const toggleBox = (index) => {
        // Create a new array with the same length as tableenrolldata
        const newVisibilityArray = [...boxVisibility];
        // Toggle the visibility for the clicked row
        newVisibilityArray[index] = !boxVisibility[index];
        setBoxVisibility(newVisibilityArray);
        // alert(newVisibilityArray);
    };
    const toggleBox2 = (index) => {
        // Create a new array with the same length as tableenrolldata
        const newVisibilityArray = Array(newlyinrold.length).fill(false);
        // Toggle the visibility for the clicked row
        newVisibilityArray[index] = !boxVisibility[index];
        setBoxVisibility(newVisibilityArray);
        // alert(newVisibilityArray);
    };

    const renderBox = (rowData, index) => {
        if (boxVisibility[index]) {
            return (
                <View style={{ backgroundColor: '#474647', height: 55, marginRight: 48, borderRadius: 5 }}>

                    <TouchableOpacity onPress={() => { setEnrollstudentid(rowData), setMessage2(true) }}>
                        <Text style={{ color: 'white', textAlign: 'center', padding: 5 }}>Send Message</Text>
                    </TouchableOpacity>

                </View>
            );
        }
        return null;
    };
    const renderBox2 = (rowData, index) => {
        // setNewlystudentid(rowData)
        if (boxVisibility[index]) {
            return (
                <View style={{ position: 'absolute', top: '10%', right: '50%', backgroundColor: '#424242' }}>

                    <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }} onPress={() => { setNewlystudentid(rowData), setMessage(true) }}>
                        <Text style={{ color: 'white', textAlign: 'center', padding: 5 }}>Send Message</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} onPress={() => { setNewlystudentid(rowData), setConfirm(true) }}>
                        <Text style={{ color: 'white', textAlign: 'center', padding: 5, marginTop: 5 }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            );

        }
        return null;
    };

    const element = (data, index) => (

        <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ width: 30, marginLeft: 60, marginTop: 20 }} onPress={() => toggleBox(index)}>
                <View style={{}}>
                    <Image
                        style={{ width: 30, height: 20 }}
                        source={require('../../../Assets/Image/dot2.png')}
                    />
                </View>
            </TouchableOpacity>

            {renderBox(data, index)}
        </View>

    );



    const element2 = (data, index) => (
        <View style={{ flex: 1, position: 'relative' }}>
            <TouchableOpacity style={{ width: 30, marginLeft: 60, marginTop: 20 }} onPress={() => toggleBox2(index)}>
                <View style={{}}>
                    <Image
                        style={{ width: 10, height: 30 }}
                        source={require('../../../Assets/Image/dot2.png')}
                    />
                </View>
            </TouchableOpacity>
            {/* {console.log(data)} */}
            {renderBox2(data, index)}
        </View>
    );
    // {Alert.alert(studentlist)}

    return (

        <View style={{ flex: 1, backgroundColor: Platform.OS == 'ios' ? '#bfbdbd' : 'black' }}>
            <View style={styles.topview}>
                <TouchableOpacity onPress={() => navigation.navigate('AdminHome')}>
                    <Image
                        style={{ width: 40, height: 40,marginTop:8 }}
                        source={require('../../../Assets/Image/back.png')}
                    />
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.maintext}>{classname}</Text>
                </View>
            </View>

            <ScrollView 
                ref={scrollViewRef}
                style={{ flex: 1, backgroundColor: Platform.OS == 'ios' ? 'black' : '', }}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                      colors={['#9Bd35A', 'red', 'blue']}
                  
                    />
                  }
            >
                <View >


                    <View >
                        <Text style={{ padding: 15, fontSize: 13, color: 'white', marginTop: 10 }}>
                            {classlocation} {classtime} {classtype}
                        </Text>
                    </View>
                    <View >                        

                        <View>
                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity style={[styles.box, { backgroundColor: list ? '#8c5b22' : '#2d2d2e' }]} onPress={() => { scrollToPosition(100), openlist(), setVideo(false), setUpload(false), setNotification(false), setEnrolled(false), setNewEnrolled(false), setWalking(false) }}>
                                    <View style={{ marginVertical: 40,justifyContent:'center',alignItems:'center' }}>
                                        <Image
                                            style={styles.img}
                                            source={require('../../../Assets/Image/viewlist2.jpg')}
                                        />
                                        <Text style={{ color: list ? '#fae650' : 'orange', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>View List</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.box, { backgroundColor: video ? '#8c5b22' : '#2d2d2e' }]} onPress={() => { scrollToPosition(200), openvideo(), setList(false), setUpload(false), setNotification(false), setEnrolled(false), setNewEnrolled(false), setWalking(false) }}>
                                    <View style={{ marginVertical: 40,justifyContent:'center',alignItems:'center' }}>
                                        <Image
                                            style={styles.img}
                                            source={require('../../../Assets/Image/video7.png')}
                                        />
                                        <Text style={{ color: video ? '#fae650' : 'orange', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Videos</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity style={[styles.box, { backgroundColor: upload ? '#8c5b22' : '#2d2d2e' }]} onPress={() => { scrollToPosition(300), openupload(), setList(false), setVideo(false), setNotification(false), setEnrolled(false), setNewEnrolled(false), setWalking(false) }}>
                                <View style={{ marginVertical: 40,justifyContent:'center',alignItems:'center' }}>
                                    <Image
                                        style={styles.img}
                                        source={require('../../../Assets/Image/upload4.png')}
                                    />
                                    <Text style={{ color: upload ? '#fae650' : 'orange',  fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Upload Video</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, { backgroundColor: notification ? '#8c5b22' : '#2d2d2e' }]} onPress={() => { scrollToPosition(300), opennotification(), setList(false), setVideo(false), setUpload(false), setEnrolled(false), setNewEnrolled(false), setWalking(false) }}>
                                <View style={{ marginVertical: 40,justifyContent:'center',alignItems:'center' }}>
                                    <Image
                                        style={styles.img}
                                        source={require('../../../Assets/Image/notification3.png')}
                                    />
                                    <Text style={{ color: notification ? '#fae650' : 'orange',  fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Send Notification</Text>
                                </View>
                            </TouchableOpacity>
                        </View>



                        {
                            list ?
                                <View style={{ backgroundColor: '#2d2d2e', margin: 10, borderRadius: 10 }}>
                                    <View>
                                        <TouchableOpacity onPress={() => { openenrolled(), scrollToPosition(200), setVideo(false), setUpload(false), setNewEnrolled(false), setAddnew(false), setNotification(false), setInactibeuser(false) }} style={{ padding: 20, }} >
                                            <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 1, borderColor: 'grey', width: '100%' }}>
                                                <Text style={{ padding: 15, fontSize: 18, fontWeight: enrolled ? 'bold' : '', textAlign: 'left', color: 'white' }}>Enrolled</Text>
                                                <Image
                                                    style={{ width: 20, height: 20, marginTop: 20, marginHorizontal: 180 }}
                                                    source={require('../../../Assets/Image/down2.png')}
                                                />
                                                {/* <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='red'  /> */}

                                            </View>
                                        </TouchableOpacity>

                                        {
                                            enrolled == true ?
                                                <SafeAreaView>
                                                    <Animated.View>

                                                        <View style={{ flex: 1, backgroundColor: '#28282B' }}>

                                                            <Table style={{ flex: 1, marginBottom: 30 }}>

                                                                <Row data={["Date of First Class", "Name", "Action"]} flexArr={[1, 1, 1]} style={{ backgroundColor: '#606061', padding: 7 }} textStyle={{ color: 'orange', textAlign: 'center' }} />

                                                                {
                                                                    studentlist.map((rowData, index) => (
                                                                        <TableWrapper key={index} style={styles.row}>
                                                                            {
                                                                                Object.keys(rowData).map((key, cellIndex) => (
                                                                                    <Cell
                                                                                        key={cellIndex}
                                                                                        data={cellIndex === 2 ? element(rowData[key], index) : rowData[key]}
                                                                                        textStyle={styles.text1}
                                                                                    />
                                                                                ))
                                                                            }
                                                                        </TableWrapper>
                                                                    ))
                                                                }

                                                            </Table>


                                                        </View>
                                                    </Animated.View>
                                                </SafeAreaView>

                                                : ('')
                                        }

                                    </View>

                                    <View>
                                        <TouchableOpacity onPress={() => { opennewenroll(), scrollToPosition(300), setVideo(false), setUpload(false), setEnrolled(false), setAddnew(false), setInactibeuser(false) }} style={{ padding: 20, }} >
                                            <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 1, borderColor: 'grey', width: '100%' }}>
                                                <Text style={{ padding: 15, fontSize: 18, fontWeight: newenrolled ? 'bold' : '', textAlign: 'left', color: 'white' }}>Newely Enrolled</Text>
                                                <Image
                                                    style={{ width: 20, height: 20, marginTop: 20, marginHorizontal: Platform.OS == 'ios' ? 115 : 105 }}
                                                    source={require('../../../Assets/Image/down2.png')}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                        {
                                            newenrolled == true ?
                                                <SafeAreaView>
                                                    <Animated.View>

                                                        <View style={{ flex: 1, backgroundColor: '#28282B' }}>
                                                            {/* <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'orange' }}>Newely Enrolled Person</Text>
                                                            </View> */}


                                                            <Table style={{ flex: 1, marginBottom: 70 }}>
                                                                <Row data={["Date of First Class", "Name", "Action"]} flexArr={[1, 1, 1]} style={{ backgroundColor: '#606061', padding: 7 }} textStyle={{ color: 'orange', textAlign: 'center' }} />

                                                                {
                                                                    newlyinrold.map((rowData, index) => (
                                                                        <TableWrapper key={index} style={styles.row}>
                                                                            {
                                                                                Object.keys(rowData).map((key, cellIndex) => (
                                                                                    <Cell
                                                                                        key={cellIndex}
                                                                                        data={cellIndex === 2 ? element2(rowData[key], index) : rowData[key]}
                                                                                        textStyle={styles.text1}
                                                                                    />
                                                                                ))
                                                                            }
                                                                        </TableWrapper>
                                                                    ))
                                                                }
                                                            </Table>


                                                        </View>
                                                    </Animated.View>
                                                </SafeAreaView>

                                                : ('')
                                        }


                                    </View>

                                    <View>
                                        <TouchableOpacity onPress={() => { openinactibe(), scrollToPosition(300), setVideo(false), setUpload(false), setEnrolled(false), setAddnew(false), setNewEnrolled(false) }} style={{ padding: 20, }} >
                                            <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 1, borderColor: 'grey', width: '100%' }}>
                                                <Text style={{ padding: 15, fontSize: 18, fontWeight: inactiveuser ? 'bold' : '', textAlign: 'left', color: 'white' }}>Inactive</Text>
                                                <Image
                                                    style={{ width: 20, height: 20, marginTop: 20, marginHorizontal: 180 }}
                                                    source={require('../../../Assets/Image/down2.png')}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                        {
                                            inactiveuser == true ?
                                                <SafeAreaView>
                                                    <Animated.View>

                                                        <View style={{ flex: 1, backgroundColor: '#28282B' }}>
                                                            {/* <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'orange' }}>Newely Enrolled Person</Text>
                                                            </View> */}


                                                            <Table style={{ flex: 1, }}>
                                                                <Row data={["Date of First Class", "Name"]} flexArr={[1, 1]} style={{ backgroundColor: '#606061', padding: 7 }} textStyle={{ color: 'orange', textAlign: 'center' }} />

                                                                {
                                                                    inactivestudentlist.map((rowData, index) => (
                                                                        <TableWrapper key={index} style={styles.row}>

                                                                            {
                                                                                Object.keys(rowData).map((key, cellIndex) => (
                                                                                    <Cell key={cellIndex} data={key == "student_id" ? null : rowData[key]} textStyle={[styles.text1, cellIndex === 1 && styles.centerText]} />
                                                                                ))
                                                                            }
                                                                        </TableWrapper>
                                                                    ))
                                                                }
                                                            </Table>


                                                        </View>
                                                    </Animated.View>
                                                </SafeAreaView>

                                                : ('')
                                        }
                                    </View>

                                    <View>
                                        <TouchableOpacity onPress={() => { openaddnew(), scrollToPosition(400), setEnrolled(false), setNewEnrolled(false), setInactibeuser(false) }} style={{ padding: 20, }} >
                                            <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 1, borderColor: 'grey', width: '100%' }}>
                                                <Text style={{ padding: 15, fontSize: 18, fontWeight: addnew ? 'bold' : '', textAlign: 'left', color: 'white' }}>Walkin</Text>
                                                <Image
                                                    style={{ width: 20, height: 20, marginTop: 20, marginHorizontal: 190 }}
                                                    source={require('../../../Assets/Image/down2.png')}
                                                />
                                            </View>
                                        </TouchableOpacity>

                                        {
                                            addnew ?
                                                <View>

                                                    <View>
                                                        <Text style={styles.inputheading}>First Name</Text>
                                                        <TextInput
                                                            style={styles.input}
                                                            value={walkinfirstname}
                                                            onChangeText={(text) => setWalkinfirstname(text)}
                                                        />
                                                        {walkinfirsterror ? <Text style={{ color: 'red', left: 20, top: -2, fontWeight: 'bold', marginTop: Platform.OS == 'ios' ? 5 : '' }}>FirstName is Required!</Text> : null}

                                                    </View>
                                                    <View>
                                                        <Text style={styles.inputheading}>Last Name</Text>
                                                        <TextInput
                                                            style={styles.input}
                                                            value={walkinlastname}
                                                            onChangeText={(text) => setWalkinlastname(text)}
                                                        />
                                                        {walkinlasterror ? <Text style={{ color: 'red', left: 20, top: -2, fontWeight: 'bold', marginTop: Platform.OS == 'ios' ? 5 : '' }}>LastName is Required!</Text> : null}
                                                    </View>
                                                    <View>
                                                        <Text style={styles.inputheading}>Phone</Text>
                                                        <TextInput
                                                            style={styles.input}
                                                            keyboardType='decimal-pad'
                                                            value={walkinphone}
                                                            onChangeText={(text) => setWalkinphone(text)}
                                                        />
                                                        {walkinphoneerror ? <Text style={{ color: 'red', left: 20, top: -2, fontWeight: 'bold', marginTop: Platform.OS == 'ios' ? 5 : '' }}>Phone Number is Required!(length between{'\n'}10 to 12 number)</Text> : null}
                                                    </View>
                                                    <View>
                                                        <Text style={styles.inputheading}>Email</Text>
                                                        <TextInput
                                                            style={styles.input}
                                                            keyboardType='email-address'
                                                            value={walkinemail}
                                                            onChangeText={(email) => setWalkinemail(email)}
                                                        />
                                                        {walkinemailerror ? <Text style={{ color: 'red', left: 20, top: -2, fontWeight: 'bold', marginTop: Platform.OS == 'ios' ? 5 : '' }}>Email is Required!</Text> : null}
                                                    </View>
                                                    <View>
                                                        <Text style={styles.inputheading}>City</Text>
                                                        <TextInput
                                                            style={styles.input}
                                                            value={walkincity}
                                                            onChangeText={(text) => setWalkincity(text)}

                                                        />
                                                        {walkincityerror ? <Text style={{ color: 'red', left: 20, top: -2, fontWeight: 'bold', marginTop: Platform.OS == 'ios' ? 5 : '' }}>City is Required!</Text> : null}
                                                    </View>
                                                    <View>
                                                        <Text style={styles.inputheading}>Postal Code</Text>
                                                        <TextInput
                                                            style={styles.input}
                                                            keyboardType='number-pad'
                                                            value={walkinpostal}
                                                            onChangeText={(text) => setWalkinpostal(text)}

                                                        />
                                                        {walkinpostalerror ? <Text style={{ color: 'red', left: 20, top: -2, fontWeight: 'bold', marginTop: Platform.OS == 'ios' ? 5 : '' }}>Postal Code is Required!(length is 6 number)</Text> : null}
                                                    </View>

                                                    <Text style={styles.inputheading}>Dance Form</Text>
                                                    <Dropdown
                                                        style={styles.dropdown}
                                                        placeholderStyle={styles.placeholderStyle}
                                                        selectedTextStyle={styles.selectedTextStyle}
                                                        // inputSearchStyle={styles.inputSearchStyle}

                                                        data={danceform}
                                                        // search
                                                        maxHeight={170}

                                                        labelField="label"
                                                        valueField="value"
                                                        placeholder='Dance Form'
                                                        // searchPlaceholder="Search..."

                                                        value={dance}
                                                        itemContainerStyle={{ backgroundColor: '#403e3e' }}
                                                        itemTextStyle={{ color: 'white' }}
                                                        activeColor="#28282B"
                                                        onChange={item => { setDance(item.label) }}


                                                    />
                                                    {walkindanceerror ? <Text style={{ color: 'red', left: 20, top: -2, fontWeight: 'bold', marginTop: Platform.OS == 'ios' ? 5 : '' }}>Dance Form is Required!</Text> : null}
                                                    <View>
                                                        <Text style={styles.inputheading}>Date of First Class</Text>
                                                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => setOpen3(true)}>
                                                            <View style={{ height: 50, width: 320, marginBottom: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>


                                                                {
                                                                    cal3 ?
                                                                        <Text style={{ color: 'grey', paddingLeft: 20 }}>Date of First Class</Text>
                                                                        :
                                                                        <Text style={{ color: 'white', paddingLeft: 20 }}>{date3.toLocaleDateString()}</Text>
                                                                }
                                                            </View>
                                                        </TouchableOpacity>
                                                        <DatePicker
                                                            modal
                                                            mode='date'
                                                            open={open3}
                                                            date={date3}
                                                            onConfirm={(date) => {
                                                                setOpen3(false)
                                                                setCal3(false)
                                                                setDate3(date)
                                                            }}
                                                            onCancel={() => {
                                                                setOpen3(false)
                                                            }}

                                                        />
                                                        {walkindateerror ? <Text style={{ color: 'red', left: 20, top: -2, fontWeight: 'bold', marginTop: Platform.OS == 'ios' ? 5 : '' }}>Date is Required!</Text> : null}
                                                    </View>
                                                    <TouchableOpacity onPress={() => sendwalkin()} style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                                                        <Text style={styles.btnsubmit}>Submit</Text>
                                                    </TouchableOpacity>


                                                </View>
                                                : ('')
                                        }



                                    </View>
                                </View>
                                : ('')
                        }

                        {
                            popup == true ?
                                <View style={styles.modelcontainer}>
                                    <Modal
                                        animationType='fade'
                                        transparent={true}
                                        visible={popup}
                                        onRequestClose={() => {
                                            Alert.alert('Class closed')
                                            setPopup(!popup)
                                        }}
                                    >
                                        <View style={styles.modelcontainer}>
                                            <View style={styles.modelView}>
                                                <Text style={{ color: 'white', fontSize: 18, fontWeight: '300', marginBottom: 10 }}>Do you want to take this class</Text>

                                                <View style={{ flexDirection: 'row', }}>
                                                    <TouchableOpacity onPress={() => setReasonpopup(true)}>
                                                        <Text style={{ color: 'black', backgroundColor: 'orange', padding: 15, fontSize: 15, fontWeight: 'bold', borderRadius: 10, margin: 5 }}>Confirm</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity
                                                        onPress={() => setPopup(!popup)}
                                                    >
                                                        <Text style={{ color: 'black', backgroundColor: 'red', padding: 15, fontSize: 15, fontWeight: 'bold', borderRadius: 10, margin: 5 }}>Cancel</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                    </Modal>
                                </View>
                                : ''
                        }

                        {
                            resonpopup == true ?
                                    
                                <View style={styles.modelreasoncontainer}>
                                    <Modal
                                        animationType='fade'
                                        transparent={true}
                                        visible={resonpopup}
                                        onRequestClose={() => {
                                            Alert.alert("Reason closed")
                                            setReasonpopup(!resonpopup)
                                        }}

                                    >
                                        <View style={styles.modelreasoncontainer}>
                                            <View style={styles.modelReasonView}>
                                                <Text style={{ color: 'white', marginLeft: 5 }}>Please Enter Reason</Text>
                                                <Textarea
                                                    style={{
                                                        borderWidth: 1,
                                                        borderColor: 'orange',
                                                        width: '100%',
                                                        borderRadius: 5,
                                                        padding: 8,
                                                        textAlignVertical: 'top',
                                                        height: 120,
                                                        marginTop: 5

                                                    }}
                                                />
                                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => setReasonpopup(!resonpopup)}>
                                                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', padding: 10, backgroundColor: 'orange', width: '50%', textAlign: 'center', borderRadius: 10 }}>Submit</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>



                                    </Modal>

                                </View>
                                : ''
                        }


                        {
                            video == true ?
                                <SafeAreaView>
                                    <Animated.View>
                                        <View style={{ flex: 1 }}>

                                            {videodata.length >0 ?(
                                                videodata.map((video, index) => {
                                                    return (
                                                        <View key={index} style={{ backgroundColor: '#28282B', margin: 5, borderRadius: 10 }}>

                                                            <Text style={styles.vname}>{video.name}</Text>
                                                            <Text style={styles.date}>{video.date} {video.time}</Text>
                                                            {/* <Video
                                                                source={{ uri: video.url }}
                                                                playWhenInactive={false}
                                                                style={styles.videos}
                                                                resizeMode='contain'
                                                                repeat={false}
                                                                useNativeControls
                                                                controls={true}
                                                                fullscreen={true}
                                                                fullscreenOrientation={'landscape'}
                                                                muted={true}
                                                                onLoad={() => setVideoLoaded(true)}
                                                            /> */}
                                                            <VideoPlayer
                                                                video={{ uri: video.url }}
                                                                style={styles.videos}
                                                                showDuration={true}                                                            
                                                                defaultMuted={true}     
                                                                fullscreenAutorotate={true}   
                                                                preload={true}                    
                                                                onLoad={() => setVideoLoaded(true)}
                                                            />
                                                            {videoLoaded ? null : <ActivityIndicator size={"small"} color={"skyblue"} />}

                                                        </View>
                                                    );
                                                })
                                            ):(
                                                <View style={{ margin: 8, justifyContent: 'center', alignItems: 'center', marginTop: 10, backgroundColor: '#28282B', borderRadius: 10 }}>
                                                <Text style={{ padding: 10, fontSize: 15, fontWeight: 'bold', margin: 5 }}>No videos found</Text>
                                            </View>
                                            )
                                            }


                                        </View>
                                    </Animated.View>
                                </SafeAreaView>
                                : ('')
                        }
                        {
                            upload == true ?
                                <SafeAreaView>
                                    <Animated.View>
                                        <View style={{ flex: 1, backgroundColor: '#2d2d2e', margin: 10, borderRadius: 10 }}>
                                            <Text style={{ color: 'white', marginLeft: 20, marginTop: 5 }}>Video Title</Text>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TextInput
                                                    style={{
                                                        borderWidth: 1,
                                                        borderColor: 'grey',
                                                        width: '90%',
                                                        padding: 10,
                                                        borderRadius: 10,
                                                        fontSize: 15,
                                                        margin: 5,
                                                        color: 'white'

                                                    }}
                                                    value={videotitle}
                                                    onChangeText={(text) => setVideotitle(text)}


                                                />
                                                {videotitleerror ? <Text style={{ color: 'red', left: -70, top: -5, fontWeight: 'bold' }}>Video Title is Required!</Text> : null}

                                                <TouchableOpacity onPress={() => setOpen(true)} style={{ width: '100%', marginLeft: 12 }}>
                                                    {
                                                        cal ?
                                                            <Text style={{ borderWidth: 1, borderColor: 'grey', width: '90%', color: 'white', padding: 12, borderRadius: 10, fontSize: 15, margin: 10 }}>Date</Text>
                                                            :
                                                            <Text style={{ borderWidth: 1, borderColor: 'grey', width: '90%', color: 'white', padding: 12, borderRadius: 10, fontSize: 15, margin: 10 }}>{date.toDateString()}</Text>

                                                    }
                                                </TouchableOpacity>
                                                <DatePicker
                                                    modal
                                                    mode='date'
                                                    open={open}
                                                    date={date}
                                                    onConfirm={(date) => {
                                                        setOpen(false)
                                                        setCal(false)
                                                        setDate(date)
                                                    }}
                                                    onCancel={() => {
                                                        setOpen(false)
                                                    }}

                                                />
                                                {dateerror ? <Text style={{ color: 'red', left: -70, top: -5, fontWeight: 'bold' }}>Video Date is Required!</Text> : null}


                                                <TouchableOpacity onPress={() => setOpen2(true)} style={{ width: '100%', marginLeft: 12 }}>
                                                    {
                                                        cal2 ?
                                                            <Text style={{ borderWidth: 1, borderColor: 'grey', width: '90%', color: 'white', padding: 12, borderRadius: 10, fontSize: 15, margin: 10 }}>Time</Text>
                                                            :
                                                            <Text style={{ borderWidth: 1, borderColor: 'grey', width: '90%', color: 'white', padding: 12, borderRadius: 10, fontSize: 15, margin: 10 }}>{date2.toLocaleTimeString()}</Text>

                                                    }
                                                </TouchableOpacity>
                                                <DatePicker
                                                    modal
                                                    mode='time'
                                                    open={open2}
                                                    date={date2}
                                                    onConfirm={(date) => {
                                                        setOpen2(false)
                                                        setCal2(false)
                                                        setDate2(date)
                                                    }}
                                                    onCancel={() => {
                                                        setOpen2(false)
                                                    }}

                                                />
                                                {dateerror2 ? <Text style={{ color: 'red', left: -70, top: -5, fontWeight: 'bold' }}>Video Time is Required!</Text> : null}


                                            </View>

                                            <Text style={{ marginLeft: 25, fontSize: 15, padding: 5, color: 'white' }}>Upload Video :{selectedVideo}</Text>
                                            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 25 }}>
                                                <TouchableOpacity onPress={openImagePicker}>
                                                    <Text style={styles.btnupload}>Upload Video</Text>
                                                </TouchableOpacity>
                                            </View>
                                            {videoresponseerror ? <Text style={{ color: 'red', left: -70, top: -5, fontWeight: 'bold' }}>Video is Required!</Text> : null}

                                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>

                                                <TouchableOpacity onPress={() => uploadVideo()}>
                                                    <Text style={styles.btnsubmit}>Submit</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Animated.View>
                                </SafeAreaView>

                                : ('')
                        }
                        {
                            notification == true ?
                                <SafeAreaView>
                                    <Animated.View>
                                        <View style={{ flex: 1, backgroundColor: '#2d2d2e', margin: 10, borderRadius: 10 }}>

                                            {/* <Dropdown
                                                style={styles.dropdown}
                                                placeholderStyle={{ fontSize: 12, color: 'white' }}
                                                selectedTextStyle={{ fontSize: 12, padding: 5, color: 'white' }}
                                                // inputSearchStyle={{ height: 40, fontSize: 16, backgroundColor: '#3d3e40', }}

                                                data={filter}

                                                maxHeight={220}

                                                labelField="label"
                                                valueField="value"
                                                placeholder='Select user...'
                                                // searchPlaceholder="Search..."
                                                color='white'
                                                value={data}
                                                itemContainerStyle={{ backgroundColor: '#3d3e40' }}
                                                itemTextStyle={{ color: 'white' }}
                                                activeColor="#28282B"
                                                onChange={item => { setData(item.label) }}



                                            /> */}
                                            <Text style={{ color: 'white', marginLeft: 25 }}>Type Message Here</Text>
                                            <Textarea
                                                style={{
                                                    borderWidth: 1,
                                                    borderColor: 'grey',
                                                    width: '90%',
                                                    margin: 10,
                                                    marginLeft: 18,
                                                    borderRadius: 10,
                                                    textAlignVertical: 'top',
                                                    padding: 8,
                                                    height: 150,
                                                    color: 'white'

                                                }}
                                                value={msg}
                                                onChangeText={(text) => setMsg(text)}

                                            />
                                            {msgerror ? <Text style={{ color: 'red', left: 20, top: -5, fontWeight: 'bold' }}>Message field is required.</Text> : null}
                                            <TouchableOpacity onPress={() => sendnotification()} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={styles.btnsubmit}>Send</Text>
                                            </TouchableOpacity>



                                        </View>

                                    </Animated.View>
                                </SafeAreaView>

                                : ('')
                        }
                        {
                            confirm == true ?
                                <View style={styles.modelcontainer}>
                                    <Modal
                                        animationType='fade'
                                        transparent={true}
                                        visible={confirm}
                                        onRequestClose={() => {
                                            Alert.alert('Class closed')
                                            setConfirm(!confirm)
                                        }}
                                    >
                                        <View style={styles.modelcontainer}>
                                            <View style={styles.modelView}>
                                                <Text style={{ color: 'white', fontSize: 18, fontWeight: '300', marginBottom: 10 }}>They are in class</Text>

                                                <View style={{ flexDirection: 'row', }}>
                                                    <Pressable onPress={() => { studentconfirm(), setConfirm(!confirm) }}>
                                                        <Text style={{ color: 'black', backgroundColor: 'orange', padding: 10, fontSize: 15, fontWeight: 'bold', borderRadius: 10, margin: 5 }}>Yes</Text>
                                                    </Pressable>

                                                    <Pressable
                                                        onPress={() => setConfirm(!confirm)}
                                                    >
                                                        <Text style={{ color: 'black', backgroundColor: 'red', padding: 10, fontSize: 15, fontWeight: 'bold', borderRadius: 10, margin: 5 }}>Cancel</Text>
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </View>

                                    </Modal>
                                </View>
                                : ('')
                        }

                        {
                            message == true ?

                                <View style={styles.modelreasoncontainer}>
                                    <Modal
                                        animationType='fade'
                                        transparent={true}
                                        visible={message}
                                        onRequestClose={() => {
                                            Alert.alert("Reason closed")
                                            setMessage(!message)
                                        }}

                                    >
                                        <View style={styles.modelreasoncontainer}>
                                            <View style={styles.modelMessageView}>
                                                <Text style={{ color: 'white', marginLeft: 5 }}>Please Enter Message</Text>
                                                <Textarea
                                                    style={{
                                                        borderWidth: 1,
                                                        borderColor: 'orange',
                                                        width: '100%',
                                                        borderRadius: 5,
                                                        padding: 8,
                                                        textAlignVertical: 'top',
                                                        height: 120,
                                                        marginTop: 5

                                                    }}
                                                    value={stumsg}
                                                    onChangeText={(text) => setStumsg(text)}
                                                />
                                                {stumsgerror ? <Text style={{ color: 'red', top: -35, fontWeight: 800 }}>Message field is required.</Text> : null}
                                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { sendmessage() }}>
                                                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', padding: 10, backgroundColor: 'orange', width: '50%', textAlign: 'center', borderRadius: 10 }}>Send</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>



                                    </Modal>

                                </View>
                                : ''
                        }


                        {
                            message2 == true ?

                                <View style={styles.modelreasoncontainer}>
                                    <Modal
                                        animationType='fade'
                                        transparent={true}
                                        visible={message2}
                                        onRequestClose={() => {
                                            Alert.alert("Reason closed")
                                            setMessage2(!message2)
                                        }}

                                    >
                                        <View style={styles.modelreasoncontainer}>
                                            <View style={styles.modelMessageView}>
                                                <Text style={{ color: 'white', marginLeft: 5 }}>Please Enter Message</Text>
                                                <Textarea
                                                    style={{
                                                        borderWidth: 1,
                                                        borderColor: 'orange',
                                                        width: '100%',
                                                        borderRadius: 5,
                                                        padding: 8,
                                                        textAlignVertical: 'top',
                                                        height: 120,
                                                        marginTop: 5

                                                    }}
                                                    value={stumsg2}
                                                    onChangeText={(text) => setStumsg2(text)}
                                                />
                                                {stumsgerror2 ? <Text style={{ color: 'red', top: -35, fontWeight: 'bold' }}>Message field is required.</Text> : null}
                                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { sendmessage2() }}>
                                                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', padding: 10, backgroundColor: 'orange', width: '50%', textAlign: 'center', borderRadius: 10 }}>Send</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>



                                    </Modal>

                                </View>
                                : ''
                        }






                    </View>



                </View>
                <Modal
                    transparent={true}
                    visible={videoloader}
                    animationType="fade"
                    onRequestClose={() => setVideoloader(false)}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(76, 76, 77,0.5)' }}>
                        <ActivityIndicator size={"large"} color={"skyblue"} />
                    </View>

                </Modal>
                <Modal
                    transparent={true}
                    visible={walkinloader}
                    animationType="fade"
                    onRequestClose={() => setWalkinloader(false)}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(76, 76, 77,0.5)' }}>
                        <ActivityIndicator size={"large"} color={"skyblue"} />
                    </View>

                </Modal>


            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({


    text1: { paddingLeft: 10, margin: 5, textAlign: 'center', padding: 2, color: 'white', },
    row: { flexDirection: 'row', height: 50 },
    btn: { width: 70, height: 25, backgroundColor: '#e3b11e', borderRadius: 2, marginLeft: 20 },
    // dot: {   marginLeft: 30 },
    btnText: { textAlign: 'center', color: 'black' },
    centerText: {
        textAlign: 'center',
    },

    topview: {
        height: 60,
        width: '100%',
        backgroundColor: '#3d3e40',       
        marginTop: Platform.OS == 'ios' ? 57 : ''

    },
    maintext: {
        color: '#f5c849',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:-40,
        width:'80%',
        textAlign:Platform.OS=='ios'?'': 'center'
    },
    headtext: {
        color: 'orange',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 5
    },
    box: {
        width: '45%',
        height: 180,
        margin: 10,
        borderRadius: 10

    },

    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
        
        resizeMode: 'stretch',


    },
    text: {
        color: '#f5c849',
        fontSize: 12,
        padding: 5
    },
    inputheading: {
        color: 'white',
        fontSize: 15,
        padding: 5,
        marginHorizontal: 8,
        marginTop: 15,
        marginLeft: 15
    },
    input: {
        color: Platform.OS == 'ios' ? 'white' : '',
        borderWidth: 1,
        borderColor: 'grey',
        width: '88%',
        height: Platform.OS == 'ios' ? 50 : '',
        marginHorizontal: 10,
        borderRadius: 5,
        paddingLeft: 10,
        marginLeft: 20
    },
    btnsubmit: {
        color: 'black',
        fontSize: 15,
        backgroundColor: 'orange',
        padding: 12,
        textAlign: 'center',
        margin: 10,
        borderRadius: 10,
        width: 150
    },
    modelcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000008a',
    },
    modelreasoncontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modelView: {
        margin: 20,
        backgroundColor: '#3f403f',
        borderRadius: 10,
        padding: 40,
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modelReasonView: {

        backgroundColor: '#525452',
        borderRadius: 10,
        padding: 15,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }

    },
    modelMessageView: {

        backgroundColor: '#3f403f',
        borderRadius: 10,
        padding: 15,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }

    },
    videos: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 10,


    },
    vname: {
        color: 'orange',
        fontSize: 15,
        marginTop: 5,
        padding: 5
    },
    date: {
        padding: 5,
        color: 'white'
    },
    btnupload: {
        color: 'black',
        fontSize: 15,
        backgroundColor: 'orange',
        padding: 10,
        textAlign: 'center',
        margin: 5,
        borderRadius: 10
    },
    btnsubmit: {
        color: 'black',
        fontSize: 15,
        backgroundColor: 'orange',
        padding: 12,
        textAlign: 'center',
        margin: 10,
        borderRadius: 10,
        width: 150
    },
    dropdown: {
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        width: '88%',
        paddingLeft: 5,
        borderRadius: 5,
        marginLeft: 20,
        color: 'white'
    },
    placeholderStyle: {
        fontSize: 12,
        color: Platform.OS == 'ios' ? 'white' : ''
    },
    selectedTextStyle: {
        fontSize: 12,
        padding: 5,
        color: 'white'
    },



})
