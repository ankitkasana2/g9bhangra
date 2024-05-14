import React, { useEffect, useState } from 'react';
import { FlatList, Image, Platform, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const AdminNotifications = ({ navigation, route }) => {

    const [adminid, setAdminid] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [backgroundStates, setBackgroundStates] = useState({});
    const [msgid, setMsgid] = useState('');
    const [data,setData]= useState([]);
    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        const id = route.params.id;
        setAdminid(id);
        getnotifications();

    }, [notifications]);
    // console.log(adminid);

    const getnotifications = async () => {

        try {
            await fetch(`https://www.sales.g9media.ca/mobile_api/get_notification?id=${adminid}&type=admin`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(json => {
                    console.log(JSON.stringify(json));
                    setNotifications(json);

                })
                .catch(error => console.log("error", error))
        }
        catch (error) {
            console.log("error", error);
        }

    }


    const notificationread =async()=>{
        try{
           const response= await fetch(`https://www.sales.g9media.ca/mobile_api/message_read`,{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    message_id:msgid,
                    id:adminid
                })
            })
            const result = response.json();
            console.log(JSON.stringify(result));
            setData(result);
            
            // navigation.navigate('AdminMessageRead', {
            //     msg: notifications.find(item => item.message_id === msgid).message
            // });
        }
        catch(error){
            console.log("eror",error);
        }
    }

    const handlePressNotification = (messageId) => {
        setMsgid(messageId);
        setBackgroundStates(preState =>({
            ...preState,
            [messageId]:true
        }))
        notificationread();
        navigation.navigate('AdminMessageRead',{msg : notifications.find(item =>item.message_id === messageId).message});

    }

    const onRefresh = () => {
        setRefreshing(true);
        getnotifications();
        // Perform any necessary actions to reload data
        // For example, fetch new data from an API
    
        // Simulate an asynchronous task (e.g., fetching data from an API)
        setTimeout(() => {
          // After the task is done, set refreshing to false to stop the loader
          setRefreshing(false);
        }, 2000); // Simulating a delay of 2 seconds
      };



    return (
        <View style={{ flex: 1, backgroundColor: Platform.OS=='ios'?'#bfbdbd': 'black' }}>
            <View style={styles.topview}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 40, height: 40,marginTop:8 }}
                        source={require('../../../Assets/Image/back.png')}
                    />
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.headertext}>Notifications</Text>
                </View>

            </View>
            <ScrollView
                style={{ flex: 1 }}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#9Bd35A', 'red', 'blue']}
                
                  />
                }
            >
                <View style={{ flex:Platform.OS=='ios'? 1:1,backgroundColor:Platform.OS=='ios'?'black':'' }}>

                    <FlatList
                    data={notifications}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity
                                onPress={()=>handlePressNotification(item.message_id)}
                                style={[styles.msg, { backgroundColor: backgroundStates[item.read === 1] ? '#1d2f40' : '#5a5b5c' }]}
                                
                                >
                                <View>
                                    <Text style={styles.text}>{item.message}</Text>
                                    <Text style={styles.text2}>By: {item.fromid} Date: {item.date}</Text>
                                   
                                </View>
                            </TouchableOpacity>
                        </View>
                     )}

                /> 

                    
                
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    topview: {
        height: 60,
        width: '100%',        
        backgroundColor: '#232329',
        marginTop:Platform.OS=='ios'?57:''
    },
    headertext: {
        color: '#f5c849',
        fontSize: 20,
        fontWeight: 'bold',       
        marginTop:-40,
        width:'80%',
        textAlign:Platform.OS=='ios'?'': 'center'

    },
    msg: {
        margin: 1,
        padding: 10,
        width: '100%',
        justifyContent: 'center',
    },
    text: {
        color: 'orange',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 8
    },
    text2: {
        color: '#b8bbbf',

    }
})

export default AdminNotifications;

