import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert, Platform, } from 'react-native';




const MessageRead = ({navigation,route}) => {

    const [msg, setMsg] = useState('');
    const [userDetails, setUserDetails] = useState('');
    
   

    useEffect(()=>{
        const message = route.params.msg;
        setMsg(message);
        // const details = route.params.userDetails;
        // setUserDetails(details);
        
        // Alert.alert(message);
    },[]);



    return (

        <View style={{ flex: 1, backgroundColor:Platform.OS=='ios'?'#bfbdbd': 'black' }}>
             <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image
                        style={styles.backImage}
                        source={require('../../../Assets/Image/back1.png')}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                <Text style={styles.maintext}>Message Screen</Text>
                   
                </View>
            </View>
            <View style={{flex:1,backgroundColor:'black'}}>
                <View style={styles.message}>
                    <Text style={styles.text}>{msg}</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 70,
        width: '100%',
        backgroundColor: '#3d3e40',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: Platform.OS === 'ios' ? 57 : 0,

    },
    mainText: {
        color: 'orange',
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 16,
        textAlign: 'center'
    },
    subText: {
        color: 'orange',
        fontSize: 14,
        // fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
        marginRight: 16
    },
    backImage: {
        width: 25,
        height: 25,
        tintColor: 'orange',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        Width: '100%',
    },
    maintext: {
        color: '#f5c849',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 15

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
        fontWeight: '800',
        padding: 8
    }
   

})


export default MessageRead;
