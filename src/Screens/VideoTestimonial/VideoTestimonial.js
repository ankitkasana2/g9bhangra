import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function VideoTestimonial({ navigation }) {
    return (
        <View style={{ backgroundColor: '#28282B', width: 400, height: 800, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <View style={styles.topView}>
                <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Video Testimonial</Text></TouchableOpacity>
                <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
            </View>
            <View style={{ height: 320, width: 350, backgroundColor: '#2d2d2e', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 10 }}>
                <Image source={require('../../../Assets/Image/P-1.jpg')} style={{ height: 80, width: 80, borderRadius: 50 }} />
                <Text style={{ color: 'gray' }}>Molly Cane</Text>
                <Text style={{ fontSize: 10, color: 'gray' }}>Jio Telecome</Text>
                <Image source={require('../../../Assets/Image/cardContainer.jpg')} style={{height:160,width:320,opacity:0.4,borderRadius:10}}/>
                <Image source={require('../../../Assets/Image/play-button.png')} style={{height:50,width:50,position:'absolute',top:220}}/>
            </View>
            <View style={{ height: 320, width: 350, backgroundColor: '#2d2d2e', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 10, marginBottom: 30 }}>
                <Image source={require('../../../Assets/Image/P-2.jpg')} style={{ height: 80, width: 80, borderRadius: 50 }} />
                <Text style={{ color: 'gray' }}>Magan Desai</Text>
                <Text style={{ fontSize: 10, color: 'gray' }}>Tesla</Text>
                <Image source={require('../../../Assets/Image/cardContainer.jpg')} style={{ height: 160, width: 320, opacity: 0.4, borderRadius: 10 }} />
                <Image source={require('../../../Assets/Image/play-button.png')} style={{ height: 50, width: 50, position: 'absolute', top: 220 }} />

            </View>
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