// Tela de Login
import { View, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { Component } from 'react';

import {auth} from "../config"
import { signInWithEmailAndPassword } from "firebase/auth";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    enter = (email, password) => {
        const endereco = email;
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log(endereco)
            console.log('Bem-vindo');
            this.props.navigation.replace('Groups')
        })
        .catch((error) => {
            console.log('Senha ou Email incorreto');
        })
    }

    render() {
        const {email, password} = this.state;
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Tela de Login</Text>

                <TextInput placeholder="Email" style = {styles.textInput}
                onChangeText={text => this.setState({email: text})}/>

                <TextInput placeholder="Senha" style = {styles.textInput} secureTextEntry
                onChangeText={text => this.setState({password: text})}/>

                <TouchableOpacity onPress={() => this.enter(email, password)}
                style = {styles.button}>
                    <Text>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}
                style = {styles.button}>
                    <Text>Criar conta</Text>
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

export const endereco = endereco;