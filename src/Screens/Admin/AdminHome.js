import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, FlatList, Alert, Platform, RefreshControl } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({ navigation, route }) {
    const [data, setData] = useState('');
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [cal, setCal] = useState(true);
    const [admindata, setAdmindata] = useState('');
    const [adminclasslist, setAdminclasslist] = useState([]);
    const [insclasslist2, setInsclasslist2] = useState([]);
    const [alllocation, setAlllocation] = useState([]);
    const [allnotification, setAllnotification] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    const filter = [
        { label: 'KITCHENER', value: 'KITCHENER' },
        { label: 'CAMBRIDGE', value: 'CAMBRIDGE' },
        { label: 'LONDON', value: 'LONDON' },
        { label: 'GUELPH', value: 'GUELPH' },
        { label: 'BRANTFORD', value: 'BRANTFORD' },
        { label: 'WOODSTOCK', value: 'WOODSTOCK' },
        { label: 'BURLINGTON', value: 'BURLINGTON' },
        { label: 'MILTON', value: 'MILTON' },
        { label: 'KANATA', value: 'KANATA' },
        { label: 'VAUDREUIL-DORION', value: 'VAUDREUIL-DORION' },
        { label: 'STONEY CREEK', value: 'STONEY CREEK' },
        { label: 'WINDSOR', value: 'WINDSOR' },
    ];


    userInfoData = async ()=>{

        const admindata = await route.params.data;
        await AsyncStorage.setItem("role",admindata.role);
       await AsyncStorage.setItem("id", admindata.user_id);
        console.log(admindata.user_id);
        console.log(admindata.role);
        setAdmindata(admindata);
    }

    useEffect(() => {
        
        userInfoData();
        
        getAdminClassList();
        // getalllocation();
        getallNotification();
    },[] );

    // console.log(admindata.user_id);
    //get admin class list api 
    const getAdminClassList = async () => {
        try {
            const response = await fetch(`https://www.sales.g9media.ca/mobile_api/get_instructor_class`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            setAdminclasslist(json.my_class);
            // setInsclasslist2(json.extra_class);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    //location based search admin class list
    const handleDropdownChange = async (selectedItem) => {
        setData(selectedItem.label);
        try {
            const response = await fetch(`https://www.sales.g9media.ca/mobile_api/get_admin_class?location=${selectedItem.value}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
            const json = await response.json();
            console.log(JSON.stringify(json));
            setAdminclasslist(json.my_class);
            // setInsclasslist2(json.extra_class);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    //get all location
    const getalllocation = async () => {

        try {
            await fetch(`https://www.sales.g9media.ca/mobile_api/get_location`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': "application/json"
                }
            }).then(response => response.json())
                .then(json => {
                    // console.log(JSON.stringify(json));
                    setAlllocation(json);
                })
                .catch(error => console.log("error", error))


        }
        catch (error) {
            console.log("eror", error);
        }

    }
    // console.log("all location: ",alllocation);


    //get all notification
    const getallNotification = async () => {

        try {
            await fetch(`https://www.sales.g9media.ca/mobile_api/total_notification?id=${admindata.user_id}&type=admin`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(json => {
                    // console.log(JSON.stringify(json));
                    setAllnotification(json.total);
                })
                .catch(error => console.log("error ", error))
        }
        catch (error) {
            console.log("eror", error);
        }
    }
    // console.log(allnotification);


    const searchtime = async (time) => {
        try {
            console.log(time);
          const response = await fetch(
            `https://www.sales.g9media.ca/mobile_api/get_admin_class?time=${time}`,
            {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            },
          );
          const json =await response.json();
          console.log(JSON.stringify(json));
          setAdminclasslist(json.my_class);
          
        } catch (eror) {
          console.log('eror', eror);
        }
      };

      const onRefresh = () => {
        setRefreshing(true);
        getAdminClassList();
        getallNotification();
        // Perform any necessary actions to reload data
        // For example, fetch new data from an API
    
        // Simulate an asynchronous task (e.g., fetching data from an API)
        setTimeout(() => {
          // After the task is done, set refreshing to false to stop the loader
          setRefreshing(false);
        }, 2000); // Simulating a delay of 2 seconds
      };



    return (
        <View style={{ flex: 1, backgroundColor: Platform.OS == 'ios' ? '#bfbdbd' : '#28282b' }}>
            <View style={{ backgroundColor: '#3d3e40', marginTop: Platform.OS == 'ios' ? 57 : '' }}>
                <View style={styles.topview}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            style={{ width: 30, height: 30, tintColor: 'orange', marginLeft: 5 }}
                            source={require('../../../Assets/Image/menuicon.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.maintext}>ADMIN</Text>
                    <View>
                        <TouchableOpacity  onPress={()=>navigation.navigate("AdminNotifications",{id: admindata.user_id})}>
                            <Image
                                style={{ width: 28, height: 28, marginRight: 10, top: 5, right: 5 }}
                                source={require('../../../Assets/Image/bell.png')}
                            />
                            <Text style={styles.show}>{allnotification}</Text>
                        </TouchableOpacity>
                    </View>
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
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#28282B' }}>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={{ backgroundColor: '#3d3e40' }}
                        data={filter}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder='Search by Location'
                        value={data}
                        itemContainerStyle={{ backgroundColor: '#3d3e40' }}
                        itemTextStyle={{ color: 'white' }}
                        activeColor="#28282B"
                        onChange={handleDropdownChange}
                    />

                    <TouchableOpacity style={{width:'40%'}} onPress={() => setOpen(true)}>
                        {
                            cal ?
                                <Text style={{ borderWidth: 1, borderColor: 'white', color: 'white', padding: 8, fontSize: 12 }}>Search Time</Text>
                                :
                                <Text style={{ borderWidth: 1, borderColor: 'white', color: 'white', padding: 8, fontSize: 12 }}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>
                        }
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        mode='time'
                        open={open}
                        date={date}
                        onConfirm={async (date) => {
                            setOpen(false)
                            setCal(false)
                            setDate(date)
                            const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); // Format time with AM/PM
                            await searchtime(timeString);
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                <View style={{ backgroundColor: '#28282B', width: '100%' }}>
                   
                    <FlatList
                        data={adminclasslist}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate("AdminClass", { insname: admindata.name, id: admindata.user_id, name: item.classname, location: item.location, time: item.time, type: item.type })}>
                                    <View style={{ width: '95%', backgroundColor: '#3d3e40', margin: 10, borderRadius: 10 }}>
                                        <Text style={{ color: 'orange', fontSize: 18, margin: 10 }}>{item.classname}</Text>
                                        <Text style={{ color: 'white', fontSize: 12, padding: 10 }}>{item.location} {item.time} {item.type}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    maintext: {
        color: '#f5c849',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    dropdown: {
        margin: 5,
        height: 35,
        borderColor: 'white',
        borderWidth: 1,
        width: '50%',
        paddingLeft: 5
    },
    placeholderStyle: {
        fontSize: 12,
        color: 'white'
    },
    selectedTextStyle: {
        fontSize: 12,
        padding: 5,
        color: 'white'
    },
    show: {
        backgroundColor: 'red',
        borderRadius:50,
        width: 20,
        top: -25,
        left: 10,
        textAlign: 'center',
        color: 'white'
    }
});