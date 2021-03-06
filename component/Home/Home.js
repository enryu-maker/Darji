import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwt_decode from "jwt-decode";
export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    retrieveData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const refresh = await AsyncStorage.getItem('refresh');
            if (token !== null && refresh !== null) {
                var decodedHeader = jwt_decode(token);
                console.log(decodedHeader);
            }
        } catch (error) {
            console.log('hello')
        }
    };
    render() {

        return (
            <View style={styles.Main}>
                <View style={styles.SubContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{ alignSelf: 'center', margin: 10 }}
                            onPress={() => this.props.navigation.openDrawer()}
                        >
                            <Image style={{ alignSelf: 'center', margin: 15, width: 30, height: 30 }}
                                source={require('../../assets/menu.png')} />
                        </TouchableOpacity>
                        <Image style={{
                            alignSelf: 'center', width: 70, height: 70, margin: 20, borderRadius: 70 / 2, borderColor: 'rgb(252, 251, 252)',
                            borderWidth: 2.5
                        }}
                            source={require('../../assets/usersample.png')} />

                    </View>
                    <Text style={[styles.Headtext, { color: 'rgb(237, 234, 224)', margin: 15 }]}>
                        Name of Shop
                    </Text>
                    <TouchableOpacity
                    onPress={()=>this.retrieveData()}>
                        <Text style={[styles.Headtext, { color: 'rgb(237, 234, 224)', margin: 15 }]}>
                            Data
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Main: {
        backgroundColor: 'rgb(37,36,39)',
        flex: 1
    },
    SubContainer: {
        justifyContent: 'center',
    },
    Headtext: {
        color: 'rgb(252, 251, 252)',
        fontSize: 22,
        fontFamily: 'serif',
        padding: 8

    }
})
