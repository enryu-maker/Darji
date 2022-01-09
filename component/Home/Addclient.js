import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import { launchImageLibrary, ImageLibraryOptions, launchCamera } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
export default class Addclient extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            Name:'',
            Phone:'',
            Address:'',
            photo:null,
            picdata:null
        })
    }
    openCamara = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
        };
        launchImageLibrary(options, response => {
            // console.log(response.assets[0].base64)
            if (response.assets) {
                imageAssetsArray = response.assets[0].uri
                this.setState({
                    photo: imageAssetsArray,
                    picdata: response.assets[0].base64
                })
            }
        });
    };
    renderFileUri() {
        if (this.state.photo) {
          return <Image
            source={{ uri: this.state.photo }}
            style={styles.UserProfile}
          />
        } else {
          return <Image
            source={require('../../assets/usersample.png')}
            style={styles.UserProfile}
          />
        }
      };
    addclient=()=>{
        if (this.state.Name && this.state.Phone && this.state.Address){
            axios.post('/login/',
                { "photodata": this.state.picdata,
                 "clientname": this.state.Name,
                "clinetphone":this.state.Phone,
            "clientaddress":this.state.Address },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then((response)=>{
                    Alert.alert(
                        response, "Add another client .",
                      [
                       {text: ' Add client ', onPress:  () => this.props.navogation.replace('Addclient') },
                       {text: 'Cancel',onPress: ()=> this.props.navogation.replace('Home'), 
                        style: 'cancel'},
                       ],
                     { cancelable: true })
                }).catch((error)=>{
                    console.log(error)
                })
        }
        ;
        
    }
    render() {
        const { photo } = this.state;
        return (
            
            <View style={styles.Main}>
                <View style={styles.Header}>
                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <Image source={require('../../assets/add-user.png')}
                    style={styles.logo}/>
                    <Text style={styles.Headtext}>
                        Add 
                    </Text>
                    </View>
                    
                    <Text style={styles.Headtext}>
                        Customer
                    </Text>
                </View>
                <ScrollView style={styles.Body}>
                    <View style={styles.profile}>
                        {this.renderFileUri()}
                        <TouchableOpacity
                            onPress={() => this.openCamara()}>
                            <Text style={[styles.buttonText]}>
                                Add Client pic
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.UserInput}>

                        <Text style={[styles.FormatText, { marginTop: '5%' }]}>Name</Text>
                        <TextInput placeholder='Client Name'
                            placeholderTextColor={'rgb(37,36,39)'}
                            style={styles.Input}
                            onChangeText={(Name) => { this.setState({ Name }) }}
                            keyboardType='ascii-capable'
                            keyboardAppearance='default'
                            returnKeyType='next'
                            autoCapitalize='none' />


                        <Text style={[styles.FormatText, { marginTop: '5%' }]}>Phone</Text>
                        <TextInput placeholder='Client Phone'
                            placeholderTextColor={'rgb(37,36,39)'}
                            style={styles.Input}
                            onChangeText={(Phone) => { this.setState({ Phone }) }}
                            keyboardType='ascii-capable'
                            keyboardAppearance='default'
                            returnKeyType='next'
                            autoCapitalize='none'  />

                        <Text style={[styles.FormatText, { marginTop: '5%' }]}>Address</Text>
                        <TextInput placeholder='Client Address'
                            placeholderTextColor={'rgb(37,36,39)'}
                            style={styles.Input} 
                            onChangeText={(Address) => { this.setState({ Address }) }}
                            keyboardType='ascii-capable'
                            keyboardAppearance='default'
                            returnKeyType='next'
                            autoCapitalize='none' />

                        {/* <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                            <Image
                                style={styles.Img}
                                source={require('../../assets/left.png')} />
                            <Text style={[styles.buttonText, { fontSize: 24, color: 'rgb(37,36,39)', letterSpacing: 0 }]}>
                                Measurements
                            </Text>
                            <Image
                                style={styles.Img}
                                source={require('../../assets/right.png')} />
                        </View> */}
                        {/* <View style={styles.Entry}>
                            <Text style={styles.EntryText}>
                                Select Dress type
                            </Text>
                            <Picker
                                selectedValue={this.state.DressType}
                                style={{ height: 40, width: '50%' }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ DressType: itemValue })
                                }>
                                <Picker.Item label="Shirt" fontFamily='serif' value="Shirt" style={styles.pick} />
                                <Picker.Item label="Pant" fontFamily='serif' value="Pant" style={styles.pick} />
                            </Picker>
                        </View> */}
                        <TouchableOpacity style={styles.Button}
                            onPress={
                                () => this.addclient()
                              }>
                            <Text style={styles.Text}>
                                Add Detail
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Main: {
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
        height: '100%',
    },
    UserProfile: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        marginTop: 20,
        borderColor: 'rgb(37,36,39)',
        borderWidth: 2.5
    },
    buttonText: {
        fontSize: 18,
        alignSelf: 'center',
        padding: 10,
        color: 'rgb(37,36,39)',
        fontFamily: 'serif',
    },
    Entry: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
    },
    EntryText: {
        padding: 14,
        fontSize: 18,
        justifyContent: 'center',
        fontFamily: 'serif'
    },
    Input: {
        borderColor: '#DCDCDC',
        borderWidth: 1,
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        color: 'black',
        fontSize: 18,
        fontFamily: 'serif',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 15,
        height: 55
    },
    pick: {
        fontSize: 16
    },
    Button: {
        borderBottomColor: 'black',
        borderWidth: 1,
        width: '35%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 55,
        marginTop: 20,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'rgb(37,36,39)',
        margin:10
    },
    Text: {
        fontSize: 22,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: 'rgb(252, 251, 252)'

    },
    Img: {
        height: 40,
        width: 100
    },
    FormatText: {
        width: '80%',
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'serif',
        padding: 5,
        color: 'rgb(37,36,39)'
    },
    logo:{
        width:50,
        height:50
    }
    
})
