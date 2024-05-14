import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default function SignUp2({navigation}) {
    return (
        <View style={{ backgroundColor: '#28282B', width: 400, height: 800, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                    <Image source={require('../../../Assets/Image/back.png')} style={styles.img} />
                </TouchableOpacity>
                
            </View>
            <View style={{ width: 400, paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontSize: 25, color: 'white' }}>Sign Up</Text>
                <Text style={{ color: 'gray', marginTop: 10 }}>OTP Varification</Text>
            </View>
            <View style={{ height: 200, width: 400, paddingLeft: 60, paddingRight: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ color: 'gray', marginTop: 10 }}>Phone Number</Text>
                <View style={{ height: 50, width: 280, marginTop: 20, marginBottom: 20, borderColor: 'gray', borderWidth: 1, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                    <Image source={require('../../../Assets/Image/phone.png')} style={{ height: 30, width: 30, marginLeft: 10 }} />
                    <TextInput placeholder="+91" placeholderTextColor={'gray'} style={{ paddingLeft: 20 }} />
                </View>
                <Text style={{ color: 'gray', marginTop: 10 }}>Enter The Code</Text>
                <View style={{ height: 50, width: 280, marginTop: 20, marginBottom: 20, borderColor: 'gray', borderWidth: 1, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                    <TextInput placeholder="Varify OTP" placeholderTextColor={'gray'} style={{ paddingLeft: 20 }} />
                </View>
                <Text style={{ color: 'orange' }}>Resend</Text>
            </View>
            <TouchableOpacity style={{ height: 60, width: 360, backgroundColor: 'orange', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', margin: 20, borderRadius: 10 }} onPress={()=>navigation.navigate('AccountCreated')}>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Create Account</Text>
            </TouchableOpacity>
            <Text style={{color:'gray'}}>Do you have an Account ? <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={{color:'white',fontWeight:'bold'}}>Sign in</Text></TouchableOpacity></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    topView: {
        height: 50,
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    img: {
        height: 40,
        width: 40
    }
})
