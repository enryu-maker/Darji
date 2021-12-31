import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class Addclient extends Component {
    render() {
        return (
            <View style={styles.Main}>
                <View style={styles.Header}>
                    <Text style={styles.Headtext}>
                        Add Client
                    </Text>
                </View>
                <ScrollView style={styles.Body}>

                </ScrollView>
             
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor:'rgb(37,36,39)',
        flex:1
    },
    Header:{
        height:'25%',
        justifyContent:'center'

    },
    Headtext:{
        color:'rgb(252, 251, 252)',
        fontFamily:'serif',
        fontWeight:'bold',
        fontSize:40,
        alignSelf:'center',
        letterSpacing:10,
    },
    Body:{
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'rgb(252, 251, 252)',
        height:'100%'
    }
})
