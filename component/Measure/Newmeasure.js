import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
export default class Newmeasure extends Component {
    render() {
        return (
            <View style={styles.Main}>
                <View style={styles.Header}>
                    <Text style={styles.Headtext}>
                        New 
                    </Text>
                    <Text style={styles.Headtext}>
                        Measurement
                    </Text>
                    
                </View>
                <View style={styles.Body}>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Main:{
        backgroundColor: 'rgb(37,36,39)',
        flex: 1
    },
    Header: {
        height: '25%',
        justifyContent: 'center'

    },
    Headtext: {
        color: 'rgb(252, 251, 252)',
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'center',
        letterSpacing: 8,
    },
    Body: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'rgb(252, 251, 252)',
        height: '75%',
    },
})
