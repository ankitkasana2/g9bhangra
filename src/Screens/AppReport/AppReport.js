import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function AppReport({navigation}){
    return(
        <View style={{flex:1,backgroundColor:'black'}}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                    <Image 
                        style={{width:40,height:40}}
                        source={require('../../../Assets/Image/back.png')}
                    />
                </TouchableOpacity>
                <Text style={{fontSize:20,fontWeight:'bold',marginRight:150,color:"#f5c849"}}>Report</Text>
            </View>
            <Text style={{color:'white'}}>this is report</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    topView:{
        flexDirection: 'row',
        height: 75,
        width: 400,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#3d3e40'
    }
})

