import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function Notification({navigation}) {
    return (
        <View style={{ backgroundColor: '#28282B', width: 400, height: 800 }}>
            <View style={styles.topView}>
                <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Courses</Text></TouchableOpacity>
                <TouchableOpacity style={{ position: 'relative' }}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
            </View>
            <View style={{ height: 60, width: 360, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../../Assets/Image/P-5.jpg')} style={{ height: 55, width: 55, borderRadius: 50 }} />
                <Text style={{marginLeft:10,color:'gray',lineHeight:30}}>You enrolled in the course.<Text style={{color:'orange'}}>Pay Now.{'\n'}</Text>2 hour ago</Text>
            </View>
            <View style={{height:0.5,backgroundColor:'white',width:360,marginLeft:20,marginTop:10}}></View>
            <View style={{ height: 60, width: 360, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../../Assets/Image/P-5.jpg')} style={{ height: 55, width: 55, borderRadius: 50 }} />
                <Text style={{marginLeft:10,color:'gray',lineHeight:30}}>Your payment is pending<Text style={{color:'orange'}}>Pay Now.{'\n'}</Text>2 hour ago</Text>
            </View>
            <View style={{height:0.5,backgroundColor:'white',width:360,marginLeft:20,marginTop:10}}></View>
            <View style={{ height: 60, width: 360, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Image source={require('../../../Assets/Image/P-5.jpg')} style={{ height: 55, width: 55, borderRadius: 50 }} />
                <Text style={{marginLeft:10,color:'gray',lineHeight:30}}>You enrolled in the course.<Text style={{color:'orange'}}>Pay Now.{'\n'}</Text>2 hour ago</Text>
            </View>
            <View style={{height:0.5,backgroundColor:'white',width:360,marginLeft:20,marginTop:10}}></View>
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
});