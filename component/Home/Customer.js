import React, { Component, useState } from 'react'
import { Text, StyleSheet, View,ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import Card from './Card'
export default class Customer extends Component {
    constructor(props){
        super(props);
        this.state=({
            search:'',
        })
    };
    filterList(list) {
        return list.filter(
          (listItem) =>
            listItem.Number
              .toLowerCase()
              .includes(this.state.search.toLowerCase()) ||
            listItem.Name.toLowerCase().includes(this.state.search.toLowerCase()),
        );
      }
    render() {
        const list =[
            {Profile:'',Name:'Akif Khan',Number:'+91 9405649047',Address:'Ambad Link road'},
            {Profile:'',Name:'kaif Khan',Number:'+91 9405649047',Address:'Ambad Link road'},
            {Profile:'',Name:'awais Khan',Number:'+91 9405649047',Address:'Ambad Link road'},
            {Profile:'',Name:'sultan Khan',Number:'+91 9405649047',Address:'Ambad Link road'},
            {Profile:'',Name:'Gaurav J',Number:'+91 9405649047',Address:'Ambad Link road'}
        ];
        return (
            <View style={styles.Main}>
                <View style={styles.Header}>
                    <Text style={styles.Headtext}>
                        Customers
                    </Text>
                </View>
                <View style={styles.Body}>
                    <TextInput
                    style={styles.Input}
                    placeholder='Search Customers'
                    textAlign='center'
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(search) => this.setState({search})}
                    />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {this.filterList(list).map((listItem, index) => (
                        <Card key={index} Name={listItem.Name} Number={listItem.Number} Address={listItem.Address}/>
                        ))}
                    </ScrollView>
                    {/* <View style={{flex: 1,position:'relative'}}>
                        <View style={{flex: 1,justifyContent: 'flex-end'}}>
                        <TouchableOpacity
                        style={{width:'100%',height:55,backgroundColor:'red', 
                        alignItems:'center',justifyContent:'center'}}
                        >
                        <Text style={{color:'white', fontSize: 16}}>Bottom Button</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View> */}
                    
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
        letterSpacing: 10,
    },
    Body: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'rgb(252, 251, 252)',
        height: '75%',
    },
    Clientcard:{

    },
    Input:{
        borderColor: '#DCDCDC',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        margin: 15,
        color: 'black',
        fontSize: 18,
        fontFamily: 'serif',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 15,
        height: 55
    },
    show:{
        borderColor: '#DCDCDC',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        margin: 15,
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
    btn:{
        width: '100%', 
      height: 50, 
      backgroundColor: '#FF9800', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    }
    
})
