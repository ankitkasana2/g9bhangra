import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';


export default function UploadVideo({ navigation }) {

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [cal, setCal] = useState(true);




    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={styles.topview}>
                <TouchableOpacity onPress={() => navigation.navigate('DanceClass')}>
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={require('../../../Assets/Image/back.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.maintext}>Upload Video</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#28282B' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            borderColor: 'orange',
                            width: '90%',
                            padding: 10,
                            borderRadius: 10,
                            fontSize: 15,
                            margin: 10

                        }}
                        placeholder='Name'


                    />
                   
                    <TouchableOpacity onPress={() => setOpen(true)} style={{ width: '100%', marginLeft: 12 }}>
                        {
                            cal ?
                                <Text style={{ borderWidth: 1, borderColor: 'orange', width: '90%', padding: 12, borderRadius: 10, fontSize: 15, margin: 10 }}>Date & Time</Text>
                                :
                                <Text style={{ borderWidth: 1, borderColor: 'orange', width: '90%', padding: 12, borderRadius: 10, fontSize: 15, margin: 10 }}>{date.toLocaleString()}</Text>

                        }
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        mode='datetime'
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

                </View>

                <Text style={{ marginLeft: 25, fontSize: 15, padding: 5 }}>Upload video :</Text>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 25 }}>
                    <TouchableOpacity>
                        <Text style={styles.btnupload}>Upload Video</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>

                    <TouchableOpacity>
                        <Text style={styles.btnsubmit}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topview: {
        height: 60,
        width: '100%',
        backgroundColor: '#3d3e40',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    maintext: {
        color: '#f5c849',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 135
    },
    btnupload: {
        color: 'black',
        fontSize: 15,
        backgroundColor: 'orange',
        padding: 10,
        textAlign: 'center',
        margin: 5,
        borderRadius: 10
    },
    btnsubmit: {
        color: 'black',
        fontSize: 15,
        backgroundColor: 'orange',
        padding: 12,
        textAlign: 'center',
        margin: 5,
        borderRadius: 10,
        width:150
    }

})