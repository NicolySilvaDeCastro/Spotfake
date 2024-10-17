import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';


export default function login() {




    return(
        <View style={styles.container}>

        <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
        </View>

        <View>
        <TextInput placeholder='e-mail' style={styles.input}/>
        <TextInput placeholder='senha' style={styles.input}/>
        <Pressable style={styles.botao}>
        <Text style={styles.textbotao}>Entrar</Text>
        </Pressable>
        <Pressable style={styles.botao}>
        <Text style={styles.textbotao}>Criar conta</Text>
        </Pressable>

        </View>

        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  header: {
    width: '100%',
    padding: 20,
    gap: 20,
    backgroundColor: 'black', 
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'lightgray',
    gap: 20,
    padding: 20
  },
  botao: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 20
  },
  textbotao: {
    color: 'white'
  },
});
