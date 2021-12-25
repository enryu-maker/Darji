import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import CheckBox from 'react-native-check-box'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          email: '',
          password: '',
          switchValue: false,
          showView:true
        })
    
      }
    render() {
        
        return (
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
                        LOGIN
                    </Text>
                    <Image
                    style={styles.Img}
                    source={require('../assets/right.png')}/>
                    </View>
                <View style={{marginTop:'10%',flexDirection:'column',justifyContent:'space-evenly'}}>
                <TextInput
                    style={styles.Entry}
                    placeholder='email'
                    placeholderTextColor={'black'}/>
                    <TextInput
                    style={styles.Entry}
                    placeholder='Password'
                    placeholderTextColor={'black'}
                    secureTextEntry={this.state.showView}
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
                    <Text style={[styles.Tick,{textDecorationLine:'underline'}]}>
                        Forget Password?
                    </Text>
                    </TouchableOpacity>
                    
                    </View>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.Text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{alignSelf:'center',marginTop:'5%'}}
                    onPress={()=>this.props.navigation.navigate("Signup")}>
                        <Text style={[styles.Tick,{textDecorationLine:'underline'}]}>New member? Signup</Text>
                    </TouchableOpacity>
                </View>
                    
                </View>
            </View>
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
        color:'black',
        fontSize:18,
        fontFamily:'serif'
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
        width:150,
        alignSelf:'center',
        margin:10,
    }

    
})
