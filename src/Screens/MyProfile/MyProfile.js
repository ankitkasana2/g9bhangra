import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet,
    Modal,
    ToastAndroid,
    Alert,
    ActivityIndicator,
    Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';


export default function MyProfile({ navigation, route }) {
    const [data, setData] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState('');
    const [data4, setData4] = useState('');
    const [userid, setUserid] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false); // This line defines isModalVisible
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [firstnameerror, setFirstnameerror] = useState(false);
    const [lastnameerror, setLastnameerror] = useState(false);
    const [emailerror, setEmailerror] = useState(false);
    const [phoneerror, setPhoneerror] = useState(false);
    const [role, setRole] = useState('');
    const [userId, setUserId] = useState('');

    const info = async () => {
        const role = await AsyncStorage.getItem('role');
        console.log('role', role);

        setRole(role);
        if (role === 'Instructor') {
            getInstructorDetails();
        } else if (role === 'admin') {
            getAdminDetails();
        } else if (role === 'Student') {
            getStudentdetails();
        }
    };

    dataIduser = async () => {

        const id = await AsyncStorage.getItem('id');
        // console.warn("Ankit", id);
        setUserId(id);
    }

    useEffect(() => {
        dataIduser();
        info();
    }, []);

    const getAdminDetails = async () => {
        const id = await AsyncStorage.getItem('id');
        try {
            const response = await fetch(
                `https://www.sales.g9media.ca/mobile_api/get_admin_details?user_id=${id}`,
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
            setData(json.data);
            setData2(json.data);
        } catch (e) {
            console.log('error', e);
        }
    };

    const getInstructorDetails = async () => {
        const id = await AsyncStorage.getItem('id');

        try {
            const response = await fetch(
                `https://www.sales.g9media.ca/mobile_api/get_instructor_details?user_id=${id}`,
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
            setData(json.data);
            setData2(json.data);
        } catch (e) {
            console.log('eror', e);
        }
    };

    const getStudentdetails = async () => {
        const id = await AsyncStorage.getItem('id');
        try {
            await fetch(
                `https://www.sales.g9media.ca/mobile_api/get_user_details?user_id=${id}`,
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
                    console.log(JSON.stringify(json));
                    setData(json.data);
                    setData2(json.data);
                })
                .catch(error => console.log('error', error));
        } catch (error) {
            console.log(error);
        }
    };

    const updateAdminDetails = async () => {
        const id = await AsyncStorage.getItem("id");
        // Alert.alert(data2);
        //   console.warn(data2);
        try {
            let hasError = false;
            ((!data2.first_name) ? (setFirstnameerror(true), hasError = true) : setFirstnameerror(false));
            ((!data2.last_name) ? (setLastnameerror(true), hasError = true) : setLastnameerror(false));
            ((!data2.email1) ? (setEmailerror(true), hasError = true) : setEmailerror(false));
            ((!(data2.phone_mobile.length >= 10 && data2.phone_mobile.length <= 12)) ? (setPhoneerror(true), hasError = true) : setPhoneerror(false));

            if (!hasError) {
                setModalVisible(true)
                await fetch(`https://www.sales.g9media.ca/mobile_api/update_admin_details`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({
                        first_name: data2.first_name,
                        last_name: data2.last_name,
                        id: userId
                    })
                })
                    .then(response => response.json())
                    .then(async (json) => {
                        //   Alert.alert(JSON.stringify(json))

                        if (json.status === true) {
                            await getAdminDetails();
                            setModalVisible(false);
                            ToastAndroid.show("Profile A Update Successfully!", ToastAndroid.LONG);
                        }
                        else {
                            setModalVisible(false);
                            ToastAndroid.show("Profile A Not Update Successfully!", ToastAndroid.LONG);
                        }
                    })
                    .catch(error => console.log(error));
            }
        }
        catch (error) {
            console.log("error", error);
        }
        finally {
            setModalVisible(false);
            //   await AsyncStorage.clear();
        }

    }

    //   const updateAdminDetails = async () => {

    //     let firstName = await data2.first_name;
    //     let lastName = await data2.last_name;

    //     console.warn(firstName , lastName );



    //        console.warn(userId);
    //     var myHeaders = new Headers();
    //     myHeaders.append('Content-Type', 'application/json');

    //     var raw = JSON.stringify({
    //       first_name: data2.first_name,
    //       last_name: data2.last_name,
    //       id: userId,
    //     });

    //     var requestOptions = {
    //       method: 'POST',
    //       headers: myHeaders,
    //       body: raw,
    //       redirect: 'follow',
    //     };

    //     fetch(
    //       'https://www.sales.g9media.ca/mobile_api/update_admin_details',
    //       requestOptions,
    //     )
    //       .then(response => response.text())
    //       .then(result => {
    //         // getAdminDetails();
    //         console.log(result)})
    //       .catch(error => console.log('error', error));
    //   };

    const updateInstructorDetails = async () => {
        const id = await AsyncStorage.getItem('id');

        try {
            let hasError = false;
            !data2.first_name
                ? (setFirstnameerror(true), (hasError = true))
                : setFirstnameerror(false);
            !data2.last_name
                ? (setLastnameerror(true), (hasError = true))
                : setLastnameerror(false);
            !data2.email1
                ? (setEmailerror(true), (hasError = true))
                : setEmailerror(false);
            !(data2.phone_mobile.length >= 10 && data2.phone_mobile.length <= 12)
                ? (setPhoneerror(true), (hasError = true))
                : setPhoneerror(false);

            if (!hasError) {
                setModalVisible(true);
                await fetch(
                    `https://www.sales.g9media.ca/mobile_api/update_instructor_details`,
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            phone_mobile: data2.phone_mobile,
                            id: id,
                        }),
                    },
                )
                    .then(response => response.json())
                    .then(async (json) => {
                        // Alert.alert(JSON.stringify(json));

                        if (json.status) {
                            await getInstructorDetails();
                            setModalVisible(false);
                            ToastAndroid.show(
                                'Profile Update Successfully!',
                                ToastAndroid.LONG,
                            );
                            Toast.show({
                                type: 'success',
                                text1: 'Profile Update Successfully!',
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
                            setIsModalVisible(false)
                        } else {
                            setModalVisible(false);
                            ToastAndroid.show(
                                'Profile Not Update Successfully!',
                                ToastAndroid.LONG,
                            );
                            Toast.show({
                                type: 'success',
                                text1: 'Profile Not Update Successfully!',
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
                    })
                    .catch(error => console.log(error));
            }
        } catch (error) {
            console.log('error', error);
        } finally {
            setModalVisible(false);
            //   await AsyncStorage.clear();
        }
    };

    const updateStudentdetails = async () => {
        const id = await AsyncStorage.getItem('id');

        try {
            let hasError = false;
            !data2.firstname
                ? (setFirstnameerror(true), (hasError = true))
                : setFirstnameerror(false);
            !data2.lastname
                ? (setLastnameerror(true), (hasError = true))
                : setLastnameerror(false);
            !data2.email
                ? (setEmailerror(true), (hasError = true))
                : setEmailerror(false);
            !(data2.mobile.length >= 10 && data2.mobile.length <= 12)
                ? (setPhoneerror(true), (hasError = true))
                : setPhoneerror(false);

            if (!hasError) {
                setModalVisible(true);
                await fetch(
                    `https://www.sales.g9media.ca/mobile_api/update_user_details`,
                    {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            firstname: data2.firstname,
                            lastname: data2.lastname,
                            email: data2.email,
                            mobile: data2.mobile,
                            id: id,
                        }),
                    },
                )
                    .then(response => response.json())
                    .then(json => {
                        if (json && json.status) {
                            getStudentdetails();
                            setModalVisible(false);
                            ToastAndroid.show(
                                'Profile Update Successfully!',
                                ToastAndroid.LONG,
                            );
                        } else {
                            setModalVisible(false);
                            ToastAndroid.show(
                                'Profile Not Update Successfully!',
                                ToastAndroid.LONG,
                            );
                        }
                    })
                    .catch(error => console.log(error));
            }
        } catch (error) {
            console.log('error', error);
        } finally {
            setModalVisible(false);
            await AsyncStorage.clear();
        }
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Platform.OS == 'ios' ? '#bfbdbd' : '#28282B',
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
                <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                    <Text style={styles.headertext}>My Profile</Text>
                </View>
            </View>

            {/* { Alert.alert("Hello")} */}
            {role === 'Instructor' || role === 'admin' ? (
                <View style={styles.top}>

                    <View
                        style={{
                            height: 50,
                            width: '92%',
                            flexDirection: 'row',
                            borderWidth: 1.5,
                            borderColor: 'orange',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingLeft: 10,
                            borderRadius: 10,
                            marginTop: 18
                        }}>
                        <Image
                            source={require('../../../Assets/Image/name.png')}
                            style={{ height: 28, width: 28, borderRadius: 5 }}

                        />
                        <Text style={styles.input}>{data.first_name}</Text>
                        {/* <Text style={styles.input}>{"Ankit"}</Text> */}
                    </View>


                    <View
                        style={{
                            height: 50,
                            width: '92%',
                            flexDirection: 'row',
                            borderWidth: 1.5,
                            borderColor: 'orange',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingLeft: 10,
                            borderRadius: 10,
                            marginTop: 18
                        }}>
                        <Image
                            source={require('../../../Assets/Image/name.png')}
                            style={{ height: 28, width: 28, borderRadius: 5 }}

                        />
                        <Text style={styles.input}>{data.last_name}</Text>
                    </View>


                    <View
                        style={{
                            height: 50,
                            width: '92%',
                            flexDirection: 'row',
                            borderWidth: 1.5,
                            borderColor: 'orange',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingLeft: 10,
                            borderRadius: 10,
                            marginTop: 18
                        }}>
                        <Image
                            source={require('../../../Assets/Image/email.png')}
                            style={{ height: 28, width: 28, borderRadius: 5 }}

                        />
                        <Text style={styles.input}>{data.email1}</Text>

                    </View>

                    <View
                        style={{
                            height: 50,
                            width: '92%',
                            flexDirection: 'row',
                            borderWidth: 1.5,
                            borderColor: 'orange',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingLeft: 10,
                            borderRadius: 10,
                            marginTop: 18
                        }}>
                        <Image
                            source={require('../../../Assets/Image/contact.png')}
                            style={{ height: 28, width: 28, borderRadius: 5 }}
                        />
                        <Text style={styles.input}>{data.phone_mobile}</Text>

                    </View>


                    <TouchableOpacity onPress={() => setIsModalVisible(true)} style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        backgroundColor: 'orange',
                        borderRadius: 12,
                        width: '92%',
                        alignSelf: 'center',
                        marginVertical: 20,
                    }}>
                        <Text
                            style={{
                                color: 'white', // Assuming you want white text color
                                fontSize: 18, // Adjust font size as needed
                                fontWeight: 'bold',

                            }}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                </View>

            ) : (
                <View style={styles.top}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginTop: 20,
                            marginLeft: 20,
                            marginRight: 20,
                        }}>
                        <View
                            style={{
                                height: 50,
                                width: 350,
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: 'gray',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingLeft: 10,
                                borderRadius: 10,
                            }}>
                            <Image
                                source={require('../../../Assets/Image/name.png')}
                                style={{ height: 18, width: 18, marginTop: 7, borderRadius: 5 }}
                            />
                            <Text style={styles.input}>{data.firstname}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginTop: 20,
                            marginLeft: 20,
                            marginRight: 20,
                        }}>
                        <View
                            style={{
                                height: 50,
                                width: 350,
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: 'gray',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingLeft: 10,
                                borderRadius: 10,
                            }}>
                            <Image
                                source={require('../../../Assets/Image/name.png')}
                                style={{ height: 18, width: 18, marginTop: 7, borderRadius: 5 }}
                            />
                            <Text style={styles.input}>{data.lastname}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginTop: 20,
                            marginLeft: 20,
                            marginRight: 20,
                        }}>
                        <View
                            style={{
                                height: 50,
                                width: 350,
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: 'gray',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingLeft: 10,
                                borderRadius: 10,
                            }}>
                            <Image
                                source={require('../../../Assets/Image/email.png')}
                                style={{ height: 18, width: 18, marginTop: 7, borderRadius: 5 }}
                            />
                            <Text style={styles.input}>{data.email}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginTop: 20,
                            marginLeft: 20,
                            marginRight: 20,
                        }}>
                        <View
                            style={{
                                height: 50,
                                width: 350,
                                flexDirection: 'row',
                                borderWidth: 1,
                                borderColor: 'gray',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                paddingLeft: 10,
                                borderRadius: 10,
                            }}>
                            <Image
                                source={require('../../../Assets/Image/contact.png')}
                                style={{ height: 18, width: 18, marginTop: 7, borderRadius: 5 }}
                            />
                            <Text style={styles.input}>{data.mobile}</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                            <Text
                                style={{
                                    padding: 15,
                                    backgroundColor: 'orange',
                                    color: 'white',
                                    borderRadius: 10,
                                }}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {role === 'Instructor' || role === 'admin' ? (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Edit Profile</Text>
                            <TextInput
                                style={styles.input2}
                                placeholder="First Name"
                                placeholderTextColor="#888"
                                value={data2.first_name}
                                fontSize={15}
                                onChangeText={text =>
                                    setData2({
                                        ...data2,
                                        first_name: text,
                                    })
                                }
                                editable={role === 'admin' ? true : false}
                            />
                            {firstnameerror ? (
                                <Text style={styles.error}>FirstName field is required</Text>
                            ) : null}
                            <TextInput
                                style={styles.input2}
                                placeholder="Last Name"
                                placeholderTextColor="#888"
                                value={data2.last_name}
                                fontSize={15}
                                onChangeText={text =>
                                    setData2({
                                        ...data2,
                                        last_name: text,
                                    })
                                }
                                editable={role === 'admin' ? true : false}
                            />
                            {lastnameerror ? (
                                <Text style={styles.error}>LastName field is required</Text>
                            ) : null}

                            <TextInput
                                style={styles.input2}
                                placeholder="Email"
                                placeholderTextColor="#888"
                                keyboardType="email-address"
                                value={data2.email1}
                                fontSize={15}
                                onChangeText={text =>
                                    setData2({
                                        ...data2,
                                        email1: text,
                                    })
                                }
                                editable={false}
                            />
                            {emailerror ? (
                                <Text style={styles.error}>Email field is required</Text>
                            ) : null}

                            <TextInput
                                style={styles.input2}
                                placeholder="Phone"
                                placeholderTextColor="#888"
                                keyboardType="decimal-pad"
                                value={data2.phone_mobile}
                                fontSize={15}
                                onChangeText={text =>
                                    setData2({
                                        ...data2,
                                        phone_mobile: text,
                                    })
                                }
                                editable={role === 'admin' ? false : true}
                            />
                            {phoneerror ? (
                                <Text style={styles.error}>
                                    Phone field is required(number between 10 to 12)
                                </Text>
                            ) : null}

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (role === 'Instructor') {
                                            updateInstructorDetails();
                                        } else if (role === 'admin') {
                                            updateAdminDetails();
                                        }
                                    }} style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        backgroundColor: 'orange',
                                        borderRadius: 12,
                                        width: '40%',
                                        alignSelf: 'center',
                                        marginVertical: 20,
                                    }}>
                                    <Text style={styles.button}>Save</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setIsModalVisible(false)}
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        backgroundColor: 'red',
                                        borderRadius: 12,
                                        width: '40%',
                                        alignSelf: 'center',
                                        marginVertical: 20,
                                    }}>
                                    <Text style={styles.button}>Cancel</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </Modal>
            ) : (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Edit Profile</Text>
                            <TextInput
                                style={styles.input2}
                                placeholder="First Name"
                                placeholderTextColor="#888"
                                value={data2.firstname}
                                onChangeText={text =>
                                    setData2({
                                        ...data2,
                                        firstname: text,
                                    })
                                }
                            />
                            {firstnameerror ? (
                                <Text style={styles.error}>FirstName field is required</Text>
                            ) : null}
                            <TextInput
                                style={styles.input2}
                                placeholder="Last Name"
                                placeholderTextColor="#888"
                                value={data2.lastname}
                                onChangeText={text =>
                                    setData2({
                                        ...data2,
                                        lastname: text,
                                    })
                                }
                            />
                            {lastnameerror ? (
                                <Text style={styles.error}>LastName field is required</Text>
                            ) : null}

                            <TextInput
                                style={styles.input2}
                                placeholder="Email"
                                placeholderTextColor="#888"
                                keyboardType="email-address"
                                value={data2.email}
                                onChangeText={text =>
                                    setData2({
                                        ...data2,
                                        email: text,
                                    })
                                }
                                editable={false}
                            />
                            {emailerror ? (
                                <Text style={styles.error}>Email field is required</Text>
                            ) : null}

                            <TextInput
                                style={styles.input2}
                                placeholder="Phone"
                                placeholderTextColor="#888"
                                keyboardType="decimal-pad"
                                value={data2.mobile}
                                onChangeText={text =>
                                    setData2({
                                        ...data2,
                                        mobile: text,
                                    })
                                }
                            />
                            {phoneerror ? (
                                <Text style={styles.error}>
                                    Phone field is required(number between 10 to 12)
                                </Text>
                            ) : null}

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                    <Text style={styles.button}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={updateStudentdetails}>
                                    <Text style={styles.button}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Profile</Text>
                        <TextInput
                            style={styles.input2}
                            placeholder="First Name"
                            placeholderTextColor="#888"
                            value={data2.firstname}
                            onChangeText={(text) => setData2({
                                ...data2,
                                firstname: text
                            })}
                        />                       
                        {firstnameerror ? <Text style={styles.error}>FirstName field is required</Text> : null}
                        <TextInput
                            style={styles.input2}
                            placeholder="Last Name"
                            placeholderTextColor="#888"
                            value={data2.lastname}
                            onChangeText={(text) => setData2({
                                ...data2,
                                lastname: text
                            })}
                        />                        
                        {lastnameerror ? <Text style={styles.error}>LastName field is required</Text> : null}

                        <TextInput
                            style={styles.input2}
                            placeholder="Email"
                            placeholderTextColor="#888"
                            keyboardType='email-address'
                            value={data2.email}
                            onChangeText={(text) => setData2({
                                ...data2,
                                email: text
                            })}
                            editable={false}
                        />                        
                        {emailerror ? <Text style={styles.error}>Email field is required</Text> : null}

                        <TextInput
                            style={styles.input2}
                            placeholder="Phone"
                            placeholderTextColor="#888"
                            keyboardType='decimal-pad'
                            value={data2.mobile}
                            onChangeText={(text) => setData2({
                                ...data2,
                                mobile: text
                            })}
                        />                       
                        {phoneerror ? <Text style={styles.error}>Phone field is required(number between 10 to 12)</Text> : null}

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                <Text style={styles.button}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={updatedetails}>
                                <Text style={styles.button}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal> */}

            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(57, 60, 64,0.5)',
                    }}>
                    <ActivityIndicator size="large" color="skyblue" />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 55,
        width: '100%',
        backgroundColor: '#3d3e40',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: Platform.OS === 'ios' ? 57 : 0,
    },
    headertext: {
        color: '#f5c849',
        fontSize: 18,
        fontWeight: 'bold',


    },
    maintext: {
        color: '#f5c849',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 145,
    },
    top: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Platform.OS == 'ios' ? 'black' : '',
    },
    input: {
        marginLeft: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '92%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'orange',
        textAlign: 'center',
    },
    input2: {
        borderWidth: 1.5,
        borderColor: 'orange',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
        color: 'black',
        height: 45
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    
    },
    button: {

        color: 'white', // Assuming you want white text color
        fontSize: 18, // Adjust font size as needed
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 8
        
    },
});

