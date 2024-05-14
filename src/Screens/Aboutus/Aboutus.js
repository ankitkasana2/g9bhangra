import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';
export default function Aboutus({navigation}) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#28282B', width: 400, }}>
                <View style={styles.topView}>
                    <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>About Us</Text></TouchableOpacity>
                    <TouchableOpacity style={{ position: 'relative' }} onPress={()=>navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
                </View>
                <Image source={require('../../../Assets/Image/Mountain.jpg')} style={styles.img} />
                <Image source={require('../../../Assets/Image/NSDC.png')} style={styles.img1} />
                <View style={{ margin: 20 }}>
                    <Text style={styles.lable}>Profile</Text>
                    <Text style={styles.txt}>STC Group, a corporate focused development company with close to 14 years experience in training & technology launched STC as its Skill Service brand .STC Skill is the funded training partner of National Skills development Corporation(NSDC).upholding the indian government vision.the company is commited to create .</Text>
                    <Text style={styles.lable}>Our Capabilities</Text>
                    <Text style={styles.txt}>STC Group, a corporate focused development company with close to 14 years experience in training & technology launched STC as its Skill Service brand .STC Skill is the funded training partner of National Skills development Corporation(NSDC).upholding the indian government vision.the company is commited to create .</Text>
                    <Text style={styles.lable}>Our Mission</Text>
                    <Text style={styles.txt}>STC Group, a corporate focused development company with close to 14 years experience in training & technology launched STC as its Skill Service brand .STC Skill is the funded training partner of National Skills development Corporation(NSDC).upholding the indian government vision.the company is commited to create .</Text>
                    <Text style={styles.lable}>Our Vision</Text>
                    <Text style={styles.txt}>STC Group, a corporate focused development company with close to 14 years experience in training & technology launched STC as its Skill Service brand .STC Skill is the funded training partner of National Skills development Corporation(NSDC).upholding the indian government vision.the company is commited to create .</Text>
                </View>
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
    img: {
        height: 220,
        width: 400,
        opacity: 0.5,
    },
    img1: {
        height: 80,
        width: 200,
        position: 'absolute',
        left: 100,
        top: 140
    },
    lable: {
        color: 'white',
        fontWeight:'bold',
        fontSize:18,
        marginTop:10,
        marginBottom:10
    },
    txt:{
        color:'gray',
        textAlign:'justify'
    }
});