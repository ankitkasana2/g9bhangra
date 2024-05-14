import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Login from './src/Screens/Login/Login';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import MyProfile from './src/Screens/MyProfile/MyProfile';
import SignUp from './src/Screens/SignUp/SignUp';
import Dashboard from './src/Screens/Dashboard/Dashboard';
import DanceClass from './src/Screens/DanceClass/DanceClass';
import StudentHomeScreen from './src/Screens/StudentHomeScreen/StudentHomeScreen';
import StudentDanceClass from './src/Screens/StudentHomeScreen/StudentDanceClass';
import ClassCancel from './src/Screens/StudentHomeScreen/ClassCancel';
import AllNotification from './src/Screens/StudentHomeScreen/AllNotification';
import MessageRead from './src/Screens/StudentHomeScreen/MessageRead';
import AdminHome from './src/Screens/Admin/AdminHome';
import InsNotification from './src/Screens/Dashboard/InsNotification';
import InsMessage from './src/Screens/Dashboard/InsMessage';
import AdminClass from './src/Screens/Admin/AdminClass';
import AdminNotifications from './src/Screens/Admin/AdminNotifications';
import AdminMessageRead from './src/Screens/Admin/AdminMessageRead';
import Toast from 'react-native-toast-message';
import ExtraClassAdd from './src/Screens/DanceClass/ExtraClassAdd';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const Coustom = (props) => {
    const navigation = useNavigation();

    const handleLogout = () => {    
        navigation.navigate('Login');
        Toast.show({
            type: 'success',
            text1: 'Logout',
            visibilityTime: 2000, // Display time
            autoHide: true,
            position: 'bottom', // Set position to 'bottom'
        });
    };
    
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#28282B', marginTop: 30 }}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={require('./Assets/Image/Logo1.png')} style={{ height: 80, width: 130, margin: 10 }} />
                        <View style={{ justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 800, color: 'orange' }}>G9Bhangara Acacemy</Text>
                            {/* <Text style={{ color: 'gray', marginTop: 20, marginLeft:- 30}} >View Profile</Text> */}
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: '#28282B', marginTop: 20 }}>

                    <DrawerItemList {...props} />
                    <TouchableOpacity onPress={()=>handleLogout()}>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                      <Image source={require('./Assets/Image/logout.jpg')} style={{ height: 25, width: 25, borderRadius: 50,margin:20 }} />
                      <View style={{ justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
                          <Text style={{ fontSize: 15, fontWeight: 800, color: 'white' }}>Logout</Text>
                      </View>
                  </View>
              </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const MyStack = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="DanceClass" component={DanceClass} />
            <Stack.Screen name='StudentHomeScreen' component={StudentHomeScreen} />
            <Stack.Screen name='StudentDanceClass' component={StudentDanceClass} />
            <Stack.Screen name='ClassCancel' component={ClassCancel} />
            <Stack.Screen name='AllNotification' component={AllNotification} />
            <Stack.Screen name='MessageRead' component={MessageRead} />
            <Stack.Screen name='InsNotification' component={InsNotification} />
            <Stack.Screen name='InsMessage' component={InsMessage} />
            <Stack.Screen name='AdminHome' component={AdminHome} />
            <Stack.Screen name='AdminClass' component={AdminClass} />
            <Stack.Screen name='AdminNotifications' component={AdminNotifications} />
            <Stack.Screen name='AdminMessageRead' component={AdminMessageRead} />
            <Stack.Screen name='ExtraClassAdd' component={ExtraClassAdd} />
        </Stack.Navigator>
    );
}

const App = () => {
   
   

    const navigationRef = React.createRef();
    

    return (
        <NavigationContainer ref={navigationRef}>
            <Drawer.Navigator initialRouteName='HomeScreen' gestureHandlerProps={false} drawerContent={props => <Coustom {...props} />} screenOptions={{
                drawerStyle: {
                    backgroundColor: '#28282B',
                    width: 300,
                },
                headerShown: false,
                drawerActiveBackgroundColor: 'orange',
                drawerActiveTintColor: "black",
                drawerInactiveTintColor: "white",
                drawerLabelStyle: {
                    marginLeft: -10,
                }
            }} >
                <Drawer.Screen name="main" component={MyStack} options={{ drawerItemStyle: { height: 0 }, drawerIcon: () => (<Image source={require('./Assets/Image/house.png')} style={{ height: 25, width: 25 }} />), }} />
                <Drawer.Screen name="MyProfile" component={MyProfile} options={{ drawerIcon: () => (<Image source={require('./Assets/Image/profile1.png')} style={{ height: 25, width: 25, borderRadius: 50 }} />), }} />
                {/* <Drawer.Screen name="Dashboard" component={ Dashboard} options={{ drawerIcon: () => (<Image source={require('./Assets/Image/dash.png')} style={{ height: 25, width: 25 }} />), }} /> */}
                
                
                
            </Drawer.Navigator >
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
})

export default App;