import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Logout from '../Auth/Logout';
import Home from '../Home/Home'
import Addclient from '../Home/Addclient'
import Customer from '../Home/Customer';
import Profile from '../Home/Profile';
import Shirt from '../Measure/Shirt';
import Pant from '../Measure/Pant';
import Measurement from '../Measure/Measurement';
import Newmeasure from '../Measure/Newmeasure';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const drawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'
      screenOptions={{
        headerShown: false, drawerActiveBackgroundColor: 'rgb(37,36,39)',
        drawerActiveTintColor: 'rgb(252, 251, 252)',
        drawerStyle: { backgroundColor: 'rgb(252, 251, 252)' },
        drawerLabelStyle: { fontFamily: 'serif', fontSize: 18 }
      }}
    >
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Measurement' component={Measurement} />
      <Drawer.Screen name='Customer' component={Customer} />
      <Drawer.Screen name='Logout' component={Logout} />
    </Drawer.Navigator>
  )
}
export default class Authnav extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}
          initialRouteName={'Login'}>
          <Stack.Screen name='Draw' component={drawerNav} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Shirt' component={Shirt} />
          <Stack.Screen name='Pant' component={Pant} />
          <Stack.Screen name='Addclient' component={Addclient}/>
          <Stack.Screen name='Newmeasure' component={Newmeasure}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({})
