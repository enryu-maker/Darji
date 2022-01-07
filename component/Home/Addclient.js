import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { launchImageLibrary, ImageLibraryOptions, launchCamera } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
export default class Addclient extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            DressType: 'Shirt'
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
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error:', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: 'data:image/jpeg;base64,' + response.base64 };
                this.setState({
                    ProfilePic: source
                });
            }
        });
    };
    render() {
        return (
            <View style={styles.Main}>
                <View style={styles.Header}>
                    <Text style={styles.Headtext}>
                        Add Client
                    </Text>
                </View>
                <ScrollView style={styles.Body}>
                    <View style={styles.profile}>
                        <Image source={require('../../assets/usersample.png')}
                            style={styles.UserProfile} />
                        <TouchableOpacity
                            onPress={() => this.openCamara()}>
                            <Text style={[styles.buttonText]}>
                                Add Client pic
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.UserInput}>

                        <Text style={styles.EntryText}>Name</Text>
                        <TextInput placeholder='Name'
                            placeholderTextColor={'rgb(37,36,39)'}
                            style={styles.Input} />


                        <Text style={styles.EntryText}>Phone</Text>
                        <TextInput placeholder='Phone'
                            placeholderTextColor={'rgb(37,36,39)'}
                            style={styles.Input} />

                        <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                            <Image
                                style={styles.Img}
                                source={require('../../assets/left.png')} />
                            <Text style={[styles.buttonText, { fontSize: 22, color: 'rgb(37,36,39)', letterSpacing: 0 }]}>
                                Measurements
                            </Text>
                            <Image
                                style={styles.Img}
                                source={require('../../assets/right.png')} />
                        </View>
                        <View style={styles.Entry}>
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
                        </View>
                        <TouchableOpacity style={styles.Button}
                            onPress={() => this.props.navigation.navigate(this.state.DressType)}>
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
        width: '40%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 40,
        marginTop: 20,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'rgb(37,36,39)'
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
})
