import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native'
// import ImagePicker from 'react-native-image-crop-picker';

export default function EditProfile({ navigation }) {

    const [visible, setVisible] = useState(true)
    const toggle = () => setVisible(previousState => !previousState);


    // const onImageOptionClick = () => {
    //     ImagePicker.openPicker({
    //         width: 300,
    //         height: 400,
    //         cropping: true
    //     }).then(image => {
    //         console.log(image.path)
    //     });
    // }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <View style={styles.topView}>
                        <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.navigate('MyAccount')}><Image source={require('../../../Assets/Image/back.png')} style={styles.headerImg} /></TouchableOpacity>
                        <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Edit Profile</Text></TouchableOpacity>
                        <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row' }}>
                        <View style={{ height: 100, width: 100, borderRadius: 50, marginTop: 20 }}>
                            <Image source={require('../../../Assets/Image/logo.png')} style={{ height: '100%', width: '100%', borderRadius: 50, resizeMode: 'contain' }} />
                        </View>
                        <TouchableOpacity style={{ height: 30, width: 30, borderRadius: 50, marginLeft: -25, marginBottom: 10 }} >
                            <Image source={require('../../../Assets/Image/camera.png')} style={{ height: '100%', width: '100%', borderRadius: 50, resizeMode: 'cover', backgroundColor: 'white' }} />
                        </TouchableOpacity>
                    </View>

                    <KeyboardAvoidingView
                        style={styles.container}
                        behavior="padding"
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 20 }}>
                                <Text style={{ fontSize: 18, color: 'white', marginBottom: 5 }}>Name</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Please enter a name'
                                    placeholderTextColor="gray"
                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"
                                />
                            </View>

                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 20 }}>
                                <Text style={{ fontSize: 18, color: 'white', marginBottom: 5 }}>E-mail</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Please enter a e-mail address'
                                    placeholderTextColor="gray"
                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 20 }}>
                                <Text style={{ fontSize: 18, color: 'white', marginBottom: 5 }}>Username</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Please enter a username'
                                    placeholderTextColor="gray"
                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 20 }}>
                                <Text style={{ fontSize: 18, color: 'white', marginBottom: 5 }}>Password</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2d2d2e', borderRadius: 8 }}>
                                    <TextInput
                                        style={{ flex: 1, paddingTop: 10, paddingRight: 10, paddingBottom: 10, paddingLeft: 15, backgroundColor: '#2d2d2e', color: 'white', borderRadius: 8 }}
                                        placeholder='Please enter a password'
                                        placeholderTextColor="gray"
                                        underlineColorAndroid="transparent"
                                        autoCapitalize="none"
                                        secureTextEntry={visible}
                                    />
                                    <TouchableOpacity onPress={toggle}>
                                        <Image source={require('../../../Assets/Image/hide.png')} style={{ height: 25, width: 25, marginRight: 15 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 20 }}>
                                <Text style={{ fontSize: 18, color: 'white', marginBottom: 5 }}>Phone Number</Text>
                                <TextInput
                                    style={styles.input}
                                    keyboardType='numeric'
                                    placeholder='+91 213332'
                                    placeholderTextColor="gray"
                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"
                                />
                            </View>
                            <TouchableOpacity style={{ height: 50, width: '50%', backgroundColor: 'orange', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}><Text style={{ color: 'white', fontWeight: 900 }}>Submit</Text></TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View >
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 800,
        width: "100%",
        backgroundColor: '#28282B',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',

    },
    topView: {
        flexDirection: 'row',
        height: 70,
        width: 400,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerImg: {
        height: 30,
        width: 30,
        backgroundColor: 'transparent',
        marginRight: 15,
        marginLeft: 10,
    },
    input: {
        height: 50,
        backgroundColor: '#2d2d2e',
        width: 300,
        paddingLeft: 15,
        borderRadius: 8,
        color: 'white'
    }
})