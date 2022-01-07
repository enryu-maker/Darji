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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Authnav from './component/Nav/Authnav';
import Rootnav from './component/Nav/Rootnav';
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
  const [Route,setRoute]=useState(false)
  async function retrieveData(){
    try {
      // const token = await AsyncStorage.getItem('token');
      // const refresh = await AsyncStorage.getItem('refresh');
      console.log(token)
      console.log(refresh)
      if (token !== null && refresh !== null) {
        setRoute(true)
        // console.log(Route)
      }
      else{
        setRoute(false)
        // console.log(Route)
      }
    } catch (error) {
      setRoute(false)
      // console.log(Route)
    }
  };
  
  useEffect(() => {
    retrieveData();
    SplashScreen.hide();
    
    
  },[]);
  return (
    <SafeAreaView style={{flex: 1}}>
        {
          Route === true ? <Rootnav/> : <Authnav/>
        }
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
