import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
//import { createDrawerNavigator } from '@react-navigation/drawer';
//const Drawer = createDrawerNavigator();
export default class Home extends Component {
    render() {
        return (
            <View style={styles.Main}>
                <View style={styles.SubContainer}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[styles.Headtext,{alignSelf:'center',margin:10}]}>
                            D
                        </Text>
                        <Image style={{alignSelf:'center',width:70,height:70,margin:10,borderRadius:70/2}}
                        source={require('../../assets/usersample.png')}/>
                            
                    </View>
                    <Text style={[styles.Headtext,{color:'#D3D3D3',margin:15}]}>
                        Hey, user!
                    </Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor:'rgb(37,36,39)',
        flex:1
    },
    SubContainer:{
        //flexDirection:'column',
        justifyContent:'center',
        //height:'20%'
    },
    Headtext:{
        color:'white',
        fontSize:22,
        fontFamily:'serif',
        //alignSelf:'center'
        padding:5
        
    }
})
