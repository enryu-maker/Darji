import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import { launchImageLibrary,ImageLibraryOptions } from 'react-native-image-picker';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            ProfilePic:'../../assets/usersample.png',
            Name:'Akif Khan',
            Phone:'+91 9405649047',
            ShopName:'NerdTech',
            ShopAddr:'Nashik',
            Email:'akifkhan60067@gmail.com',
            Website:'nerdtech.in',
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
        console.log('ImagePicker Error:' , response.error);
        } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        } else {
        // You can also display the image using data:
        const source = {uri: 'data:image/jpeg;base64,' + response.base64};
        this.setState({
            ProfilePic:source
        });
        }
        });
        };
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
                    <TouchableOpacity
                    onPress={()=>this.openCamara()}>
                        <Text style={[styles.Headtext,{fontSize:16,alignSelf:'center',padding:10}]}>
                            change profile pic
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Name
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder={this.state.Name}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(Name)=>{this.setState({Name})}}/>
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Phone
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder={this.state.Phone}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(Phone)=>{this.setState({Phone})}}
                    />
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Shop
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder={this.state.ShopName}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(ShopName)=>{this.setState({ShopName})}}
                    />
                    </View>
                    <View style={[styles.Format]}>
                    <Text style={styles.FormatText}>
                    Address  
                    </Text>
                    <TextInput
                    style={[styles.Input,{}]}
                    placeholder={this.state.ShopAddr}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(ShopAddr)=>{this.setState({ShopAddr})}}
                    />
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Email 
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder={this.state.Email}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(Email)=>{this.setState({Email})}}
                    />
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Website 
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder={this.state.Website}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(Website)=>{this.setState({Website})}}
                    />
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Logo 
                    </Text>
                    <Image source={require('../../assets/usersample.png')}
                    style={[styles.UserProfile,{width:70,height:70,marginTop:0}]}/>
                    <TouchableOpacity style={styles.Button}
                    onPress={()=>this.openCamara()}>
                        <Text style={styles.Text}>Add Logo</Text>
                    </TouchableOpacity>
                    </View>
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
    },
    Format:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:7,
        
    },
    FormatText:{
        padding:15,
        fontSize:18,
        justifyContent:'center',
        fontFamily:'serif'
    },
    Input:{
        borderBottomWidth:1,
        width:'65%',
        margin:5,
        borderColor:'rgb(37,36,39)',
        fontSize:16,
        fontFamily:'serif'
    },
    Button:{
        borderBottomColor:'black',
        borderWidth:1,
        width:'40%',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:8,
        height:40,
        //marginTop:20,
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'rgb(37,36,39)'
    },
    Text:{
        fontSize:22,
        fontFamily:'serif',
        fontWeight:'bold',
        color:'rgb(252, 251, 252)'
    },

})
