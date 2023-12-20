// Tela da Conversa
import { View, StyleSheet, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, FlatList } from "react-native";
import React, { Component } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import {endereco} from './Login';

// import {auth} from "../config"
// import { signInWithEmailAndPassword } from "firebase/auth";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            mensagem: ''
        }
    }

    enviar = (mensagem, endereco) => {
        console.log(endereco)
        const db = getDatabase();
        set(ref(db, '/messages/' + endereco), {
            mensagem: mensagem
        });
    }

    render() {
        const {mensagem} = this.state;
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Tela de Chat</Text>

                <FlatList
                    // Mensagens
                />

                <TextInput placeholder="Digite sua mensagem"
                onChangeText={text => this.setState({mensagem: text})}
                />

                <TouchableOpacity
                onPress={() => this.enviar(mensagem, endereco)}>
                    <Text>Enviar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Groups')}
                style = {styles.button}>
                    <Text>Voltar</Text>
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