/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from './component/Auth/Login';
import Signup from './component/Auth/Signup';
import Logout from './component/Auth/Logout';
import Home from './component/Home/Home';
import Addclient from './component/Home/Addclient'
import Search from './component/Home/Search'
import Profile from './component/Home/Profile';
import Shirt from './component/Measure/Shirt';
import Pant from './component/Measure/Pant';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Drawer = createDrawerNavigator();
const drawerNav=()=>{
  return (
      <Drawer.Navigator initialRouteName='Home'
      screenOptions={{headerShown:false,drawerActiveBackgroundColor:'rgb(37,36,39)',
      drawerActiveTintColor:'rgb(252, 251, 252)',
      drawerStyle:{backgroundColor:'rgb(252, 251, 252)'},
    drawerLabelStyle:{fontFamily:'serif',fontSize:18}}}
      >
    <Drawer.Screen name='Home' component={Home}/>
    <Drawer.Screen name='Profile' component={Profile}/>
      <Drawer.Screen name='AddClient' component={Addclient}/>
      <Drawer.Screen name='SearchClient' component={Search}/>
      <Drawer.Screen name='Logout' component={Logout}/>
    </Drawer.Navigator>
  )
}
const againRefresh=(refresh)=>{
  axios.post('https://darzi.nerdtech.in/api/token/refresh/',
  {
    "refresh": refresh
  },{headers: {
    'Content-Type': 'application/json',
}}).then((response)=>{
  AsyncStorage.clear()
  AsyncStorage.setItem('token',response.data.access)
  AsyncStorage.setItem('token',response.data.refresh)
}).catch((error)=>{
  this.props.navigation.replace('Login')
})
}

const App = () => {
  async function retrieveData(){
    try {
      const token = await AsyncStorage.getItem('token');
      const refresh = await AsyncStorage.getItem('refresh');
      console.log(token)
      console.log(refresh)
      if (token !== null && refresh !== null) {
        global.Route=true
        console.log(global.Route)
      }
      else{
        global.Route=false
        console.log(global.Route)
      }
    } catch (error) {
      global.Route=false
      console.log(global.Route)
    }
  };
  retrieveData();
  useEffect(() => {
    SplashScreen.hide();
    
    
  },[]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
        
          {global.Route==true?(
          <>
          <Stack.Screen name='Draw' component={drawerNav}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name='Shirt' component={Shirt}/>
          <Stack.Screen name='Pant' component={Pant}/>
          </>
          
          ):(
          <>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name='Draw' component={drawerNav}/>
          <Stack.Screen name='Shirt' component={Shirt}/>
          <Stack.Screen name='Pant' component={Pant}/>
          </>
          
          )
          
          }
          </Stack.Navigator>
          </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
