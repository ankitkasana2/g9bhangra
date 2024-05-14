import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default function AccountCreated({navigation}) {
    return (
        <View style={{ backgroundColor: '#28282B', width: 400, height: 800, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Image source={require('../../../Assets/Image/back.png')} style={styles.img} />
                </TouchableOpacity>
                
            </View>
            <View style={{ width: 400, paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontSize: 25, color: 'white' }}>Sign Up</Text>
            </View>
            <View style={{ height: 300, width: 400, paddingLeft: 20, paddingRight: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../Assets/Image/add-friend.png')} style={{ height: 150, width: 150 }} />
                <Text style={{ color: 'orange', marginTop: 20, fontWeight: 'bold' }}>Account Created</Text>
                <Text style={{ color: 'white', marginTop: 20, lineHeight: 20 }}>Please Check Your Mail For{'\n'}    Username & Password.</Text>
            </View>
            <TouchableOpacity style={{ height: 60, width: 360, backgroundColor: 'orange', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', margin: 20, borderRadius: 10 }} onPress={()=>navigation.navigate('Login')}>
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Log in</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    topView: {
        height: 50,
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    img: {
        height: 40,
        width: 40
    }
})
