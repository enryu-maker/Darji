import axios from 'axios'
import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native'
import CheckBox from 'react-native-check-box'
import AsyncStorage from '@react-native-async-storage/async-storage';
axios.defaults.baseURL='https://darzi.nerdtech.in/api'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          Value:'',
          email: '',
          password: '',
          switchValue: false,
          showView:true,
          ValueColor:'rgb(37,36,39)',
          passText:'Password',
          mailText:'email',
        })
      }
      retrieveData = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          const refresh = await AsyncStorage.getItem('refresh');
          if (token !== null && refresh !== null) {
            console.log(token);
            console.log(refresh);
          }
        } catch (error) {
          console.log('hello')
        }
      };
    storeData = async (token,refresh) => {
        try {
          await AsyncStorage.setItem(
           'token',token
          )
          await AsyncStorage.setItem(
            'refresh',refresh
           )
        } catch (e) {
          console.log(e)
        }
      }
    login=async()=>{
        if (this.state.email && this.state.password){
            await axios.post('/login/',
            {"username":this.state.email,"password":this.state.password},
            {headers: {
                'Content-Type': 'application/json',
            }}).then((response)=>{
                //const token = response.data.access
                console.log(response.data.access)
                if(response.status===200){
                    this.storeData(response.data.access,response.data.refresh)
                    this.props.navigation.replace('Draw')
                }
                else{
                    this.setState({
                        ValueColor:'#800000',
                        Value:'Something went wrong',
                        email:'',
                        password:''
                    }
                    )
                }
            })
            .catch((error)=> {
                if (error.response) {
                  console.log(error.response.data);
                  this.setState({
                    ValueColor:'#800000',
                    Value:`${error.response.data.detail}`
                })
                };})
            }
            else{
                this.setState({
                    ValueColor:'#800000',
                    Value:'Please Enter the valid email and password'
                        })}
    }
    render() {
        
        return (
            <View style={styles.Main}>
                <View style={styles.Headercontainer}>
                    <Text style={[styles.Headtext]}>
                        D A R J I
                    </Text>
                </View>
                
                <ScrollView style={styles.Entrycontainer}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:'20%',}}>
                        <Image 
                        style={styles.Img}
                        source={require('../../assets/left.png')}/>
                        <Text style={[styles.Headtext,{fontSize:38,letterSpacing:3,color:'rgb(37,36,39)'}]}>
                        LOGIN
                    </Text>
                    <Image
                    style={styles.Img}
                    source={require('../../assets/right.png')}/>
                    </View>
                <View style={{marginTop:'10%',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <Text style={{alignSelf:'center',color:this.state.ValueColor}}>{this.state.Value}</Text>
                    <Text style={{width:'80%',alignSelf:'center',fontSize:18,fontFamily:'serif',padding:5,color:'rgb(37,36,39)'}}>Email</Text>
                <TextInput
                    autoFocus={true}
                    style={styles.Entry}
                    placeholder='your email'
                    placeholderTextColor={this.state.ValueColor}
                    onChangeText={(email)=>{this.setState({email})}}
                    keyboardType='ascii-capable'
                    keyboardAppearance='default'
                    returnKeyType='next'
                    autoCapitalize='none'
                    value={this.state.email}/>
                    <Text style={{width:'80%',alignSelf:'center',fontSize:18,fontFamily:'serif',padding:5,color:'rgb(37,36,39)'}}>Password</Text>
                    <TextInput
                    style={styles.Entry}
                    placeholder='Password'
                    placeholderTextColor={this.state.ValueColor}
                    secureTextEntry={this.state.showView}
                    onChangeText={(password)=>{this.setState({password})}}
                    keyboardType='ascii-capable'
                    keyboardAppearance='default'
                    returnKeyType='go'
                    autoCapitalize='none'
                    passwordRules='minlength: 8'
                    value={this.state.password}
                    />
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <View style={{flexDirection:'column',alignSelf:'center',padding:5}}>
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
                    <TouchableOpacity>
                    <Text style={[styles.Tick2]}>
                        Forget Password?
                    </Text>
                    </TouchableOpacity>
                    
                    </View>
                    <TouchableOpacity style={styles.Button}
                    onPress={()=>this.login()}>
                        <Text style={styles.Text}>Login</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                    style={{alignSelf:'center',justifyContent:'center'}}
                    onPress={()=>this.props.navigation.replace("Signup")}>
                        <Text style={[styles.Tick2]}>New member? Signup</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>                
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
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'rgb(252, 251, 252)',
        height:'100%'
    },
    Entry:{
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
        width:'35%',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        height:55,
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
        width:150,
        alignSelf:'center',
        margin:10,
    },
    Tick2:{
        textDecorationLine:'underline',
        color:'rgb(37,36,39)',
        alignSelf:'center',
        margin:10,
        padding:5,
        fontSize:16
    }

    
})
