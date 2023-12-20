// Tela dos Grupos
import { View, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, FlatList } from "react-native";
import React, { Component } from 'react';

// import {auth} from "../config"
// import { signInWithEmailAndPassword } from "firebase/auth";

export default class Groups extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Tela de Grupos</Text>
                <FlatList
                    // Grupos
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}
                style = {styles.button}>
                    <Text>Chat</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#BBDEFB',
        height: '100%'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20
    },
    button: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        width: 200,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: '#B2DFDB'
    },
    textInput: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        width: 300,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        textAlign: 'center'
    }
})