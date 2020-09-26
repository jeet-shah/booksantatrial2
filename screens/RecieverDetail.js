import React,{Component} from 'react';
import { Text,View,TouchableOpacity,StyleSheet,TextInput,Alert, SnapshotViewIOS } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader'

export default class RecieverDetail extends Component{

    constructor(){
        super()
        this.state = {
            userID:firebase.auth().currentUser.email
        }
    }

    render(){
        return(
            <View>
                <Text> Hello </Text>
            </View>
        )
    }
}