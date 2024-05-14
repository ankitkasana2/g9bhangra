import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import Toast from 'react-native-toast-message';

const InsMessage = ({navigation, route}) => {
  const {msg, date, classname, location, time, sender_name} = route.params;

  useEffect(() => {}, []);

  return (
    <View style={{flex: 1}}>
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
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={styles.headertext}>Message</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.message}>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                alignSelf: 'center',
                marginBottom: 14,
                color: 'orange',
              }}>
              Message
            </Text>
          </View>
          <View style={{marginBottom: 12}}>
            <Text style={styles.text}>{msg}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

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
    fontWeight: 'bold',
  },
  maintext: {
    color: '#f5c849',
    fontSize: 18,
    fontWeight: 900,
    marginTop: -40,
    width: '80%',
    textAlign: Platform.OS == 'ios' ? 'center' : 'center',
  },
  message: {
    margin: 2,
    padding: 10,
    width: '98%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 12,
    marginTop: 12,
    padding: 16,
    backgroundColor: '#1d2f40',
    height: 'auto',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  text2: {
    marginTop: 2,
    color: '#white',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default InsMessage;
