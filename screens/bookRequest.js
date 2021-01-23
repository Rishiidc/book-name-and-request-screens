import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default class BookRequest extends Component {
    constructor(){
        super()
        this.state={
         BookName:'',
         reason:''
        }
      }
    render(){
        return(
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="Book Name"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              BookName: text
            })
          }}
        />
         <TextInput
          style={[styles.loginBox,{height:300}]}
          placeholder="Reason"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              reason: text
            })
          }}
        />
        </View></View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    },
    ModalStyle: {
      flex:1, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:"#ffff", marginRight:30, marginLeft : 30, marginTop:80, marginBottom:80    
    }
  })
  