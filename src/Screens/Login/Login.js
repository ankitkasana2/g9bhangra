import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image, ScrollView, ToastAndroid, Modal, ActivityIndicator, Platform, Alert } from 'react-native';
import CheckBox from 'react-native-check-box'
import Toast from 'react-native-toast-message';

export default function Login({ navigation }) {

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailerror, setEmailerror] = useState(false);
    const [passworderror, setPassworderror] = useState(false);

    const [loader, setLoader] = useState(false);

    const handelClick = () => {
        setIsChecked(!isChecked);
    }
    const press = () => {
        navigation.navigate("StudentHomeScreen");
    }



    const login = async () => {

        try {

            if (!email) {
                setEmailerror(true)
            }
            else {
                setEmailerror(false)
            }
            if (!password) {
                setPassworderror(true)
            }
            else {
                setPassworderror(false)
            }

            if (email != null || password != null) {

                setLoader(true)
            }


            await fetch(`https://www.sales.g9media.ca/mobile_api/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: email,
                    password: password
                }),
            }).then(response => response.json())

                .then(json => {
                    console.log('api response : ', json);
                    // Alert.alert(json);
                    // AsyncStorage.setItem("user",json);
                    if (json.status) {
                        console.log("login Successfully!", json);
                        Toast.show({
                            type: 'success',
                            text1: 'LogIn Successfully !',
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

                        if (json.role === 'Student') {

                            navigation.navigate('StudentHomeScreen', { id: json.user_id });
                        }
                        else if (json.role === 'admin') {
                            navigation.navigate('AdminHome', { data: json });
                        }
                        else if (json.role === 'Instructor') {
                            navigation.navigate('Dashboard', { data: json });
                        }
                    }
                    else {
                        console.log('invalid username & password');
                        ToastAndroid.show('Invalid Username & Password!! Try Again', ToastAndroid.SHORT);
                        Toast.show({
                            type: 'success',
                            text1: 'Invalid Username & Password!! Try Again',
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
        }
        catch (error) {
            console.log(error);
            console.log("Invalid credientials");
            ToastAndroid.show('Invalid Credientials!!', ToastAndroid.LONG);
            Toast.show({
                type: 'success',
                text1: 'Invalid Credientials!!',
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
        finally {
            setLoader(false)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={{ justifyContent: 'center'}}>
                        <Image source={require('../../../Assets/Image/Logo1.png')} style={{ alignSelf: 'center', height: 160, width: 260 }} />

                    </View>
                    <View style={styles.container}>
                        <TextInput
                            placeholder="Enter Username"
                            placeholderTextColor='white'
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}

                        />
                        {emailerror ? <Text style={styles.valid1}>email field is required</Text> : null}
                        <TextInput
                            placeholder="Enter Password"
                            placeholderTextColor='white'
                            style={styles.input}
                            value={password}
                            onChangeText={(pass) => setPassword(pass)}
                            secureTextEntry={true}

                        />
                        {passworderror ? <Text style={styles.valid2}>password field is required</Text> : null}
                        {/* <View style={styles.checkboxContainer}>
                        <CheckBox
                            style={{ marginRight: 15, marginLeft: -153 }}
                            checkBoxColor='white'
                            onClick={() => handelClick()}
                            isChecked={isChecked}
                            checkedCheckBoxColor='orange'
                        />
                        <Text>{isChecked ? <Text style={{ color: 'orange' }}>Remember</Text> : <Text style={{ color: 'white' }}>Remember</Text>}</Text>
                    </View> */}
                        <TouchableOpacity style={styles.btn} onPress={() => login()}>
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ height: 1, width: '30%', backgroundColor: 'white' }} />
                            <View>
                                <Text style={{ width: 100, textAlign: 'center', color: 'white' }}>Continue With</Text>
                            </View>
                            <View style={{ height: 1, width: '30%', backgroundColor: 'white' }} />
                        </View>
                        {/* <View style={styles.boxContainer}>
                        <View style={styles.logo}><Image style={styles.img} source={require('../../../Assets/Image/Google.png')} /></View>
                        <View style={styles.logo}><Image style={styles.img} source={require('../../../Assets/Image/Facebook.png')} /></View>
                    </View> */}
                        <View style={styles.signup}>
                            <View>
                                <Text style={{ color: 'white' }}>Don't have Account?</Text>

                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <View>
                                    <Text style={styles.signupBtn}>  Sign Up</Text>

                                </View>
                            </TouchableOpacity>

                        </View>
                        {/* <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
                            <Text style={styles.underline}>Forget Password</Text>
                        </TouchableOpacity>
                    </View> */}

                        <Modal
                            transparent={true}
                            visible={loader}
                            animationType="fade"
                            onRequestClose={() => setLoader(false)}
                        >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(76, 76, 77,0.5)' }}>
                                <ActivityIndicator size={"large"} color={"orange"} />
                            </View>

                        </Modal>



                    </View>
                </ScrollView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#28282B',
        justifyContent: 'center', // Center content vertically
    },
    contentContainer: {
        justifyContent: 'center', // Center content horizontally
    },
    scrollViewContent: {
        justifyContent: 'center', // Center content horizontally and vertically in ScrollView
        alignItems: 'center',
    },
    topView: {
        height: 100,
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    container: {
        height: 500,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',

    },
    input: {
        height: Platform.OS == 'ios' ? 50 : '',
        width: '90%',
        backgroundColor: 'transparent',
        borderColor: 'orange',
        borderWidth: 1.5,
        paddingLeft: 20,
        borderRadius: 5,
        color: 'white',
    },
    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    label: { color: 'white' },
    btn: {
        height: 50,
        width: '90%',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    boxContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        heigth: 50,
        width: 50,
        borderRadius: 50,
        margin: 10,
        backgroundColor: 'white'
    },
    img: {
        height: 50,
        width: 50,
    },
    signup: {
        flexDirection: 'row'
    },
    signupBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'orange'
    },
    underline: {
        textDecorationLine: 'underline',
        color: 'white'
    },
    valid1: {
        top: -36,
        left: -85,
        color: 'red'
    },
    valid2: {
        top: -36,
        left: -70,
        color: 'red'
    }

})