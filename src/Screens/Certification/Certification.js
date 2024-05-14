import React from "react";
import {View ,TouchableOpacity,Image,StyleSheet,Text ,TextInput} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
export default function Certification({navigation}) {
    return (
        <View style={{ backgroundColor: '#28282B', width: 400, height: 800 }}>
            <View style={styles.topView}>
                <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
                <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Certification</Text></TouchableOpacity>
                <TouchableOpacity style={{ position: 'relative' }} onPress={()=>navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
            </View>
            <View>
                <TextInput placeholder="Search" placeholderTextColor='gray' style={{ color: 'white', height: 50, width: 350, borderColor: 'white', borderWidth: 1, borderRadius: 5, paddingLeft: 20, backgroundColor: '#2d2d2e', marginLeft: 20, marginTop: 10 }} />
            </View>
            <View style={{ margin: 20, }}>
                <View style={{ height: 250, width: 350, backgroundColor: '#2d2d2e', alignItems: 'center', justifyContent: 'center',borderRadius:10 }}>
                    <View style={{ height: 170, width: 320, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../Assets/Image/Card-1.jpg')} style={{ height: 170, width: 130 ,borderRadius:10}} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 20, fontWeight: 800, color: 'orange', textAlign: 'left',marginLeft:20 }}>Networking{'\n'}Essentials</Text>
                            <View style={{ flexDirection: 'row' ,marginLeft:20}}>
                                <Image source={require('../../../Assets/Image/clock.png')} style={{height:18,width:18,marginTop:7}}/><Text style={{ color: 'white', marginLeft: 10, marginTop: 5 }}>2 Months</Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginLeft:20 }}>
                                <Image source={require('../../../Assets/Image/calendar.png')} style={{height:18,width:18,marginTop:7}}/><Text style={{ color: 'white', marginLeft: 10, marginTop: 5 }}>Starting From 17th July</Text>
                            </View>
                            <View style={{ flexDirection: 'row',alignItems:'flex-end' }}>
                                <View style={{height:40,width:40,backgroundColor:'white',marginLeft:20,borderRadius:50,marginTop:10,borderWidth:2,borderColor:'black'}}><Image source={require('../../../Assets/Image/P-5.jpg')} style={{height:'100%',width:'100%',borderRadius:50}}/></View>
                                <View style={{height:40,width:40,backgroundColor:'white',marginLeft:20,borderRadius:50,marginTop:10,marginLeft:-20,borderWidth:2,borderColor:'black'}}><Image source={require('../../../Assets/Image/P-4.jpg')} style={{height:'100%',width:'100%',borderRadius:50}}/></View>
                                <View style={{height:40,width:40,backgroundColor:'white',marginLeft:20,borderRadius:50,marginTop:10,marginLeft:-20,borderWidth:2,borderColor:'black'}}><Image source={require('../../../Assets/Image/P-3.jpg')} style={{height:'100%',width:'100%',borderRadius:50}}/></View>
                                <Text style={{fontsize:20,fontWeight:'bold',color:'white',marginLeft:20}}>See Details</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height:40,width:300,borderColor:'white',borderWidth:1,marginTop:15,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'gray'}}>Download Certification</Text>
                    </View>
                </View>
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