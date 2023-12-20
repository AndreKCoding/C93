// Tela de Registro
import { View, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { Component } from 'react';
import { getDatabase, ref, set } from "firebase/database";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

const db = getDatabase();

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    registrar = (nome, email, password, confirmPassword) => {
        if (password === confirmPassword) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                    console.log('Usuário Registrado!');
                    this.props.navigation.replace('Groups')
                    // ...

                    set(ref(db, '/users/' + userCredential.user.uid), {
                        nome: nome,
                        email: userCredential.user.email
                    });
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    console.log(error);
                    // ..
                });
        }
        else {
            console.log('As senhas são diferentes.')
        }
    }

    render() {
        const {nome, email, password, confirmPassword} = this.state;
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Tela de Registro</Text>

                <TextInput placeholder="Nome de usuário"
                onChangeText={text => this.setState({nome: text})} style = {styles.textInput}/>

                <TextInput placeholder="Email" 
                onChangeText={text => this.setState({email: text})} style = {styles.textInput}/>

                <TextInput placeholder="Senha" secureTextEntry
                onChangeText={text => this.setState({password: text})} style = {styles.textInput}/>

                <TextInput placeholder="Confirmar senha" secureTextEntry
                onChangeText={text => this.setState({confirmPassword: text})} style = {styles.textInput}/>

                <TouchableOpacity onPress={() => this.registrar(nome, email, password, confirmPassword)}
                style = {styles.button}>
                    <Text>Criar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}
                style = {styles.button}>
                    <Text>Fazer Login</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

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