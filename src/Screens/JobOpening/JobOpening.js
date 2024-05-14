import React from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,ScrollView} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
export default function JobOpening({navigation}) {
    return(
        <ScrollView>
        <View style={{ backgroundColor: '#28282B', width: 400, height: 800, }}>
            <View style={styles.topView}>
                <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Job Openings</Text></TouchableOpacity>
                <TouchableOpacity style={{ position: 'relative' }} onPress={()=>navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
            </View>
            <View style={styles.switch}>
                <TouchableOpacity style={{ height: 25, width: 125, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }} onPress={()=>navigation.navigate('Placement')}><Text style={{color:'white'}}>Placements</Text></TouchableOpacity>
                <TouchableOpacity style={{ height: 22, width: 120, marginRight:3,backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}><Text style={{color:'black'}}>Job Openings</Text></TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ height: 200, width: 160, backgroundColor: '#2d2d2e', margin: 15, borderRadius: 10 }}>
                    <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', height: 100, width: 160}}>
                            <Image source={require('../../../Assets/Image/Gooogle.png')} style={{height:80,width:80,resizeMode:'stretch',borderRadius:50}}/>
                        </View>
                        <View style={{justifyContent:'space-evenly',alignItems:'center',}}>
                        <Text style={{color:'white' ,fontSize:16,margin:10}}>UI/UX Designer</Text>
                        <Text style={{color:'white',marginTop:10,fontSize:13}}>Company</Text>
                        <Text style={{color:'orange',fontSize:13}}>Google</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 200, width: 160, backgroundColor: '#2d2d2e', margin: 15, borderRadius: 10 }}>
                <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', height: 100, width: 160}}>
                            <Image source={require('../../../Assets/Image/Airbnb.png')} style={{height:80,width:80,resizeMode:'stretch',borderRadius:50}}/>
                        </View>
                        <View style={{justifyContent:'space-evenly',alignItems:'center',}}>
                        <Text style={{color:'white' ,fontSize:16,margin:10}}>UI/UX Designer</Text>
                        <Text style={{color:'white',marginTop:10,fontSize:13}}>Company</Text>
                        <Text style={{color:'orange',fontSize:13}}>Google</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ height: 200, width: 160, backgroundColor: '#2d2d2e', margin: 15, borderRadius: 10 }}>
                <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', height: 100, width: 160}}>
                            
                            <Image source={require('../../../Assets/Image/Gitlab.png')} style={{height:80,width:80,resizeMode:'stretch',borderRadius:50}}/>
                        </View>
                        <View style={{justifyContent:'space-evenly',alignItems:'center',}}>
                        <Text style={{color:'white' ,fontSize:16,margin:10}}>UI/UX Designer</Text>
                        <Text style={{color:'white',marginTop:10,fontSize:13}}>Company</Text>
                        <Text style={{color:'orange',fontSize:13}}>Google</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 200, width: 160, backgroundColor: '#2d2d2e', margin: 15, borderRadius: 10 }}>
                <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', height: 100, width: 160}}>
                            <Image source={require('../../../Assets/Image/Microsoft.png')} style={{height:80,width:80,resizeMode:'stretch',borderRadius:50}}/>
                        </View>
                        <View style={{justifyContent:'space-evenly',alignItems:'center',}}>
                        <Text style={{color:'white' ,fontSize:16,margin:10}}>UI/UX Designer</Text>
                        <Text style={{color:'white',marginTop:10,fontSize:13}}>Company</Text>
                        <Text style={{color:'orange',fontSize:13}}>Google</Text>
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