import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'


export default class Profile extends Component {
    render() {
        return (
            <View style={styles.Maincontainer}>
                <View style={styles.Headbuttons}>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.replace('Draw')}>
                        <Text style={styles.Headtext}>
                            Cancle
                        </Text>
                    </TouchableOpacity>
                    <Text style={[styles.Headtext,{fontWeight:'800'}]}>
                        Edit Profile
                    </Text>
                    <TouchableOpacity>
                        <Text style={[styles.Headtext,]}>
                            Done
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.profile}>
                    <Image source={require('../../assets/usersample.png')}
                    style={styles.UserProfile}/>
                    <TouchableOpacity>
                        <Text style={[styles.Headtext,{fontSize:16,alignSelf:'center',padding:10}]}>
                            change profile pic
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.container}>

                </ScrollView>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Maincontainer:{
        backgroundColor:'rgb(37,36,39)',
        flex:1
    },
    Headbuttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
    },
    Headtext:{
        color:'rgb(252, 251, 252)',
        fontSize:18,
        padding:5,
        fontFamily:'serif'
    },
    UserProfile:{
        width:100,
        height:100,
        borderRadius:100/2,
        alignSelf:'center',
        marginTop:20
    },
    HorizontalLine:{
        borderStyle: 'solid',
        width:'100%',
        borderWidth:0.185,
        borderColor:'grey'
    },
    container:{
        backgroundColor:'rgb(252, 251, 252)',
        height:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    }
})
