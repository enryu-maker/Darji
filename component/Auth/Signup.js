import axios from 'axios'
import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import CheckBox from 'react-native-check-box'
axios.defaults.baseURL='https://darzi.nerdtech.in/api'
export default class Signup extends Component {
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
          first:'',
          last:''
        })
    
      }
    signup=()=>{
        if (this.state.email && this.state.password){
            axios.post('/register/',
            {"username":this.state.email,
            "password":this.state.password,
            "first_name":this.state.first,
            "last_name":this.state.last
        },
            {headers: {
                'Content-Type': 'application/json',
            }}).then((response)=>{
                if(response.status===200){
                    this.setState({
                        ValueColor:'#006400',
                        Value:`${response.data.message}`
                    })
                    //this.props.navigation.replace('Login')
                }
                else{
                    this.setState({
                        ValueColor:'#800000',
                        Value:'Something went wrong'
                    })
                }
            })
            .catch((error)=> {
                if (error.response) {
                  console.log(error.response.data);
                  this.setState({
                    ValueColor:'#800000',
                    Value:`${error.response.data.detail}`
                })
                }})
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
                        SIGNUP
                    </Text>
                    <Image
                    style={styles.Img}
                    source={require('../../assets/right.png')}/>
                    </View>
                <View style={{marginTop:'10%',flexDirection:'column'}}>
                    <Text style={{alignSelf:'center',color:this.state.ValueColor}}>{this.state.Value}</Text>
                    <Text style={{width:'80%',alignSelf:'center',fontSize:18,fontFamily:'serif',padding:5,color:'rgb(37,36,39)'}}>Email</Text>
                <TextInput
                    style={styles.Entry}
                    placeholder='your email'
                    placeholderTextColor={this.state.ValueColor}
                    onChangeText={(email)=>{this.setState({email})}}
                    keyboardType='email-address'
                    keyboardAppearance='default'
                    returnKeyType='next'
                    autoCapitalize='none'
                    //autoFocus={true}
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
                    returnKeyType='next'
                    autoCapitalize='none'
                    value={this.state.password}
                    />
                    <Text style={{width:'80%',alignSelf:'center',fontSize:18,fontFamily:'serif',padding:5,color:'rgb(37,36,39)'}}>First Name</Text>
                    <TextInput
                    style={styles.Entry}
                    placeholder='your first name'
                    placeholderTextColor={this.state.ValueColor}
                    onChangeText={(first)=>{this.setState({first})}}
                    keyboardType='ascii-capable'
                    keyboardAppearance='default'
                    returnKeyType='next'
                    autoCapitalize='none'
                    value={this.state.first}/>
                    <Text style={{width:'80%',alignSelf:'center',fontSize:18,fontFamily:'serif',padding:5,color:'rgb(37,36,39)'}}>Last Name</Text>
                    <TextInput
                    style={styles.Entry}
                    placeholder='your last name'
                    placeholderTextColor={this.state.ValueColor}
                    onChangeText={(last)=>{this.setState({last})}}
                    keyboardType='ascii-capable'
                    keyboardAppearance='default'
                    returnKeyType='go'
                    autoCapitalize='none'
                    value={this.state.last}/>
                    <View style={{flexDirection:'row',width:'80%',alignSelf:'center'}}>
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
                    onPress={()=>this.signup()}>
                        <Text style={styles.Text}>Signup</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                    style={{alignSelf:'center',marginTop:'5%',justifyContent:'center'}}
                    onPress={()=>this.props.navigation.replace("Login")}>
                        <Text style={[styles.Tick2]}>Already a member? Login</Text>
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
        height:'100%',
        //paddingBottom:5
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
        width:'45%',
        alignSelf:'flex-end',
        justifyContent:'center',
        borderRadius:20,
        height:55,
        marginTop:20,
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'rgb(37,36,39)',
        //marginLeft:30
        
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
        padding:5
    }

    
})
