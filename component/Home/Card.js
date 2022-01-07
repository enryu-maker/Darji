import React, { Component } from 'react'
import { Text, StyleSheet, View ,ScrollView,Image} from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View style={styles.Clientcard}>
                            <View style={styles.show}>
                                <View style={{flexDirection:'row'}}>
                                <Image source={require('../../assets/usersample.png')}
                                style={styles.img}/>
                                <View style={{flexDirection:'column',marginLeft:'20%'}}>
                                    <Text style={styles.userdata}> 
                                        Client Name
                                    </Text>
                                    <Text style={styles.userdata}>
                                        +91 123456789
                                    </Text>
                                    <Text style={styles.userdata}>
                                        India
                                    </Text>
                                </View>
                                </View>
                            </View>
                    </View>
        )
    }
}

const styles = StyleSheet.create({
    show:{
        borderColor: '#DCDCDC',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        margin: 10,
        color: 'black',
        fontSize: 18,
        fontFamily: 'serif',
        backgroundColor: '#F5F5F5',
        borderRadius: 29,
        padding: 15,
        height: 100
    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        // alignSelf: 'flex-start',
        // marginTop: 20,
        borderColor: 'rgb(37,36,39)',
        borderWidth: 2.5,
        justifyContent:'center',
    },
    userdata:{
        fontFamily:'serif',
        fontSize:16
    },
})
