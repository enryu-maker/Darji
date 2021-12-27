import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native'
export default class Home extends Component {
    render() {
        return (
            <View style={styles.Main}>
                <View style={styles.SubContainer}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity 
                        style={{alignSelf:'center',margin:10}}
                        onPress={()=>this.props.navigation.openDrawer()}
                         >
                           <Image style={{alignSelf:'center',margin:15,width:30,height:30}}
                           source={require('../../assets/menu.png')} />
                        </TouchableOpacity>
                        <Image style={{alignSelf:'center',width:60,height:60,margin:10,borderRadius:70/2}}
                        source={require('../../assets/usersample.png')}/>
                            
                    </View>
                    <Text style={[styles.Headtext,{color:'rgb(237, 234, 224)',margin:15}]}>
                        Name of Shop
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
        justifyContent:'center',
    },
    Headtext:{
        color:'rgb(252, 251, 252)',
        fontSize:22,
        fontFamily:'serif',
        padding:8
        
    }
})
