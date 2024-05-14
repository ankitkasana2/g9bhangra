import React, { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerActions } from '@react-navigation/native';
export default function HomeScreen({ navigation }) {

    return (

        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.topView}>
                        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity> */}
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f5c849' }}>Home</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.loginText}>Login</Text></TouchableOpacity>
                    </View>
                    {/* <View style={styles.header}>
                            <Text style={styles.headerText}>Hello,</Text>
                            <Text style={styles.headerText}>Chintan Thakur</Text>
                            <TextInput placeholder="Search" placeholderTextColor='gray' style={{ color: 'white', height: 50, width: 350, borderColor: 'white', borderWidth: 1, borderRadius: 5, paddingLeft: 20, backgroundColor: '#2d2d2e', marginLeft: 13, marginTop: 10 }} />
                        </View> */}
                    <ScrollView>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 400, marginBottom: 5 }}>
                            {/* <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginRight: 260 }}>Courses</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
                                <Text style={{ textDecorationLine: 'underline', color: 'white' }}>See all</Text>
                            </TouchableOpacity> */}
                            <Image source={require('../../../Assets/Image/bhangara.jpg')} style={{ width: '100%' }} />
                        </View>
                        {/* <View style={{ flex: 1, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                <TouchableOpacity>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', backgroundColor: '#f5c849', padding: 12, margin: 10, borderRadius: 50 }}>Class Leave</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', backgroundColor: '#f5c849', padding: 12, margin: 10, borderRadius: 50 }}>App Report</Text>
                                </TouchableOpacity>
                            </View>
                        </View> */}
                        {/* <ScrollView horizontal={true}>
                            <View style={{ justifyContent: "space-between", alignItems: 'center', flexDirection: 'row', marginTop: 0 }}>
                                <View style={styles.card}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Description')}>
                                        <Image
                                            style={styles.image}
                                            source={require('../../../Assets/Image/Card-1.jpg')}
                                        />
                                        <Text style={{ position: 'absolute', color: 'white', fontSize: 25, color: 'white', fontWeight: 'bold', top: 30, left: 20, lineHeight: 30 }}>Networking{'\n'}Essentials</Text>
                                        <View style={{ flexDirection: 'row', height: 30, width: 230, marginLeft: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../../../Assets/Image/clock.png')} style={{ height: 20, width: 20, marginRight: 8 }} />
                                                <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>2 Months</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../../../Assets/Image/calendar.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                                                <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>Starting from 17th july</Text>
                                            </View>
                                        </View>
                                        <View style={{ height: 60, width: 230, marginLeft: 10, flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10, justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View styles={{ height: 40, width: 40, borderRadius: 50, }}><Image source={require('../../../Assets/Image/P-1.jpg')} style={{ height: 40, width: 40, borderRadius: 50 }} /></View>
                                                <View styles={{ height: 40, width: 40, borderRadius: 50, }}><Image source={require('../../../Assets/Image/P-2.jpg')} style={{ height: 40, width: 40, borderRadius: 50, marginLeft: -20 }} /></View>
                                                <View styles={{ height: 40, width: 40, borderRadius: 50, }}><Image source={require('../../../Assets/Image/P-3.jpg')} style={{ height: 40, width: 40, borderRadius: 50, marginLeft: -20 }} /></View>
                                            </View>
                                            <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>See Details</Text>
                                        </View>
                                        <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold', marginLeft: 10, marginBottom: 10 }}>180k+ Joined</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={styles.card}>
                                    <TouchableOpacity>
                                        <Image
                                            style={styles.image}
                                            source={require('../../../Assets/Image/Card-2.png')}
                                        />
                                        <Text style={{ position: 'absolute', color: 'white', fontSize: 25, color: 'white', fontWeight: 'bold', top: 30, left: 20, lineHeight: 30 }}>Windows{'\n'}Server</Text>

                                        <View style={{ flexDirection: 'row', height: 30, width: 230, marginLeft: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../../../Assets/Image/clock.png')} style={{ height: 20, width: 20, marginRight: 8 }} />
                                                <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>2 Months</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../../../Assets/Image/calendar.png')} style={{ height: 20, width: 20, marginRight: 10 }} />
                                                <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>Starting from 17th july</Text>
                                            </View>
                                        </View>
                                        <View style={{ height: 60, width: 230, marginLeft: 10, flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10, justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View styles={{ height: 40, width: 40, borderRadius: 50, }}><Image source={require('../../../Assets/Image/P-1.jpg')} style={{ height: 40, width: 40, borderRadius: 50 }} /></View>
                                                <View styles={{ height: 40, width: 40, borderRadius: 50, }}><Image source={require('../../../Assets/Image/P-2.jpg')} style={{ height: 40, width: 40, borderRadius: 50, marginLeft: -20 }} /></View>
                                                <View styles={{ height: 40, width: 40, borderRadius: 50, }}><Image source={require('../../../Assets/Image/P-3.jpg')} style={{ height: 40, width: 40, borderRadius: 50, marginLeft: -20 }} /></View>
                                            </View>
                                            <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>See Details</Text>
                                        </View>
                                        <Text style={{ fontSize: 10, color: 'white', fontWeight: 'bold', marginLeft: 10, marginBottom: 10 }}>180k+ Joined</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </ScrollView> */}
                        <View style={styles.cardContainer}>
                            <Image source={require('../../../Assets/Image/cardContainer.jpg')} style={styles.cardImage} />
                            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                                <Text style={styles.mainText}>110400</Text>
                                <Text style={styles.txt}>Trainees Skilled</Text>
                                <Text style={styles.mainText}>60455</Text>
                                <Text style={styles.txt}>Career Created</Text>
                                <Text style={styles.mainText}>150</Text>
                                <Text style={styles.txt}>Centers</Text>
                                <Text style={styles.mainText}>200</Text>
                                <Text style={styles.txt}>Faculty</Text>
                            </View>

                        </View>

                        <View style={{flex:1}}>
                            <Text style={{color:'white',fontSize:20,fontWeight:'bold',margin:10,textAlign:'center'}}>Contact Info</Text>
                           <Text style={{fontSize:17,fontWeight:'bold',textAlign:'center',marginTop:5,textDecorationLine:'underline',color:'#f5c849'}}>CONTACT</Text>
                            <Text style={{fontSize:12,textAlign:'center',marginTop:5,color:'white'}}>+91 5245154263</Text>
                            <Text style={{fontSize:12,textAlign:'center',marginTop:5,color:'white'}}>bhangra@gmail.com</Text>

                       </View>



                        {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', height: 40, width: 400 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginRight: 200, marginTop: 10 }}>Job Openings</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('JobOpening')}>
                                <Text style={{ textDecorationLine: 'underline', color: 'white', marginTop: 10 }}>See all</Text>
                            </TouchableOpacity>
                        </View> */}
                        {/* <View>
                            <View style={styles.palate}>
                                <Image source={require('../../../Assets/Image/Microsoft.png')} style={{ height: 60, width: 60, borderRadius: 10, marginLeft: 20 }} />
                                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                    <Text style={{ marginLeft: 30, marginBottom: 20, color: 'white' }}>Microsoft</Text>
                                    <Text style={{ marginLeft: 30, color: 'gray' }}>Product Designer</Text>
                                </View>
                                <View style={{ marginLeft: 120 }}>
                                    <Text style={{ color: 'gray', marginBottom: -16, fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                    <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                    <Text style={{ color: 'gray', marginTop: -16, fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                </View>
                            </View>
                            <View style={styles.palate}>
                                <Image source={require('../../../Assets/Image/Airbnb.png')} style={{ height: 60, width: 60, borderRadius: 10, marginLeft: 20 }} />
                                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                    <Text style={{ marginLeft: 30, marginBottom: 20, color: 'white' }}>Airbnb</Text>
                                    <Text style={{ marginLeft: 30, color: 'gray' }}>UI/UX Designer</Text>
                                </View>
                                <View style={{ marginLeft: 120 }}>
                                    <Text style={{ color: 'gray', marginBottom: -16, fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                    <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                    <Text style={{ color: 'gray', marginTop: -16, fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                </View>
                            </View>
                            <View style={styles.palate}>
                                <Image source={require('../../../Assets/Image/Gitlab.png')} style={{ height: 60, width: 60, borderRadius: 10, marginLeft: 20 }} />
                                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                    <Text style={{ marginLeft: 30, marginBottom: 20, color: 'white' }}>Gitlab</Text>
                                    <Text style={{ marginLeft: 30, color: 'gray' }}>UX Designer</Text>
                                </View>
                                <View style={{ marginLeft: 120 }}>
                                    <Text style={{ color: 'gray', marginBottom: -16, fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                    <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                    <Text style={{ color: 'gray', marginTop: -16, fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                </View>
                            </View>
                            <View style={styles.palate}>
                                <Image source={require('../../../Assets/Image/Gooogle.png')} style={{ height: 60, width: 60, borderRadius: 10, marginLeft: 20 }} />
                                <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                    <Text style={{ marginLeft: 30, marginBottom: 20, color: 'white' }}>Google</Text>
                                    <Text style={{ marginLeft: 30, color: 'gray' }}>UI Designer</Text>
                                </View>
                                <View style={{ marginLeft: 120 }}>
                                    <Text style={{ color: 'gray', marginBottom: -16, fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                    <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                    <Text style={{ color: 'gray', marginTop: -16, fontWeight: 'bold', fontSize: 20 }}>.</Text>
                                </View>
                            </View>
                        </View> */}
                        {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', height: 40, width: 400 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginRight: 190, marginTop: 10 }}>Our Placement</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Placement')}>
                                <Text style={{ textDecorationLine: 'underline', color: 'white', marginTop: 10 }}>See all</Text>
                            </TouchableOpacity>
                        </View> */}
                        {/* <ScrollView horizontal={true}>
                            <View style={{ height: 80, width: 80, borderRadius: 10, margin: 13 }}>
                                <Image source={require('../../../Assets/Image/Gitlab.png')} resizeMode="cover" style={{ height: 80, width: 80 }} />
                            </View>
                            <View style={{ height: 80, width: 80, borderRadius: 10, margin: 13 }}>
                                <Image source={require('../../../Assets/Image/Gooogle.png')} resizeMode="cover" style={{ height: 80, width: 80 }} />
                            </View>
                            <View style={{ height: 80, width: 80, borderRadius: 10, margin: 13 }}>
                                <Image source={require('../../../Assets/Image/Airbnb.png')} resizeMode="cover" style={{ height: 80, width: 80 }} />
                            </View>
                            <View style={{ height: 80, width: 80, borderRadius: 10, margin: 13 }}>
                                <Image source={require('../../../Assets/Image/Microsoft.png')} resizeMode="cover" style={{ height: 80, width: 80 }} />
                            </View>
                        </ScrollView> */}
                    </ScrollView >
                </View>
            </View>
        </SafeAreaView >

    )
}
const styles = StyleSheet.create({
    mainContainer: {
        width: 400,
        backgroundColor: '#28282B',
        justifyContent: "center",
        alignItems: 'center',
    },
    container: {
        justifyContent: "space-between",
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
        height: 25,
        width: 25,
        backgroundColor: 'transparent',
        marginRight: 15,
        marginLeft: 10,
    },
    loginText: {
        marginRight: 35,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f5c849',
    },
    header: {
        height: 140,
        width: 400,
        flexDirection: 'column'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 600,
        color: 'white',
        marginLeft: 13
    },
    card: {
        backgroundColor: '#2d2d2e',
        borderRadius: 10,
        elevation: 5,
        margin: 13,
    },
    image: {
        width: 250,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
        opacity: 0.5
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: 'white',
    },
    cardContainer: {
        height: 400,
        width: 360,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginLeft: 12
    },
    cardImage: {
        height: 400,
        width: 360,
        resizeMode: 'cover',
        opacity: 0.4,
        position: 'absolute'
    },
    mainText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
    },
    txt: {
        color: 'white',
        fontSize: 16,
        fontWeight: 600,
        marginTop: -10
    },
    palate: {
        height: 80,
        width: 360,
        backgroundColor: '#2d2d2e',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
    }
})