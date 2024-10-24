import React from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Login</Text>
            </View>
            <View>
                <TextInput placeholder='e-mail' style={styles.input} />
                <TextInput placeholder='senha' style={styles.input} />
                
                <Pressable style={styles.botao}>
                    <Text style={styles.textbotao}>Entrar</Text>
                </Pressable>
                
                <Link href="/registro" style={styles.botao}>
                    <Pressable style={styles.botao}>
                        <Text style={styles.textbotao}>Criar conta</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        gap: 30,
    },
    header: {
        width: '100%',
        padding: 20,
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
        padding: 20,
        marginBottom: 15,
    },
    botao: {
        backgroundColor: 'black',
        borderRadius: 10,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    textbotao: {
        color: 'white',
        textAlign: 'center', // Adicione esta linha
    },
});
