import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import CheckBox from 'react-native-check-box';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          username:'username',
          email: '',
          password1: '',
          switchValue: false,
          showView:true,
          valueColor:'black',
          passText:'Password',
          mailText:'email'
        })
    
      }
      checkPass=()=>{
        if (this.state.password1){
            
        }
        else{
            this.setState({
                email:'',
                password1:'',
                password2:'',
                valueColor:'red',
                passText:"Password didn't match",
            })
        }
    }
    
        render() {
        
        return (
            
                <View style={styles.Main}>
                <View style={styles.Headercontainer}>
                    <Text style={[styles.Headtext]}>
                        D A R J I
                    </Text>
                </View>
                <View style={styles.Entrycontainer}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:'20%',}}>
                        <Image 
                        style={styles.Img}
                        source={require('../../assets/left.png')}/>
                        <Text style={[styles.Headtext,{fontSize:38,letterSpacing:3,color:'black'}]}>
                        SIGNUP
                    </Text>
                    <Image
                    style={styles.Img}
                    source={require('../../assets/right.png')}/>
                    </View>
                <View style={{marginTop:'10%',flexDirection:'column',justifyContent:'space-evenly'}}>
                <TextInput
                    style={styles.Entry}
                    placeholder={this.state.username}
                    placeholderTextColor={this.state.valueColor}
                    onChangeText={(username)=>{this.setState({username})}}
                    />
                    <TextInput
                    style={styles.Entry}
                    placeholder={this.state.mailText}
                    placeholderTextColor={this.state.valueColor}
                    onChangeText={(email)=>{this.setState({email})}}
                    value={this.state.email}
                    />
                    <TextInput
                    style={styles.Entry}
                    placeholder={this.state.passText}
                    placeholderTextColor={this.state.valueColor}
                    secureTextEntry={this.state.showView}
                    onChangeText={(password1)=>{this.setState({password1})}}
                    value={this.state.password1}
                    />
                    <CheckBox
                        style={[styles.Tick]}
                        onClick={()=>{
                        this.setState({
                            switchValue:!this.state.switchValue,
                            showView:!this.state.showView
                        })
                        }}
                        isChecked={this.state.switchValue}
                        rightText={"Show password"}
                    />

                    <TouchableOpacity style={styles.Button}
                    onPress={this.checkPass}>
                        <Text style={styles.Text}>Signup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf:'center',marginTop:'5%'}}
                    onPress={()=>{this.props.navigation.navigate('Login')}}
                    >
                        <Text style={{textDecorationLine:'underline',color:'rgb(37,36,39)'}}>
                            Already a member? Login
                        </Text>
                    </TouchableOpacity>
                </View>
                    
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    Main:{
        flex:1,
        backgroundColor:'rgb(37,36,39)'
    },
    Img:{
        height:40,
        width:100
    },
    Entrycontainer:{
        flexDirection:'column',
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        backgroundColor:'rgb(252, 251, 252)',
        height:'100%'
    },
    Entry:{
        borderBottomWidth:1,
        width:'80%',
        alignSelf:'center',
        margin:10,
        fontSize:18,
        fontFamily:'serif',
    },
    Button:{
        borderBottomColor:'black',
        borderWidth:1,
        width:'30%',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:8,
        height:40,
        marginTop:20,
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
    Headercontainer:{
        height:'25%',
        justifyContent:'center'
    },
    Headtext:{
        fontSize:43,
        fontWeight:'bold',
        letterSpacing:10,
        alignSelf:'center',
        fontFamily:'serif',
        color:'rgb(252, 251, 252)'
    },
    Tick:{
        width:'80%',
        alignSelf:'center',
        margin:10,
    }

    
})
