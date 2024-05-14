import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
export default function BuyNow({navigation}) {
    return (
        <View style={{ backgroundColor: '#28282B', width: 400, height: 800 }}>
            <View style={styles.topView}>
                <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Buy Now</Text></TouchableOpacity>
                <TouchableOpacity style={{ position: 'relative' }} onPress={()=>navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
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
            <View style={{height:80,width:400,backgroundColor:'orange',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',marginTop:310}}>
                <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Networking Essentials</Text>
                <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>{'\u20A8'} 3500/-</Text>
                <TouchableOpacity style={{height:40,width:80,backgroundColor:'white',borderRadius:10,justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('BuyNow1')}><Text style={{fontSize:15,color:'#28282B',fontWeight:'bold'}}>Pay Now</Text></TouchableOpacity>
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
})