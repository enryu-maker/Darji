import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import CheckBox from 'react-native-check-box';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          email: '',
          password1: '',
          password2: '',
          switchValue: false,
          showView:true,
          valueColor:'black',
          passText:'Password',
          mailText:'email'
        })
    
      }
      checkPass=()=>{
        if (this.state.password1===this.state.password2){
        }
        else{
            this.setState({
                password1:'',
                password2:'',
                valueColor:'red',
                passText:"Password didn't match"
            })
        }
    }
    
        render() {
        
        return (
            <KeyboardAvoidingView behavior='position'>
                <View style={styles.Main}>
                <View style={styles.Headercontainer}>
                    <Text style={[styles.Headtext]}>
                        DARJI
                    </Text>
                </View>
                <View style={styles.Entrycontainer}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:'20%',}}>
                        <Image 
                        style={styles.Img}
                        source={require('../assets/left.png')}/>
                        <Text style={[styles.Headtext,{fontSize:38,letterSpacing:3}]}>
                        SIGNUP
                    </Text>
                    <Image
                    style={styles.Img}
                    source={require('../assets/right.png')}/>
                    </View>
                <View style={{marginTop:'10%',flexDirection:'column',justifyContent:'space-evenly'}}>
                <TextInput
                    style={styles.Entry}
                    placeholder={this.state.mailText}
                    placeholderTextColor={this.state.valueColor}
                    onChangeText={(email)=>{this.setState({email})}}
                    />
                    <TextInput
                    style={styles.Entry}
                    placeholder={this.state.passText}
                    placeholderTextColor={this.state.valueColor}
                    secureTextEntry={this.state.showView}
                    onChangeText={(password1)=>{this.setState({password1})}}
                    value={this.state.password1}
                    />
                    <TextInput
                    style={styles.Entry}
                    placeholder={this.state.passText}
                    placeholderTextColor={this.state.valueColor}
                    secureTextEntry={this.state.showView}
                    onChangeText={(password2)=>{this.setState({password2})}}
                    value={this.state.password2}
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
                    >
                        <Text style={{textDecorationLine:'underline'}}>
                            Already a member? Login
                        </Text>
                    </TouchableOpacity>
                </View>
                    
                </View>
            </View>
            </KeyboardAvoidingView>
            
        )
    }
}

const styles = StyleSheet.create({
    Main:{
        flexDirection:'column',
        justifyContent:'space-evenly'
    },
    Img:{
        height:40,
        width:100
    },
    Entrycontainer:{
        flexDirection:'column',
    },
    Entry:{
        
        borderBottomColor:'black',
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
        alignContent:'center'
    },
    Text:{
        fontSize:22,
        fontFamily:'serif',
        fontWeight:'bold',

    },
    Headercontainer:{
        marginTop:'10%'
    },
    Headtext:{
        fontSize:43,
        fontWeight:'bold',
        letterSpacing:5,
        alignSelf:'center',
        fontFamily:'serif'
    },
    Tick:{
        width:'80%',
        alignSelf:'center',
        margin:10,
    }

    
})
