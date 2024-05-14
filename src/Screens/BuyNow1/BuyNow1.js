import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
export default function BuyNow1({navigation}){
    return (
        <View style={{ backgroundColor: '#28282B', width: 400, height: 800 ,alignItems:'center'}}>
            <View style={styles.topView}>
                <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{'<'}Buy Now</Text></TouchableOpacity>
                <TouchableOpacity style={{ position: 'relative' }} onPress={()=>navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../../../Assets/Image/check.png')} style={{height:160,width:160}}/>
                <Text style={{fontSize:30,fontWeight:800,color:'orange',marginTop:10}}>Thank You</Text>
                <Text style={{fontSize:20,fontWeight:800,color:'white',marginTop:10}}>Successfully Purchased</Text>
            </View>
            <View style={{ backgroundColor: '#2d2d2e', width: 400, height: 300, marginTop: 20, justifyContent: 'space-evenly', alignItems: 'flex-start', padding: 20 }}>
                <Text style={{ fontSize: 17, color: 'white', margin: 5 }}>Course Name</Text>
                <Text style={{ fontSize: 17, color: 'orange', margin: 5 }}>Networking Essentials</Text>
                <View>
                    <View style={{ height: 70, width: 340, borderColor: 'gray', borderTopEndRadius: 5,borderTopLeftRadius:5, borderWidth: 1, marginLeft: 5 ,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{ fontSize: 17, color: 'white', margin: 10 }}>Networking Essentials</Text>
                        <Text style={{ fontSize: 17, color: 'orange', margin: 10 }}>{'\u20A8'} 3500/-</Text>
                    </View>
                    <View style={{ height: 70, width: 340, borderColor: 'gray', borderBottomEndRadius: 5,borderBottomLeftRadius:5, borderWidth: 1, marginLeft: 5 ,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{ fontSize: 17, color: 'white', margin: 10 ,fontWeight:'bold'}}>Total</Text>
                        <Text style={{ fontSize: 17, color: 'orange', margin: 10 }}>{'\u20A8'} 3500/-</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{height:80,width:360,backgroundColor:'orange',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',margin:20,borderRadius:10}} onPress={()=>navigation.navigate('HomeScreen')}>
                <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Home</Text>
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
})