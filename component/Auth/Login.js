import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList, Image, KeyboardAvoidingView } from 'react-native'
import CheckBox from 'react-native-check-box'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          ValueColor:'black',
          Value:'',
          email: '',
          password: '',
          switchValue: false,
          showView:true,
          valueColor:'rgb(37,36,39)',
          passText:'Password',
          passText2:'Re-Password',
          mailText:'email'
        })
    
      }
    validateUser=async(email,password)=>{
        if (email && password){
            await this.props.navigation.navigate('Draw')
        }
        else{
            this.setState({
                ValueColor:'red',
                Value:'Please Enter the valid email and password'
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
                        <Text style={[styles.Headtext,{fontSize:38,letterSpacing:3,color:'rgb(37,36,39)'}]}>
                        LOGIN
                    </Text>
                    <Image
                    style={styles.Img}
                    source={require('../../assets/right.png')}/>
                    </View>
                <View style={{marginTop:'10%',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <Text style={{alignSelf:'center',color:this.state.ValueColor}}>{this.state.Value}</Text>
                <TextInput
                    style={styles.Entry}
                    placeholder='email'
                    placeholderTextColor={this.state.valueColor}
                    onChangeText={(email)=>{this.setState({email})}}
                    value={this.state.email}/>
                    <TextInput
                    style={styles.Entry}
                    placeholder='Password'
                    placeholderTextColor={this.state.valueColor}
                    secureTextEntry={this.state.showView}
                    onChangeText={(password)=>{this.setState({password})}}
                    value={this.state.password}
                    />
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
                    <TouchableOpacity>
                    <Text style={[styles.Tick,{textDecorationLine:'underline',color:'rgb(37,36,39)'}]}>
                        Forget Password?
                    </Text>
                    </TouchableOpacity>
                    
                    </View>
                    <TouchableOpacity style={styles.Button}
                    onPress={()=>this.validateUser(this.state.email,this.state.password)}>
                        <Text style={styles.Text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{alignSelf:'center',marginTop:'5%'}}
                    onPress={()=>this.props.navigation.navigate("Signup")}>
                        <Text style={[styles.Tick,{textDecorationLine:'underline',color:'rgb(37,36,39)'}]}>New member? Signup</Text>
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
        
        borderBottomColor:'black',
        borderBottomWidth:1,
        width:'80%',
        alignSelf:'center',
        margin:10,
        color:'black',
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
        //backgroundColor:'black',
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
        //color:'rgb(131,154,221)'
    }

    
})
