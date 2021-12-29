import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            Name:'',
            Phone:'',
            ShopName:'',
            ShopAddr:'',
            Email:'',
            Website:'',
        })
    }
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
                    <TouchableOpacity>
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
                    placeholder='Name'
                    placeholderTextColor={'rgb(37,36,39)'}
                    onChangeText={(Name)=>{this.setState({Name})}}/>
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Phone
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder='Phone'
                    onChangeText={(Phone)=>{this.setState({Phone})}}
                    />
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Shop{'\n'}Name
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder='Shop Name'
                    onChangeText={(ShopName)=>{this.setState({ShopName})}}
                    />
                    </View>
                    <View style={[styles.Format]}>
                    <Text style={styles.FormatText}>
                    Shop{'\n'}Address 
                    </Text>
                    <TextInput
                    style={[styles.Input,{marginRight:13}]}
                    placeholder='Shop Address'
                    onChangeText={(ShopAddr)=>{this.setState({ShopAddr})}}
                    />
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Email 
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder='Email'
                    onChangeText={(Email)=>{this.setState({Email})}}
                    />
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Website 
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder='Website'
                    onChangeText={(Website)=>{this.setState({Website})}}
                    />
                    </View>
                    <View style={styles.Format}>
                    <Text style={styles.FormatText}>
                        Logo 
                    </Text>
                    <TextInput
                    style={styles.Input}
                    placeholder='Logo'
                    onChangeText={(Name)=>{this.setState({Name})}}
                    />
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
        justifyContent:'space-around',
        padding:7,
        
    },
    FormatText:{
        padding:15,
        fontSize:18,
        justifyContent:'center'
    },
    Input:{
        borderBottomWidth:1,
        width:'65%',
        margin:5,
        borderColor:'rgb(37,36,39)',
    }

})
