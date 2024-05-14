import CheckBox from '@react-native-community/checkbox';
import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, TextInput, Alert, ToastAndroid, ActivityIndicator, Modal, Platform } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

export default function SignUp({ navigation }) {

    const [data, setData] = useState('');
    const [registration, setRegistration] = useState('');
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date(null));
    const [cal, setCal] = useState(true);
    const [type, setType] = useState('');
    const [dance, setDance] = useState('');
    const [classtime, setClasstime] = useState('');
    const [open2, setOpen2] = useState(false);
    const [sdate, setSDate] = useState(new Date());
    const [cal2, setCal2] = useState(true);

    const [selected, setSelected] = useState(false);
    const [selected2, setSelected2] = useState(false);

    const [username, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [contact, setContact] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [alternative, setAlternative] = useState('');
    const [contactpay, setContactpay] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postal, setPostal] = useState('');
    const [code, setCode] = useState('');
    const [transit, setTransit] = useState('');
    const [institution, setInstitution] = useState('');
    const [account, setAccount] = useState('');

    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [locationerror, setLocationerror] = useState(false);
    const [registratinerror, setRegistrationerror] = useState(false);
    const [nameerror, setNameerror] = useState(false);
    const [lastnameerror, setLastnameerror] = useState(false);
    const [doberror, setDoberror] = useState(false);
    const [classtypeerror, setClasstypeerror] = useState(false);
    const [danceerror, setDanceerror] = useState(false);
    const [startingdateerror, setStartingdateerror] = useState(false);
    const [contacterror, setContacterror] = useState(false);
    const [whatserror, setWhatserror] = useState(false);
    const [alternativeerror, setAlternativeerror] = useState(false);
    const [emailerror, setEmailerror] = useState(false);
    const [classtimeerror, setClasstimeerror] = useState(false);
    const [addresserror, setAddresserror] = useState(false);
    const [cityerror, setCityeror] = useState(false);
    const [postalerror, setPostalerror] = useState(false);
    const [contactpayerror, setContactpayerror] = useState(false);
    const [codeerror, setCodeerror] = useState(false);
    const [transiterror, setTransiterror] = useState(false);
    const [institutionerror, setInstitutionerror] = useState(false);
    const [accounterror, setAccounterror] = useState(false);

    const [errors, setErrors] = useState([]);


    // const formvalidation = ()=>{
    //     let  errors = [];

    //     if(!data){
    //         errors.data = "lcation field is required";
    //     }

    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // }

    const register = async () => {

        try {
            // Alert.alert(JSON.stringify(date))
            // return;
            let hasError = false;

            (!data) ? (setLocationerror(true), hasError = true) : setLocationerror(false);
            (!registration) ? (setRegistrationerror(true), hasError = true) : setRegistrationerror(false);
            (!username.trim()) ? (setNameerror(true), hasError = true) : setNameerror(false);
            (!lastname) ? (setLastnameerror(true), hasError = true) : setLastnameerror(false);
            (!(date.toLocaleDateString() === null)) ? (setDoberror(true), hasError = true) : setDoberror(false);
            (!type) ? (setClasstypeerror(true), hasError = true) : setClasstypeerror(false);
            (!dance) ? (setDanceerror(true), hasError = true) : setDanceerror(false);
            (!(sdate.toLocaleDateString() === null)) ? (setStartingdateerror(true), hasError = true) : setStartingdateerror(false);
            (!(contact.length >= 10 && contact.length <= 12)) ? (setContacterror(true), hasError = true) : setContacterror(false);
            (!(whatsapp.length >= 10 && whatsapp.length <= 12)) ? (setWhatserror(true), hasError = true) : setWhatserror(false);
            (!(alternative.length >= 10 && alternative.length <= 12)) ? (setAlternativeerror(true), hasError = true) : setAlternativeerror(false);
            (!email) ? (setEmailerror(true), hasError = true) : setEmailerror(false);
            (!classtime) ? (setClasstimeerror(true), hasError = true) : setClasstimeerror(false);
            (!address) ? (setAddresserror(true), hasError = true) : setAddresserror(false);
            (!city) ? (setCityeror(true), hasError = true) : setCityeror(false);
            (!postal) ? (setPostalerror(true), hasError = true) : setPostalerror(false);

            if (selected2 === true) {
                (!code) ? (setCodeerror(true), hasError = true) : setCodeerror(false);

            }

            if (selected === true) {
                (!contactpay) ? (setContactpayerror(true), hasError = true) : setContactpayerror(false);
            }
            else {
                (!transit || transit.length < 5) ? (setTransiterror(true), hasError = true) : setTransiterror(false);
                (!institution || institution.length < 3) ? (setInstitutionerror(true), hasError = true) : setInstitutionerror(false);
                (!(account.length >= 7 && account.length <= 12)) ? (setAccounterror(true), hasError = true) : setAccounterror(false);

            }



            if (!hasError) {
                setModalVisible(true);
                setLoading(true);
                await fetch(`https://g9bhangra.ca/api/register`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Location: location,
                        members_registrations: registration,
                        "first-name": username,
                        "last-name": lastname,
                        "date-897": date,
                        ClassType: type,
                        dance_form: dance,
                        "date-899": sdate,
                        "tel-813": contact,
                        "tel-814": whatsapp,
                        "tel-391": alternative,
                        "email-38": email,
                        Kitchener: classtime,
                        address: address,
                        city: city,
                        Postal: postal,
                        "member_name": contactpay,
                        "checkbox-580": code,
                        Transit: transit,
                        Institution: institution,
                        Bank: account,

                    }),

                }).then(response => response.text())
                    .then(json => {
                        // console.log(JSON.stringify(json));
                        if (json) {
                            console.log("register successfull");
                            ToastAndroid.show('Your are register successfull!', ToastAndroid.LONG);
                            Toast.show({
                                type: 'success',
                                text1: 'Your are register successfull!',
                                visibilityTime: 3000,
                                autoHide: true,
                                position: 'bottom',
                                style: {
                                    backgroundColor: '#000000',
                                    borderRadius: 10,
                                    padding: 10,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '90%',
                                    height: 100,
                                },
                                textStyle: {
                                    color: '#FFFFFF',
                                },
                            });
                            navigation.navigate('Login')
                        }
                        else {
                            console.log("not register");
                            ToastAndroid.show('Your are not register! please try again', ToastAndroid.LONG);
                            Toast.show({
                                type: 'success',
                                text1: 'Your are not register! please try again',
                                visibilityTime: 3000,
                                autoHide: true,
                                position: 'bottom',
                                style: {
                                    backgroundColor: '#000000',
                                    borderRadius: 10,
                                    padding: 10,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '90%',
                                    height: 100,
                                },
                                textStyle: {
                                    color: '#FFFFFF',
                                },
                            });
                        }
                    })
            }


        }
        catch (error) {
            console.error(error);
            console.log("not register");
            setModalVisible(false);
            setLoading(false)
            ToastAndroid.show('Your are not register! please try again', ToastAndroid.LONG);
            Toast.show({
                type: 'success',
                text1: 'Your are not register! please try again',
                visibilityTime: 3000,
                autoHide: true,
                position: 'bottom',
                style: {
                    backgroundColor: '#000000',
                    borderRadius: 10,
                    padding: 10,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90%',
                    height: 100,
                },
                textStyle: {
                    color: '#FFFFFF',
                },
            });
        }
        finally {
            setModalVisible(false);
            setLoading(false);
        }




    }



    const location = [

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

    const numberReg = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
    ];

    const classtype = [
        { label: 'Kids', value: 'Kids' },
        { label: 'Adults', value: 'Adults' },
        { label: 'Toddler', value: 'Toddler' },
    ];

    const danceform = [
        { label: 'Bhangra', value: 'Bhangra' },
        { label: 'Giddha', value: 'Giddha' },
        { label: 'Bhangra & Giddha', value: 'Bhangra & Giddha' },
        { label: 'Bollywood', value: 'Bollywood' },
        { label: 'Classical', value: 'Classical' },
        { label: 'Zumba', value: 'Zumba' },
    ];

    const ctime = [
        { label: '5 PM', value: '5 PM' },
        { label: '9 PM', value: '9 PM' },
        { label: '6 PM', value: '6 PM' },
        { label: '3 PM', value: '3 PM' },
        { label: '8 PM', value: '8 PM' },
    ]



    return (

        <View>


            <View style={{ backgroundColor: '#fff' }}>
                <View style={styles.headerContainer}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: 'orange',
                            }}
                            source={require('../../../Assets/Image/back1.png')}
                        />
                    </TouchableOpacity>
                    <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={styles.headertext}>Sign Up </Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: 'black' }}>
                <View style={{ paddingVertical: 15, marginLeft: 15 }}>
                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Please Create Your Account</Text>

                </View>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>




                        {/* <View style={{ height: 50, width: 320, marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}> */}
                        {/* <Image source={require('../../../Assets/Image/name3.png')} style={{ height: 50, width: 35, marginLeft: 10 }} /> */}
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            // inputSearchStyle={styles.inputSearchStyle}

                            data={location}
                            // search
                            maxHeight={200}

                            labelField="label"
                            valueField="value"
                            placeholder='Class Location'
                            // searchPlaceholder="Search..."

                            value={data}
                            itemContainerStyle={{ backgroundColor: '#403e3e', }}
                            itemTextStyle={{ color: 'white', marginLeft: 8 }}
                            activeColor="#28282B"
                            onChange={item => { setData(item.label) }}
                            padding={8}


                        />
                        {/* </View> */}
                        {locationerror ? <Text style={styles.error}>Location field is required</Text> : null}

                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            // inputSearchStyle={styles.inputSearchStyle}

                            data={numberReg}
                            // search
                            maxHeight={200}

                            labelField="label"
                            valueField="value"
                            placeholder='Number of Registration'
                            // searchPlaceholder="Search..."

                            value={registration}
                            itemContainerStyle={{ backgroundColor: '#403e3e' }}
                            itemTextStyle={{ color: 'white' }}
                            activeColor="#28282B"
                            onChange={item => { setRegistration(item.label) }}


                        />
                        {registratinerror ? <Text style={styles.error}>Register field is required</Text> : null}


                        <View style={{ height: 50, width: '92%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../../Assets/Image/name3.png')} style={{ height: 50, width: 35, marginLeft: 10 }} />
                            <TextInput
                                placeholder="Full Name"
                                placeholderTextColor={'gray'}
                                style={{ paddingLeft: 20, color: 'white' }}
                                value={username}
                                onChangeText={(text) => setName(text)}

                            />
                        </View>
                        {nameerror ? <Text style={styles.error}>name field is required</Text> : null}
                        <View style={{ height: 50, width: '92%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../../Assets/Image/name3.png')} style={{ height: 50, width: 35, marginLeft: 10 }} />
                            <TextInput
                                placeholder="Last Name"
                                placeholderTextColor={'gray'}
                                style={{ paddingLeft: 20, color: 'white' }}
                                value={lastname}
                                onChangeText={(last) => setLastname(last)}

                            />
                        </View>
                        {lastnameerror ? <Text style={styles.error}>lastname field is required</Text> : null}
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <View style={{ height: 50, width: 360, marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                <Image source={require('../../../Assets/Image/name3.png')} style={{ height: 50, width: 35, marginLeft: 10 }} />

                                {
                                    cal ?
                                        <Text style={{ color: 'grey', paddingLeft: 20 }}>Date of Birth</Text>
                                        :
                                        <Text style={{ color: 'grey', paddingLeft: 20 }}>{date.toLocaleDateString()}</Text>
                                }
                            </View>
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            mode='date'
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setCal(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}

                        />
                        {doberror ? <Text style={styles.error}>DOB field is required</Text> : null}

                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            // inputSearchStyle={styles.inputSearchStyle}

                            data={classtype}
                            // search
                            maxHeight={200}

                            labelField="label"
                            valueField="value"
                            placeholder='Class Type'
                            // searchPlaceholder="Search..."

                            value={type}
                            itemContainerStyle={{ backgroundColor: '#403e3e' }}
                            itemTextStyle={{ color: 'white' }}
                            activeColor="#28282B"
                            onChange={item => { setType(item.label) }}


                        />
                        {classtypeerror ? <Text style={styles.error}>Class type field is required</Text> : null}
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            // inputSearchStyle={styles.inputSearchStyle}

                            data={danceform}
                            // search
                            maxHeight={200}

                            labelField="label"
                            valueField="value"
                            placeholder='Dance Form'
                            // searchPlaceholder="Search..."

                            value={dance}
                            itemContainerStyle={{ backgroundColor: '#403e3e' }}
                            itemTextStyle={{ color: 'white' }}
                            activeColor="#28282B"
                            onChange={item => { setDance(item.label) }}


                        />
                        {danceerror ? <Text style={styles.error}>dance form field is required</Text> : null}
                        <TouchableOpacity onPress={() => setOpen2(true)}>
                            <View style={{ height: 50, width: 360, marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                <Image source={require('../../../Assets/Image/name3.png')} style={{ height: 50, width: 35, marginLeft: 10 }} />

                                {
                                    cal2 ?
                                        <Text style={{ color: 'grey', paddingLeft: 20 }}>Starting Date</Text>
                                        :
                                        <Text style={{ color: 'grey', paddingLeft: 20 }}>{sdate.toLocaleDateString()}</Text>
                                }
                            </View>
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            mode='date'
                            open={open2}
                            date={sdate}
                            onConfirm={(date) => {
                                setOpen2(false)
                                setCal2(false)
                                setSDate(date)
                            }}
                            onCancel={() => {
                                setOpen2(false)
                            }}

                        />
                        {startingdateerror ? <Text style={styles.error}>date field is required</Text> : null}



                        <View style={{ height: 50, width: '92%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../../Assets/Image/contact3.png')} style={{ height: 40, width: 35, marginLeft: 10 }} />
                            <TextInput
                                placeholder="Contact Number"
                                placeholderTextColor={'gray'}
                                keyboardType='number-pad'
                                style={{ paddingLeft: 20, color: 'white' }}
                                value={contact}
                                onChangeText={(con) => setContact(con)}

                            />
                        </View>
                        {contacterror ? <Text style={styles.error}>field is required (length min 10 & max 12)</Text> : null}
                        <View style={{ height: 50, width: '92%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../../Assets/Image/contact3.png')} style={{ height: 40, width: 35, marginLeft: 10 }} />
                            <TextInput
                                placeholder="WhatsApp Contact Number"
                                placeholderTextColor={'gray'}
                                keyboardType='number-pad'
                                style={{ paddingLeft: 20, color: 'white' }}
                                value={whatsapp}
                                onChangeText={(whats) => setWhatsapp(whats)}

                            />
                        </View>
                        {whatserror ? <Text style={styles.error}>field is required (length min 10 & max 12)</Text> : null}
                        <View style={{ height: 50, width: '92%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../../Assets/Image/contact3.png')} style={{ height: 40, width: 35, marginLeft: 10 }} />
                            <TextInput
                                placeholder="Alternative Contact Number"
                                placeholderTextColor={'gray'}

                                keyboardType='number-pad'
                                style={{ paddingLeft: 20, color: 'white' }}
                                value={alternative}
                                onChangeText={(alt) => setAlternative(alt)}

                            />
                        </View>
                        {alternativeerror ? <Text style={styles.error}>field is required (length min 10 & max 12)</Text> : null}
                        <View style={{ height: 50, width: '92%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../../Assets/Image/email3.png')} style={{ height: 50, width: 35, marginLeft: 10 }} />
                            <TextInput
                                placeholder="Email or UserName"
                                placeholderTextColor={'gray'}
                                keyboardType='email-address'
                                style={{ paddingLeft: 20, color: 'white' }}
                                value={email}
                                onChangeText={(mail) => setEmail(mail)}

                            />
                        </View>
                        {emailerror ? <Text style={styles.error}>email field is required</Text> : null}
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            // inputSearchStyle={styles.inputSearchStyle}

                            data={ctime}
                            // search
                            maxHeight={200}

                            labelField="label"
                            valueField="value"
                            placeholder='Class Time'
                            // searchPlaceholder="Search..."

                            value={classtime}
                            itemContainerStyle={{ backgroundColor: '#403e3e' }}
                            itemTextStyle={{ color: 'white' }}
                            activeColor="#28282B"
                            onChange={item => { setClasstime(item.label) }}


                        />
                        {classtimeerror ? <Text style={styles.error}>class time field is required</Text> : null}


                        <View style={{ height: 50, width: '92%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../../Assets/Image/address3.png')} style={{ height: 45, width: 35, marginLeft: 10 }} />
                            <TextInput
                                placeholder="Street Address"
                                placeholderTextColor={'gray'}
                                style={{ paddingLeft: 20, color: 'white' }}
                                value={address}
                                onChangeText={(add) => setAddress(add)}

                            />
                        </View>
                        {addresserror ? <Text style={styles.error}>address field is required</Text> : null}
                        <View style={{ height: 50, width: '92%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../../Assets/Image/address3.png')} style={{ height: 45, width: 35, marginLeft: 10 }} />
                            <TextInput
                                placeholder="City"
                                placeholderTextColor={'gray'}
                                style={{ paddingLeft: 20, color: 'white' }}
                                value={city}
                                onChangeText={(c) => setCity(c)}

                            />
                        </View>
                        {cityerror ? <Text style={styles.error}>city field is required</Text> : null}
                        <View style={{ height: 50, width: '92%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../../Assets/Image/address3.png')} style={{ height: 45, width: 35, marginLeft: 10 }} />
                            <TextInput
                                placeholder="Postal Code"
                                placeholderTextColor={'gray'}
                                keyboardType='number-pad'
                                style={{ paddingLeft: 20, color: 'white' }}
                                value={postal}
                                onChangeText={(post) => setPostal(post)}


                            />
                        </View>
                        {postalerror ? <Text style={styles.error}>postal code field is required</Text> : null}
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 5, color: Platform.OS == 'ios' ? '#d4d6d4' : '', alignSelf: 'flex-start', marginLeft: 12 }}>Payment Info</Text>
                            <Text style={{ padding: 5, color: Platform.OS == 'ios' ? '#d4d6d4' : '', alignSelf: 'flex-start', marginLeft: 12 }}>Click to read Payment Terms & Conditions</Text>

                            <View>
                                <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                    <CheckBox
                                        value={selected}
                                        onValueChange={(val) => setSelected(val)}
                                        style={styles.checkbox}
                                    />
                                    <Text style={styles.checkboxtext}>Previously Provided on other family member's{"\n"} registration form, Do not check this checkbox if{"\n"} you are providing new payment info.</Text>
                                </View>

                                {
                                    selected ?
                                        <View>

                                            <View style={{ height: 50, width: '84%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                                {/* <Image source={require('../../../Assets/Image/address3.png')} style={{ height: 45, width: 35, marginLeft: 10 }} /> */}
                                                <TextInput
                                                    placeholder="Enter the 10 digit phone number"
                                                    keyboardType='number-pad'
                                                    placeholderTextColor={'gray'}
                                                    style={{ paddingLeft: 20, color: 'white' }}
                                                    value={contactpay}
                                                    onChangeText={(con) => setContactpay(con)}

                                                />
                                            </View>
                                            {contactpayerror ? <Text style={styles.error}>contact field is required</Text> : null}
                                        </View>
                                        : ('')

                                }
                            </View>


                            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 15 }}>
                                <CheckBox
                                    value={selected2}
                                    onValueChange={(val) => setSelected2(val)}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.checkboxtext}>Payment Not Required only if approved by{"\n"} G9 Bhangra Academy</Text>
                            </View>

                            {
                                selected2 ?
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <View style={{ height: 50, width: '100%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                            {/* <Image source={require('../../../Assets/Image/address3.png')} style={{ height: 45, width: 35, marginLeft: 10 }} /> */}
                                            <TextInput
                                                placeholder="Enter Code"
                                                keyboardType='number-pad'
                                                placeholderTextColor={'gray'}
                                                style={{ color: 'white', width: '92%', padding: 8 }}
                                                value={code}
                                                onChangeText={(code) => setCode(code)}

                                            />
                                        </View>
                                        {codeerror ? <Text style={styles.error}>code field is required</Text> : null}
                                    </View>

                                    : ('')

                            }



                            {
                                selected ?
                                    ('')
                                    :
                                    <View>
                                        <View style={{ height: 50, width: '100%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                            <Image source={require('../../../Assets/Image/address3.png')} style={{ height: 45, width: 35, marginLeft: 10 }} />
                                            <TextInput
                                                placeholder="Bank Transit (5 digits)"
                                                keyboardType='number-pad'
                                                maxLength={5}
                                                placeholderTextColor={'gray'}
                                                style={{ paddingLeft: 20, color: 'white', width: '80%', alignSelf: 'center' }}
                                                value={transit}
                                                onChangeText={(tran) => setTransit(tran)}

                                            />
                                        </View>
                                        {transiterror ? <Text style={styles.error}>Bank transit field is required (5 digits)</Text> : null}
                                        <View style={{ height: 50, width: '100%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                            <Image source={require('../../../Assets/Image/address3.png')} style={{ height: 45, width: 35, marginLeft: 10 }} />
                                            <TextInput
                                                placeholder="Bank Institution (3 digits)"
                                                keyboardType='number-pad'
                                                maxLength={3}
                                                placeholderTextColor={'gray'}
                                                style={{ paddingLeft: 20, color: 'white', width: '80%', alignSelf: 'center' }}
                                                value={institution}
                                                onChangeText={(inst) => setInstitution(inst)}

                                            />
                                        </View>
                                        {institutionerror ? <Text style={styles.error}>Bank institution field is required (3 digits)</Text> : null}
                                        <View style={{ height: 50, width: '100%', marginTop: 20, marginBottom: 10, borderColor: 'orange', borderWidth: 1.5, borderRadius: 5, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                            <Image source={require('../../../Assets/Image/address3.png')} style={{ height: 45, width: 35, marginLeft: 10 }} />
                                            <TextInput
                                                placeholder="Bank Account (7 to 12 digits)"
                                                keyboardType='number-pad'
                                                placeholderTextColor={'gray'}
                                                style={{ paddingLeft: 20, color: 'white', width: '80%', alignSelf: 'center' }}
                                                value={account}
                                                onChangeText={(act) => setAccount(act)}

                                            />
                                        </View>
                                        {accounterror ? <Text style={styles.error}>Bank account field is required (digits between 7-12)</Text> : null}
                                    </View>
                            }

                        </View>




                    </View>
                    <TouchableOpacity onPress={() => register()} style={{ height: 50, width: '92%', backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', margin: 15, borderRadius: 10, alignSelf: 'center' }} >
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Create Account</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', marginBottom: Platform.OS == 'ios' ? 20 : 10, marginLeft: Platform.OS == 'ios' ? 20 : 13, alignSelf: 'center', marginBottom:250 }}>Do you have an Account ? <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{ color: 'orange', fontWeight: 'bold' }}>Sign in</Text></TouchableOpacity></Text>
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
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        width: '100%',
        backgroundColor: '#3d3e40',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: Platform.OS === 'ios' ? 57 : 0,
    },
    headertext: {
        color: '#f5c849',
        fontSize: 18,
        fontWeight: 'bold'
    },
    img: {
        height: 40,
        width: 40
    },
    dropdown: {

        height: 50,
        borderColor: 'orange',
        borderWidth: 1.5,
        width: Platform.OS == 'ios' ? '92%' : '92%',
        paddingLeft: 5,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 8,
        alignSelf: 'center',
        paddingHorizontal: 20

    },
    placeholderStyle: {
        fontSize: 12,
        color: 'white'
    },
    selectedTextStyle: {
        fontSize: 12,
        padding: 12,
        color: 'white'
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        backgroundColor: '#3d3e40',

    },
    checkbox: {
        marginTop: 8,
        alignSelf: 'flex-start', marginLeft: 18
    },
    checkboxtext: {
        color: Platform.OS == 'ios' ? '#d4d6d4' : 'white',
        fontSize: 13,
        padding: 3,
        marginRight: 5,
        textAlign: 'left',
        padding: 8

    },
    error: {
        color: 'red',
    }


})
