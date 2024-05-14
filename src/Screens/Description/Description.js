import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function Description({ navigation }) {
    return (
        <>
            <View style={styles.header}>
                <View>
                    <View>
                        <Image source={require('../../../Assets/Image/Card-1.jpg')} style={styles.img} />
                    </View>
                    <View style={styles.topView}>
                        <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                        <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Courses</Text></TouchableOpacity>
                        <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginLeft: 15, }}>
                    <View style={{ marginTop: 15 }}>
                        <Text style={styles.txt}>Networking</Text>
                        <Text style={styles.txt}>Essentials</Text>
                    </View>
                    <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Image source={require('../../../Assets/Image/clock.png')} style={{height:20,width:20}}/><Text style={{ color: 'gray', marginLeft: 10 }}>2 Months</Text>
                        <Image source={require('../../../Assets/Image/calendar.png')} style={{height:20,width:20,marginLeft:80}}/><Text style={{ color: 'gray', marginLeft: 10 }}>Starting From 17th July</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: 'flex-end' }}>
                        <View style={styles.panel}><Image source={require('../../../Assets/Image/P-1.jpg')} style={{ height: 60, width: 60, borderRadius: 50 }} /></View>
                        <View style={styles.panel}><Image source={require('../../../Assets/Image/P-2.jpg')} style={{ height: 60, width: 60, borderRadius: 50 }} /></View>
                        <View style={styles.panel}><Image source={require('../../../Assets/Image/P-3.jpg')} style={{ height: 60, width: 60, borderRadius: 50 }} /></View>
                        <View style={styles.panel}><Image source={require('../../../Assets/Image/P-4.jpg')} style={{ height: 60, width: 60, borderRadius: 50 }} /></View>
                        <View style={styles.panel}><Image source={require('../../../Assets/Image/P-5.jpg')} style={{ height: 60, width: 60, borderRadius: 50 }} /></View>
                        <Text style={{ color: 'gray' }}>180k+ Joined</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 270, width: 400, backgroundColor: '#28282B' }}>
                <View style={{ marginLeft: 15 }}>
                    <ScrollView>
                        <View style={{ flex: 1, height: 1, marginRight: 20, backgroundColor: 'white' }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 10 }}>Description</Text>
                        <Text style={{ color: 'gray', lineHeight: 25, marginRight: 18, marginTop: 15 }}>Networking Essentials is a basic networking course that is the underpinning of the CCNA. "Networking Essentials is a new course teaches the fundamentals of networking, it is not a replacement of CCNA and it is not a prerequisite for CCNA.</Text>
                        <View style={{ flex: 1, height: 1, marginRight: 20, backgroundColor: 'white', marginTop: 15 }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 10 }}>Syllabus</Text>
                        <Text style={{ color: 'gray', marginLeft: 20, marginTop: 10 }}>1. Network Basics :</Text>
                        <Text style={{ color: 'gray', marginLeft: 40, marginTop: 10 }}>{'\u2022'} Defining a network </Text>
                        <Text style={{ color: 'gray', marginLeft: 40, marginTop: 10 }}>{'\u2022'} Diffrent Type of network</Text>
                        <Text style={{ color: 'gray', marginLeft: 20, marginTop: 10 }}>2. Networking Standards :</Text>
                        <Text style={{ color: 'gray', marginLeft: 40, marginTop: 10 }}>{'\u2022'} Network standards are important </Text>
                        <Text style={{ color: 'gray', marginLeft: 40, marginTop: 10 }}>{'\u2022'} Network Components , Devices and Functions </Text>
                        <Text style={{ color: 'gray', marginLeft: 20, marginTop: 10 }}>3. Networking Models :</Text>
                        <Text style={{ color: 'gray', marginLeft: 40, marginTop: 10 }}>{'\u2022'} Network Services  {'{DHCP, DNS}'}</Text>
                        <Text style={{ color: 'gray', marginLeft: 40, marginTop: 10 }}>{'\u2022'} Physical Media </Text>
                        <Text style={{ color: 'gray', marginLeft: 40, marginTop: 10 }}>{'\u2022'} Network Modal</Text>
                        <View style={{ flex: 1, height: 1, marginRight: 20, backgroundColor: 'white', marginTop: 15 }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 10 }}>Batch Timings</Text>
                        <Text style={{ color: 'gray', marginLeft: 20, marginTop: 10 }}>{'\u2022'} 9:00 - 11:00am</Text>
                        <Text style={{ color: 'gray', marginLeft: 25, marginTop: 10 }}> Monday - Wednesday - Friday</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text style={{ color: 'gray', marginLeft: 20, marginTop: 10 }}>{'\u2022'} 3:00 - 5:00pm</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text style={{ color: 'gray', marginLeft: 20, marginTop: 10 }}>{'\u2022'} 9:00 - 11:00am</Text>
                        <Text></Text>
                        <Text></Text>
                        <Text style={{ color: 'gray', marginLeft: 20, marginTop: 10 }}>{'\u2022'} 3:00 - 5:00pm</Text>
                        <View style={{ flex: 1, height: 1, marginRight: 20, backgroundColor: 'white', marginTop: 10 }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 15 }}>Course Fee</Text>
                        <Text style={{ color: 'gray', marginLeft: 20, marginTop: 10 }}>1. Fee - {'\u20B9'}5000</Text>
                        <Text style={{ color: 'gray', marginLeft: 20, marginTop: 10 }}>2. Booking amount - {'\u20B9'}3500</Text>
                        <Text style={{ color: 'gray', marginLeft: 40, marginTop: 10 }}>a. Booking fee is the part of the actual cost{'\n'} of the Course like advance Payment </Text>
                        <Text style={{ color: 'gray', marginLeft: 40, marginTop: 10 }}>b. Once booking Payment is confirmed </Text>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>{'\u20A8'} 3500/-</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BuyNow')}><Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Buy Now</Text></TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 400,
        width: 400,
        backgroundColor: '#28282B',
    },
    img: {
        height: 200,
        width: 400,
        opacity: 0.4,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35

    },
    topView: {
        flexDirection: 'row',
        height: 70,
        width: 400,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute'
    },
    headerImg: {
        height: 30,
        width: 30,
        backgroundColor: 'transparent',
        marginRight: 15,
        marginLeft: 10,
    },
    txt: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    panel: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginLeft: -20
    },
    footer: {
        height: 130,
        width: 400,
        backgroundColor: '#2d2d2e',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn: {
        height: 65,
        width: 150,
        backgroundColor: 'orange',
        marginBottom: 20,
        marginLeft: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})