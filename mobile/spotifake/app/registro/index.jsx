import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, TextInput, Pressable, StyleSheet, Modal, ImageBackground } from 'react-native';
import { ScrollView } from "react-native";

// ESSA PARTE MOSTRA UM MODAL
const Alerta = ({ visible, message, onClose }) => (
    <Modal
        transparent={true}
        visible={visible}
        animationType="slide"
        onRequestClose={onClose}
    >
        <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalText}>{message}</Text>
                <Pressable onPress={onClose} style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Fechar</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
);

const Registro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [mensagemModal, setMensagemModal] = useState('');

    const registrarUsuario = async () => {
        if (!nome || !email || !senha) {
            setMensagemModal('Os parâmetros nome, email e senha devem ser fornecidos');
            setModalVisible(true);
            return;
        }

        try {
            const resposta = await fetch('http://localhost:8000/autenticacao/registro', { // Substitua pelo IP correto
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                senha: senha,
                dataNascimento: dataNascimento
            })
        });

            if (resposta.ok) {
                setMensagemModal('Usuário criado com sucesso');
            } else {
                const errorData = await resposta.json();
                setMensagemModal(errorData.message || 'Ocorreu um erro');
            }
        } catch (error) {
            setMensagemModal('Erro na conexão');
        }

        setModalVisible(true);
    }

    return (
        <ImageBackground
        source={{ uri: 'https://wallpaper.forfun.com/fetch/7d/7d79917a27cfd4d071634e26489ec754.jpeg' }}style={styles.background}> 
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cadastro</Text>
            </View>
            <View>
            <Text style={styles.lista}>Nome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                    placeholder="Nome"
                />
                <Text style={styles.lista}>Sobrenome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setSobrenome}
                    value={sobrenome}
                    placeholder="Sobrenome"
                />
                <Text style={styles.lista}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="E-mail"
                />
                <Text style={styles.lista}>Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                <Text style={styles.lista}>Data de Nascimento</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDataNascimento}
                    value={dataNascimento}
                    placeholder="Data de nascimento"
                />
            </View>

            <Pressable onPress={registrarUsuario} style={styles.botao}>
                <Text style={styles.textbotao}>Cadastrar</Text>
            </Pressable>

            <Alerta
                visible={modalVisible}
                message={mensagemModal}
                onClose={() => setModalVisible(false)}
            />

            <Link href="/login">
                <Pressable style={styles.botao}>
                    <Text style={styles.textbotao}>Entrar</Text>
                </Pressable>
            </Link>
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
        gap: 30
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
    lista: {
        color: 'white',
        marginBottom: 5,
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
    input: {
        width: '100%',
        height: 40,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 15,
    },
    botao: {
        backgroundColor: '#3a5a89',
        borderRadius: 10,
        height: 50, 
        width: 200,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    textbotao: {
        color: 'white',
    },
    // PARTE DO MODAL
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: '#00609c',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 18,
    }
});

export default Registro;
