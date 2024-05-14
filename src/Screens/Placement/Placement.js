import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default function Placement({ navigation }) {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#28282B', width: 400, height: 800, }}>
                <View style={styles.topView}>
                    <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Placements</Text></TouchableOpacity>
                    <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
                </View>
                <View style={styles.switch}>
                    <TouchableOpacity style={{ height: 22, width: 120, marginLeft: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}><Text style={{ color: 'black' }}>Placements</Text></TouchableOpacity>
                    <TouchableOpacity style={{ height: 25, width: 125, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }} onPress={() => navigation.navigate('JobOpening')}><Text style={{ color: 'white' }}>Job Openings</Text></TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ height: 280, width: 160, backgroundColor: '#2d2d2e', margin: 15, borderRadius: 10 }}>
                        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', height: 100, width: 160 }}>
                                <Image source={require('../../../Assets/Image/P-1.jpg')} style={{ height: 80, width: 80, resizeMode: 'stretch', borderRadius: 50 }} />
                                <Image source={require('../../../Assets/Image/Gooogle.png')} style={{ height: 30, width: 30, resizeMode: 'stretch', borderRadius: 50, marginLeft: -25 }} />
                            </View>
                            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', }}>
                                <Text style={{ color: 'white', fontSize: 16, margin: 10 }}>Akash Chopra</Text>
                                <Text style={{ color: 'white', fontSize: 13 }}>Course</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>Networking Essentials</Text>
                                <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>Company</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>Google</Text>
                                <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>Package</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>8.8L</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 280, width: 160, backgroundColor: '#2d2d2e', margin: 15, borderRadius: 10 }}>
                        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', height: 100, width: 160 }}>
                                <Image source={require('../../../Assets/Image/P-2.jpg')} style={{ height: 80, width: 80, resizeMode: 'stretch', borderRadius: 50 }} />
                                <Image source={require('../../../Assets/Image/Airbnb.png')} style={{ height: 30, width: 30, resizeMode: 'stretch', borderRadius: 50, marginLeft: -25 }} />
                            </View>
                            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', }}>
                                <Text style={{ color: 'white', fontSize: 16, margin: 10 }}>Dhiraj Singh</Text>
                                <Text style={{ color: 'white', fontSize: 13 }}>Course</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>Networking Essentials</Text>
                                <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>Company</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>Google</Text>
                                <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>Package</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>8.8L</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ height: 280, width: 160, backgroundColor: '#2d2d2e', margin: 15, borderRadius: 10 }}>
                        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', height: 100, width: 160 }}>
                                <Image source={require('../../../Assets/Image/P-3.jpg')} style={{ height: 80, width: 80, resizeMode: 'stretch', borderRadius: 50 }} />
                                <Image source={require('../../../Assets/Image/Gitlab.png')} style={{ height: 30, width: 30, resizeMode: 'stretch', borderRadius: 50, marginLeft: -25 }} />
                            </View>
                            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', }}>
                                <Text style={{ color: 'white', fontSize: 16, margin: 10 }}>Magan Gadhiya</Text>
                                <Text style={{ color: 'white', fontSize: 13 }}>Course</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>Networking Essentials</Text>
                                <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>Company</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>Google</Text>
                                <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>Package</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>8.8L</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 280, width: 160, backgroundColor: '#2d2d2e', margin: 15, borderRadius: 10 }}>
                        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', height: 100, width: 160 }}>
                                <Image source={require('../../../Assets/Image/P-4.jpg')} style={{ height: 80, width: 80, resizeMode: 'stretch', borderRadius: 50 }} />
                                <Image source={require('../../../Assets/Image/Microsoft.png')} style={{ height: 30, width: 30, resizeMode: 'stretch', borderRadius: 50, marginLeft: -25 }} />
                            </View>
                            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', }}>
                                <Text style={{ color: 'white', fontSize: 16, margin: 10 }}>Kabir Singh</Text>
                                <Text style={{ color: 'white', fontSize: 13 }}>Course</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>Networking Essentials</Text>
                                <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>Company</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>Google</Text>
                                <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>Package</Text>
                                <Text style={{ color: 'orange', fontSize: 13 }}>8.8L</Text>
                            </View>
                        </View>
                    </View>
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
    switch: {
        height: 30,
        width: 250,
        backgroundColor: '#2d2d2e',
        borderRadius: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
        marginLeft: 75
    }
})