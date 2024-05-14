import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Image,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';

export default function ExtraClassAdd({navigation, route}) {
  const {
    classname,
    classlocation,
    classtime,
    classtype,
    instructorname,
    myClassValue,
    myExtraClassInstructorName,
  } = route.params;

  const [popup, setPopup] = useState(true);
  const [reasonPopup, setReasonPopup] = useState(false);
  const [reasonText, setReasonText] = useState('');
  const [resonpopup, setReasonpopup] = useState(false);
  const [classValue, setClassValue] = useState(myClassValue);
  const [buttonStatus, setButtonStatus] = useState(1);

  // Alert.alert(myExtraClassInstructorName);

  const extraclass = async () => {
    if (reasonText == '') {
      Alert.alert('Please Fill The Reason.');
      return;
    }

    try {
      const currentDate = new Date();
      const formattedDate = `${currentDate
        .getDate()
        .toString()
        .padStart(2, '0')}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${currentDate.getFullYear()}`;

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        reason: reasonText,
        date: formattedDate,
        instructor_name: instructorname,
        classname: classname,
        location: classlocation,
        time: classtime,
        classType: 'extra',
        main_instructor_name: myExtraClassInstructorName,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        'https://www.sales.g9media.ca/mobile_api/instructor_attendance',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          instructorStatusAPI();

          console.log(result);
        })
        .catch(error => console.error(error));
    } finally {
      setReasonpopup(!resonpopup);
    }
  };

  const instructorStatusAPI = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, '0')}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${currentDate.getFullYear()}`;

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      date: formattedDate,
      instructor_name: instructorname,
      classname: classname,
      location: classlocation,
      time: classtime,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://www.sales.g9media.ca/mobile_api/get_instructor_attendance',
      requestOptions,
    )
      // .then((response) => response.text())
      .then(response => response.json())
      .then(async result => {
        const status = result.status;
        // Alert.alert(status);

        Alert.alert('Extra Class Add Successfully!!');
        setReasonPopup(false);

        navigation.goBack();
      })
      .catch(error => console.error(error));
  };

  const confirmButton = () => {
    setPopup(false);
    setReasonPopup(true);
  };

  const submitReason = () => {
    console.log('Reason submitted:', reasonText);
    setReasonPopup(false);
    navigation.goBack();
  };

  return (
    <View style={{backgroundColor: '#fff'}}>
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
          <Text style={styles.headertext}>Confirmation Screen</Text>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={popup}
        onRequestClose={() => {
          Alert.alert('Class closed');
          setPopup(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Do you want to take this class?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  confirmButton();
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[
                  styles.button,
                  {backgroundColor: 'red', marginLeft: 25},
                ]}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={reasonPopup}
        onRequestClose={() => {
          Alert.alert('Reason modal closed');
          setReasonPopup(false);
        }}>
        {classValue == 1 ? (
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalText1}>Please Enter Reason</Text>

                <TextInput
                  style={styles.input}
                  onChangeText={text => setReasonText(text)}
                  value={reasonText}
                  placeholder="Enter reason here..."
                  placeholderTextColor="#999"
                  fontSize={16}
                  numberOfLines={4}
                  multiline={true}
                  textAlignVertical="top"
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => extraclass()}
                    style={[styles.button, {marginRight: 20}]}>
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                    style={[styles.button, {backgroundColor: 'red'}]}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        ) : (
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text
                style={[
                  styles.modalText1,
                  {color: 'white', textAlign: 'center', fontWeight: '600'},
                ]}>
                This class has already been assigned to you. Please choose from
                Dashboard the available extra classes to asign for any
                additional class.
              </Text>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={[styles.button, {alignSelf: 'center'}]}>
                  <Text style={styles.buttonText}>Okay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = {
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    width: '92%',
  },
  modalText: {
    color: 'white',
    fontSize: 18,
    // fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  modalText1: {
    color: '#f5c849',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    backgroundColor: 'orange',
    borderRadius: 8,
    width: '33%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    backgroundColor: 'red',
    borderRadius: 12,
    width: '37%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    padding: 8,
    fontSize: 18,
    // fontWeight: 'bold'
  },

  input: {
    borderWidth: 1.5,
    borderColor: 'orange', // Lighter border color
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    fontSize: 16,
    minHeight: 100, // Set minimum height
    textAlignVertical: 'top', // Align text to the top
    color: 'white',
    width: '90%',
    alignSelf: 'center',
    padding: 8,
  },
};
