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
                    <Text style={[styles.Headtext,{fontWeight:'bold'}]}>
                        Edit Profile
                    </Text>
                    <TouchableOpacity>
                        <Text style={[styles.Headtext,]}>
                            Done
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignSelf:'center'}}>

                
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
                    <View style={styles.profile}>
                    <Image source={require('../../assets/logo.jpeg')}
                    style={[styles.UserProfile,{borderRadius:20}]}/>
                    <TouchableOpacity
                    onPress={()=>this.openCamara()}>
                        <Text style={[styles.Headtext,{fontSize:16,alignSelf:'center',padding:10}]}>
                            change shop logo 
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={styles.container}>
                    
                    <Text style={[styles.FormatText,{marginTop:'5%'}]}>
                        Name
                    </Text>
                    <TextInput
                    style={[styles.Input]}
                    placeholder={this.state.Name}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(Name)=>{this.setState({Name})}}/>
                    
                    <Text style={styles.FormatText}>
                        Phone
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder={this.state.Phone}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(Phone)=>{this.setState({Phone})}}
                    />
                    
                    <Text style={styles.FormatText}>
                        Shop Name
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder={this.state.ShopName}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(ShopName)=>{this.setState({ShopName})}}
                    />
                    
                    <Text style={styles.FormatText}>
                    Shop Address  
                    </Text>
                    <TextInput
                    style={[styles.Input,{}]}
                    placeholder={this.state.ShopAddr}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(ShopAddr)=>{this.setState({ShopAddr})}}
                    />
                    
                    
                    <Text style={styles.FormatText}>
                        Email 
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder={this.state.Email}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(Email)=>{this.setState({Email})}}
                    />
                    
                    <Text style={styles.FormatText}>
                        Website 
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder={this.state.Website}
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(Website)=>{this.setState({Website})}}
                    />
                    {/* <TouchableOpacity style={styles.Button}
                    onPress={()=>this.openCamara()}>
                        <Text style={styles.Text}>Add Logo</Text>
                    </TouchableOpacity> */}
                    
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
        marginTop:20,
        borderColor:'rgb(252, 251, 252)',
        borderWidth:2.5
    },
    HorizontalLine:{
        borderStyle: 'solid',
        width:'100%',
        borderWidth:0.185,
        borderColor:'grey'
    },
    container:{
        //flexDirection:'row',
        backgroundColor:'rgb(252, 251, 252)',
        height:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        
    },
    Format:{
        flexDirection:'row',
        justifyContent:'center' ,
        padding:10       
    },
    FormatText:{
        width:'80%',
        alignSelf:'center',
        fontSize:18,
        fontFamily:'serif',
        padding:5,
        color:'rgb(37,36,39)'
    },
    Input:{
        borderColor:'#DCDCDC',
        borderWidth:1,
        width:'80%',
        alignSelf:'center',
        margin:10,
        color:'black',
        fontSize:18,
        fontFamily:'serif',
        backgroundColor:'#F5F5F5',
        borderRadius:20,
        padding:15,
        height:55
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
