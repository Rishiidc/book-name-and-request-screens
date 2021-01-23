import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert, Modal, KeyboardAvoidingView} from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default class BookDonate extends Component {
    render(){
        return(<View><Text>Book Donate Screen</Text></View>)
    }
}