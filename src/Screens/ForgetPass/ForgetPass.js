import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default function ChangePass({ navigation }) {
    return (
        <View style={{ backgroundColor: '#28282B', width: 400, height: 800, justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={styles.topView}>
                <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.navigate('Login')}><Image source={require('../../../Assets/Image/back.png')} style={styles.headerImg} /></TouchableOpacity>
            </View>
            
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: 30, marginRight: 30 }}>
                <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Forget Password</Text></TouchableOpacity>
                <TextInput placeholder="Please Enter Your Email" placeholderTextColor={'gray'} style={styles.input} />
            </View>
            <TouchableOpacity style={{ height: 50, width: 200, backgroundColor: 'orange', marginTop: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
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
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 20,
        marginTop: 20,
        borderRadius: 10
    }
})