import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, Modal, Platform, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Textarea from 'react-native-textarea';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';
import { FlatList } from 'react-native-gesture-handler';


const ClassCancel = ({ navigation }) => {

    const [data, setData] = useState('');
    const [selected, setSelected] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);

    const [arr, setArr] = useState([]);

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [payment, setPayment] = useState(false);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const [nameerror, setNameerror] = useState(false);
    const [lasterror, setLasterror] = useState(false);
    const [phonerror, setPhoneerror] = useState(false);
    const [emailerror, setEmailerror] = useState(false);
    const [locationerror, setLocationerror] = useState(false);
    const [dateerror, setDateerror] = useState(false);
    const [messageerror, setMessageerror] = useState(false);

    const filter = [
        { label: 'Kitchner', value: 'Kitchner' },
        { label: 'Cambridge', value: 'Cambridge' },
        { label: 'Guelph', value: 'Guelph' },
        { label: 'Woodstock', value: 'Woodstock' },
        { label: 'Milton', value: 'Milton' },
        { label: 'Brantford', value: 'Brantford' },
        { label: 'London', value: 'London' },
        { label: 'Burligton', value: 'Burligton' },
        { label: 'Kanata', value: 'Kanata' },
        { label: 'Online Class', value: 'Online Class' },
    ]

    useEffect(()=>{
        // Alert.alert(JSON.stringify(arr));
        console.log(JSON.stringify(arr));
    },[arr]);


    const classcancel = async () => {

        try {

            let hasError = false;

            (!firstname) ? (setNameerror(true), hasError = true) : (setNameerror(false));
            (!lastname) ? (setLasterror(true), hasError = true) : (setLasterror(false));
            (!(phone.length >=10 && phone.length <=12)) ? (setPhoneerror(true), hasError = true) : (setPhoneerror(false));
            (!email) ? (setEmailerror(true), hasError = true) : (setEmailerror(false));
            (!data) ? (setLocationerror(true), hasError = true) : (setLocationerror(false));

            if(selected == true){
                (!(date.toLocaleDateString()===null)) ? (setDateerror(true), hasError = true): (setDateerror(false));
            }

            (!message) ? (setMessageerror(true), hasError = true) : (setMessageerror(false));

            if (!hasError) {
                setModalVisible(true);
                setLoading(true);
                await fetch(`https://www.sales.g9media.ca/mobile_api/request_form`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstname: firstname,
                        lastname: lastname,
                        phone: phone,
                        class_location: location,
                        textarea634: message,
                        Please: arr,
                        cf_956: date,
                        contact_no: ''
                    })
                }).then(response => response.json())
                    .then((json) => {

                        if (json) {
                            console.log("form send successfull");
                            ToastAndroid.show("Your Request Submit Successfully!!", ToastAndroid.LONG);
                        }
                        else {
                            console.log("form not send");
                            ToastAndroid.show("Your Request Not Submit Successfully!!", ToastAndroid.LONG);
                        }
                    })
            }
        }
        catch (error) {
            console.log("error", error);
            setModalVisible(false);
            setLoading(false);
            ToastAndroid.show("invalid form data", ToastAndroid.LONG);
        }
        finally {
            setModalVisible(false);
            setLoading(false)
        }

    }





    return (
        <View style={{ flex: 1, backgroundColor:Platform.OS=='ios'?'#bfbdbd': '#28282B', width: 400, height: 800 }}>
            <View style={{ backgroundColor: '#3d3e40',marginTop:Platform.OS=='ios'?57:'' }}>
                <View style={styles.topview}>
                    <TouchableOpacity onPress={() => navigation.navigate('StudentDanceClass')}>
                        <Image
                            style={{ width: 40, height: 40 }}
                            source={require('../../../Assets/Image/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.maintext}>CLASS REQUEST FORM</Text>
                </View>
            </View>
            <ScrollView >
                <View style={{ flex:Platform.OS=='ios'? 1:1,backgroundColor:Platform.OS=='ios'?'black':'' }}>
                    <Text style={styles.heading}>G9 Request Form</Text>
                    <View>
                        <Text style={styles.inputheading}>Student First Name</Text>
                        <TextInput
                            style={styles.input}
                            value={firstname}
                            onChangeText={(text) => setFirstname(text)}
                        />
                        {nameerror ? <Text style={styles.error}>FirstName field is required.</Text> : null}
                    </View>
                    <View>
                        <Text style={styles.inputheading}>Student Last Name</Text>
                        <TextInput
                            style={styles.input}
                            value={lastname}
                            onChangeText={(text) => setLastname(text)}
                        />
                        {lasterror ? <Text style={styles.error}>LastName field is required.</Text> : null}
                    </View>
                    <View>
                        <Text style={styles.inputheading}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            value={phone}
                            onChangeText={(text) => setPhone(text)}

                        />
                        {phonerror ? <Text style={styles.error}>Phone number field is required.(Number between 10 to 12)</Text> : null}
                    </View>
                    <View>
                        <Text style={styles.inputheading}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={(text) => setEmail(text)}

                        />
                        {emailerror ? <Text style={styles.error}>Email field is required.</Text> : null}
                    </View>
                    <View>
                        <Text style={styles.inputheading}>Class Location</Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={{ fontSize: 12, color: 'white' }}
                            selectedTextStyle={{ fontSize: 12, padding: 5,color:Platform.OS=='ios'?'white':'' }}
                            // inputSearchStyle={{ height: 40, fontSize: 16, backgroundColor: '#3d3e40', }}

                            data={filter}
                            maxHeight={220}

                            labelField="label"
                            valueField="value"
                            placeholder='Select Location...'
                            color='white'

                            value={data}
                            itemContainerStyle={{ backgroundColor: '#3d3e40' }}
                            itemTextStyle={{ color: 'white' }}
                            activeColor="#28282B"
                            onChange={item => { setData(item.label) }}
                        />
                        {locationerror ? <Text style={styles.error}>Location field is required.</Text> : null}
                    </View>
                    <View>
                        <Text style={styles.inputheading}>Please select the most appropriate option : </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={selected}
                                onValueChange={(val) => {setSelected(val);if(val){setArr([...arr,"Quitting Class & Stop Payment"])}else{setArr(arr.filter((item) => item != "Quitting Class & Stop Payment"))} }}
                                style={styles.checkbox}
                            />
                            <Text style={styles.checkboxtext}>Quitting Class & Stop Payment</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={selected2}
                                onValueChange={(val)=>{setSelected2(val);if(val){setArr([...arr,"Pause Payment For Sometime"])}else{setArr(arr.filter((item) => item != "Pause Payment For Sometime"))} }}
                                style={styles.checkbox2}
                            />
                            <Text style={styles.checkboxtext2}>Pause Payment For Sometime</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={selected3}
                                onValueChange={(val)=>{setSelected3(val);if(val){setArr([...arr,"Going On Vacations & Pause Payment"])}else{setArr(arr.filter((item) => item != "Going On Vacations & Pause Payment"))} }}
                                style={styles.checkbox2}
                            />
                            <Text style={styles.checkboxtext2}>Going On Vacations & Pause Payment</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={selected4}
                                onValueChange={(val)=>{setSelected4(val);if(val){setArr([...arr,"None of The Above"])}else{setArr(arr.filter((item) => item != "None of The Above"))} }}
                                style={styles.checkbox2}
                            />
                            <Text style={styles.checkboxtext2}>None of The Above</Text>
                        </View>

                        {
                            selected &&
                            <View>
                                <Text style={styles.inputheading}>Payment Stop Date</Text>
                                <TouchableOpacity style={styles.inputdate} onPress={() => setOpen(true)}>
                                    <Text style={{ marginTop: 10,color:'white' }}>{date.toLocaleDateString()}</Text>
                                </TouchableOpacity>
                                {dateerror ? <Text style={styles.error}>Payment stop date field is required.</Text> : null}
                            </View>
                            //             :
                            // <TouchableOpacity onPress={() => setOpen(true)}>
                            //     <Text style={{ borderWidth: 1, borderColor: 'white', color: 'white', padding: 8, fontSize: 12 }}>{date.toLocaleString()}</Text>
                            // </TouchableOpacity>
                        }

                        <DatePicker
                            modal
                            mode='date'
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />


                    </View>
                    <View>
                        <Text style={styles.inputheading}>Message</Text>
                        <Textarea
                            style={{
                                borderWidth: 1,
                                borderColor: 'grey',
                                width: '90%',
                                marginLeft: 10,
                                borderRadius: 10,
                                textAlignVertical: 'top',
                                padding: 8,
                                height: 150,
                                color:'white'

                            }}
                            value={message}
                            onChangeText={(text) => setMessage(text)}

                        />
                        {messageerror ? <Text style={styles.errormsg}>Message field is required.</Text> : null}


                    </View>

                    <TouchableOpacity onPress={() => classcancel()} style={{ justifyContent: 'center', alignItems: 'center',marginBottom:Platform.OS=='ios'?20:'' }}>
                        <Text style={styles.btnsubmit}>Submit</Text>
                    </TouchableOpacity>





                </View>
            </ScrollView>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(59, 55, 55,0.5)" }}>
                    <ActivityIndicator size="large" color="skyblue" />
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    topview: {
        height: 60,
        width: '100%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    maintext: {
        color: '#f5c849',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 100
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'orange',
        textAlign: 'center',
        padding: 10
    },
    inputheading: {
        color: 'white',
        fontSize: 15,
        padding: 5,
        marginHorizontal: 8,
        marginTop: 15
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '90%',
        height:Platform.OS=='ios'?50:'',
        marginHorizontal: 10,
        borderRadius: 5,
        paddingLeft: 10,
        color:'white'
    },
    dropdown: {
        marginHorizontal: 10,
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        width: '90%',
        paddingLeft: 5,
        borderRadius: 5,
        color:'white'

    },
    inputdate: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '90%',
        height: 50,
        marginHorizontal: 10,
        borderRadius: 5,
        paddingLeft: 10,

    },
    checkbox: {
        marginTop: 8,
        marginLeft: 18,
        color:'white',
        borderColor:'white'
    },
    checkbox2: {
        marginTop: 5,
        marginLeft: 18,
        color:'white'
    },
    checkboxtext: {
        color: 'white',
        fontSize: 15,
        padding: 5,
        marginTop: 8
    },
    checkboxtext2: {
        color: 'white',
        fontSize: 15,
        padding: 5,
        marginTop: 5
    },
    btnsubmit: {
        color: 'black',
        fontSize: 15,
        backgroundColor: 'orange',
        padding: 12,
        textAlign: 'center',
        margin: 10,
        borderRadius: 10,
        width: 150
    },
    error: {
        color: 'red',
        padding: 5,
        marginLeft: 8
    },
    errormsg: {
        color: 'red',
        padding: 5,
        marginLeft: 8,
        bottom:18
    }



});


export default ClassCancel;