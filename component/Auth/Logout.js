import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.outer();
    }
    outer = () => {
        AsyncStorage.clear();
        //console.log(AsyncStorage.getItem('token'))
        this.props.navigation.replace('Login')
    }
    render() {
        return (
            <View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
