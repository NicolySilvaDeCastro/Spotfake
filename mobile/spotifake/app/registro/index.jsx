import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cadastro</Text>
            </View>
            <View>
                <TextInput placeholder='nome' style={styles.input} />
                <TextInput placeholder='sobrenome' style={styles.input} />
                <TextInput placeholder='e-mail' style={styles.input} />
                <TextInput placeholder='senha' style={styles.input} />
                <TextInput placeholder='data de nascimento' style={styles.input} />
                <Pressable style={styles.botao}>
                    <Text style={styles.textbotao}>Entrar</Text>
                </Pressable>
                <Pressable style={styles.botao}>
                    <Text style={styles.textbotao}>Criar conta</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        gap: 30
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
        marginBottom: 15,  // Adicione uma margem inferior
    },
    botao: {
        backgroundColor: 'black',
        borderRadius: 10,
        height: 40,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,  // Adicione uma margem inferior
    },
    textbotao: {
        color: 'white',
    },
});
