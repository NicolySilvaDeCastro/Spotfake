import React from 'react';
import { Link } from 'expo-router';
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TextInput, Pressable, ImageBackground } from 'react-native';

export default function Login() {
    return (
        <ImageBackground
        source={{ uri: 'https://wallpaper.forfun.com/fetch/7d/7d79917a27cfd4d071634e26489ec754.jpeg' }}style={styles.background}>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Home</Text>
            </View>

            <View style={styles.footer}>
                    <Text style={styles.itensfooter}>Configurações</Text>
                    <Text style={styles.itensfooter}>Ajuda</Text>
                </View>
        </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        gap: 30,
    },
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: '#3a5a89', 
        alignItems: 'center',
        height: 50,
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center'
        
    },
    titulo: {
        color: 'white',
    },

    input: {
        width: '100%',
        height: 40,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'lightgray',
        padding: 20,
        marginBottom: 15, 
    },
    botao: {
        backgroundColor: 'black',
        borderRadius: 10,
        height: 30,
        width: 200,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,  
    },
    textbotao: {
        color: 'white',
    },


    footer: {
        width: '100%',
        height: 50,
        padding: 20,
        backgroundColor: '#3a5a89', 
        flexDirection: 'row',
        position: 'absolute',
        bottom: '0%'
    },
    itensfooter: {
        color: 'white',
        fontWeight: 'bold',
    },
});