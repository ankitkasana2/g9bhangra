import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { DrawerActions } from '@react-navigation/native';



export default function Reachus({ navigation }) {
    return (
        <ScrollView>
            <View style={{ width: 400, backgroundColor: '#28282B', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Reach Us</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
                </View>
                <View style={{ height: 700, width: 350, backgroundColor: '#2d2d2e', borderRadius: 10, }}>
                    <View style={{ margin: 20, justifyContent: 'space-evenly', flexDirection: 'column' }}>
                        <Text style={{ fontSize: 17, color: 'gray' }}>Your Name*</Text>
                        <TextInput placeholder='Please Enter Your Name' placeholderTextColor={'gray'} style={{ height: 50, width: 310, marginTop: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 20, color: 'gray' }} />
                        <Text style={{ fontSize: 17, color: 'gray', marginTop: 20 }}>Contact Email*</Text>
                        <TextInput placeholder='you@example.com' placeholderTextColor={'gray'} style={{ height: 50, width: 310, marginTop: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 20, color: 'gray' }} />
                        <Text style={{ fontSize: 17, color: 'gray', marginTop: 20 }}>Country*</Text>
                        <TextInput placeholder='Please Select Country' placeholderTextColor={'gray'} style={{ height: 50, width: 310, marginTop: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 20, color: 'gray' }} />
                        <Text style={{ fontSize: 17, color: 'gray', marginTop: 20 }}>Your Message*</Text>
                        <TextInput placeholder='Enter Your Message' placeholderTextColor={'gray'} style={{ height: 150, width: 310, marginTop: 10, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 20, color: 'gray', textAlign: 'justify' }} />
                        <Text style={{ fontSize: 13, color: 'gray', marginTop: 20, lineHeight: 20 }}>By submitting this form you agree our term and conditions and our Privacy Policy which explains how we may collect,use and disclose your personal information including the third parties.</Text>
                        <TouchableOpacity style={{ height: 60, width: 150, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center', marginLeft: 75, marginTop: 20, borderRadius: 10 }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Contact US</Text></TouchableOpacity>
                    </View>
                </View>
                <Image source={require('../../../Assets/Image/email.png')} style={{ height: 80, width: 80, marginTop: 50 }} />
                <Text style={{ fontSize: 20, color: 'orange', marginTop: 10 }}>Email Us</Text>
                <Text style={{ color: 'gray', textAlign: 'center', marginTop: 10, lineHeight: 20 }}>Email us for general quaries,{'\n'}including marketing and{'\n'}partnership opportunities.</Text>
                <Text style={{ color: 'orange', marginTop: 15, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>k29solutions@gmail.com</Text>
                <Image source={require('../../../Assets/Image/Call.png')} style={{ height: 80, width: 80, marginTop: 50 }} />
                <Text style={{ fontSize: 20, color: 'orange', marginTop: 10 }}>Call Us</Text>
                <Text style={{ color: 'gray', textAlign: 'center', marginTop: 10, lineHeight: 20 }}>Email us to speak to a member of{'\n'}our team. we are always happy{'\n'}to help you.</Text>
                <Text style={{ color: 'orange', marginTop: 15, textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>+91 9624767583</Text>
               
                
                <Text style={{ fontSize: 20, fontWeight: 700, color: 'orange', marginTop: 20 }}>Google Map</Text>
                <Text style={{ fontSize: 16, fontWeight: 700, color: 'gray', marginTop: 10, marginBottom: 100 }}>Map for the proper location</Text>
            </View>
        </ScrollView>
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
});
