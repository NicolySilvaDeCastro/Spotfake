import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
                <TouchableOpacity onPress={onClose} style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    input: {
        width: '95%',
        height: 40,
        margin: 10,
        backgroundColor: '#28231d',
        fontSize: 15,
        color: 'lightgray',
        borderRadius: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        color: '#006091'
    },
    safearea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#28231d',
    },
    botao: {
        backgroundColor: '#00609c',
        padding: 10,
        borderRadius: 5,
        width: 150,
        alignItems: 'center'
    },
    botaoTexto: {
        color: 'lightgray',
        fontSize: 20,
        textAlign: 'center',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
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

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [mensagemModal, setMensagemModal] = useState('');

    const registrarUsuario = async () => {
        if (!nome || !email || !senha) {
            setMensagemModal('Os parâmetros nome, email e senha devem ser fornecidos');
            setModalVisible(true);
            return;
        }

        try {
            const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nome, email: email, password: senha })
            });

            if (resposta.ok) {
                setMensagemModal('Usuário criado com sucesso');
            } else {
                setMensagemModal('Ocorreu um erro');
            }
        } catch (error) {
            setMensagemModal('Erro na conexão');
        }

        setModalVisible(true);
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <View>
                <Text style={styles.titulo}>Registre-se</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Insira seu e-mail aqui"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                    placeholder="Insira seu nome aqui"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Insira sua senha aqui"
                    secureTextEntry={true}
                />
            </View>
            <Pressable onPress={registrarUsuario} style={styles.botao}>
                <Text style={styles.botaoTexto}>Cadastrar</Text>
            </Pressable>
            <Alerta
                visible={modalVisible}
                message={mensagemModal}
                onClose={() => setModalVisible(false)}
            />
        </SafeAreaView>
    );
}

export default SignUp;