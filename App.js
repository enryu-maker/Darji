/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
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
import Home from './component/Home/Home';
import About from './component/Home/About'
import Contact from './component/Home/Contact'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const drawerNav=()=>{
  return (
      <Drawer.Navigator initialRouteName='Home'
      screenOptions={{headerShown:false,drawerActiveBackgroundColor:'rgb(37,36,39)',drawerActiveTintColor:'rgb(252, 251, 252)',drawerStyle:{backgroundColor:'rgb(252, 251, 252)'}}}
      >
    <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='About' component={About}/>
      <Drawer.Screen name='Contact' component={Contact}/>
    </Drawer.Navigator>
  )
}
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{headerShown:false}}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Signup' component={Signup}/>
          <Stack.Screen name='Draw' component={drawerNav}/>
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
