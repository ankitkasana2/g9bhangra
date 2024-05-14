import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert, Platform, } from 'react-native';




const AdminMessageRead = ({ navigation, route }) => {

    const [msg, setMsg] = useState('');

    useEffect(() => {
        const message = route.params.msg;
        setMsg(message);
        // Alert.alert(message);
    }, []);



    return (

        <View style={{ flex: 1, backgroundColor: Platform.OS == 'ios' ? '#bfbdbd' : 'black' }}>
            <View style={styles.topview}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 40, height: 40,marginTop:8 }}
                        source={require('../../../Assets/Image/back.png')}
                    />
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.maintext}>Message</Text>
                </View>

            </View>
            <View style={{ flex: Platform.OS == 'ios' ? 1 : 1, backgroundColor: Platform.OS == 'ios' ? 'black' : '' }}>
                <View style={styles.message}>
                    <Text style={styles.text}>{msg}</Text>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    topview: {
        height: 60,
        width: '100%',        
        backgroundColor: '#232329',
        marginTop: Platform.OS == 'ios' ? 57 : ''
    },
    maintext: {
        color: '#f5c849',
        fontSize: 18,
        fontWeight: 'bold',        
        marginTop:-40,
        width:'80%',
        textAlign:Platform.OS=='ios'?'': 'center'

    },
    message: {
        backgroundColor: '#1d2f40',
        margin: 2,
        padding: 10,
        width: '100%',
        justifyContent: 'center',

    },
    text: {
        color: 'orange',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 8,

    }


})


export default AdminMessageRead;
