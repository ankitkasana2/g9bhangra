import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Switch } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
// import ImagePicker from 'react-native-image-crop-picker';

export default function MyAccount({ navigation }) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // const onImageOptionClick = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true
  //   }).then(image => {
  //     console.log(image.path)
  //   });
  // }

  return (
    <View style={{ backgroundColor: '#28282B', width: 400, height: 800 }}>
      <View style={styles.topView}>
        <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}><Image source={require('../../../Assets/Image/Menu.png')} style={styles.headerImg} /></TouchableOpacity>
        <TouchableOpacity><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>My Account</Text></TouchableOpacity>
        <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.navigate('Notification')}><Image source={require('../../../Assets/Image/Notification.png')} style={styles.headerImg} /></TouchableOpacity>
      </View>
      <View style={{ height: 60, width: 360, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 20 }}>

        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Image source={require('../../../Assets/Image/logo.png')} style={{ height: 60, width: 60, borderRadius: 50 }} />
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Text style={{ marginLeft: 10, color: 'gray', lineHeight: 25, }}><Text style={{ color: 'white', fontSize: 18 }}>K29solutions {'\n'}</Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={{
            width: '10%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../../Assets/Image/pen.png')} style={{ height: 20, width: 20, marginRight: 5 }} />
        </TouchableOpacity>
      </View>
      <View style={{ height: 50, width: 360, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', margin: 22, }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Image source={require('../../../Assets/Image/email.png')} style={{ height: 45, width: 45, }} />
          <Text style={{ color: 'gray', marginLeft: 15 }}>All Notification</Text>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: 'gray' }}
          thumbColor={isEnabled ? 'orange' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{ height: 50, width: 360, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginLeft: 22 }}>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} onPress={()=>navigation.navigate('ChangePass')}>
          <Image source={require('../../../Assets/Image/Call.png')} style={{ height: 45, width: 45, }} />
          <Text style={{ color: 'gray', marginLeft: 15 }}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    height: 70,
    width: 400,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerImg: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
    marginRight: 15,
    marginLeft: 10,

  },
});