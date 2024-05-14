import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';



export default function ViewList({ navigation }) {

    const tabalehead = ["Name", "Status", "Confirm"];
    const tabledata = [
        ["Image", "Active", "yes"],
        ["React", "Active", "Yes"],
        ["Java", "Active", "yes"],
        ["Js", "InActive", "no"],
        ["Angular", "Active", "Yes"],
        ["Image", "Active", "yes"],
        ["React", "Active", "Yes"],
        ["Java", "Active", "yes"],
        ["Js", "InActive", "no"],
        ["Angular", "Active", "Yes"],
        ["Image", "Active", "yes"],
        ["React", "Active", "Yes"],
        ["Java", "Active", "yes"],
        ["Angular", "Active", "Yes"],
        ["Js", "InActive", "no"],
        ["React", "Active", "Yes"],
        ["Java", "Active", "yes"],
        ["Angular", "Active", "Yes"],
        ["Js", "InActive", "no"],
        ["React", "Active", "Yes"],
        ["Java", "Active", "yes"],
        ["Angular", "Active", "Yes"],
        ["Js", "InActive", "no"],
    ]






    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ backgroundColor: '#3d3e40' }}>
                <View style={styels.topview}>
                    <TouchableOpacity onPress={() => navigation.navigate('DanceClass')}>
                        <Image
                            style={{ width: 40, height: 40 }}
                            source={require('../../../Assets/Image/back.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styels.toptext}>ViewList</Text>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: '#28282B' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Student List</Text>
                </View>


                <Table style={{ flex: 1 }}>
                    <Row data={tabalehead} flexArr={[1, 1, 1]} style={{ backgroundColor: '#606061', color: 'white', padding: 7 }} textStyle={{ color: 'orange', textAlign: 'center' }} />

                    <ScrollView>
                        <Rows data={tabledata} textStyle={{ textAlign: 'center' }} style={{ backgroundColor: '#464659', borderColor: '#6a6a80', borderWidth: 1, padding: 8 }} />
                    </ScrollView>
                </Table>


            </View>



        </View>
    );
}

const styels = StyleSheet.create({
    topview: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    toptext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f5c849',
        marginRight: 145
    }
})