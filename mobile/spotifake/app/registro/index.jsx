import React, { useState } from 'react';
import { Link } from 'expo-router';
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
            const resposta = await fetch('http://localhost:8000/registro', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nome, email: email, password: senha }) //Preciso mudar isso?
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
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cadastro</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                    placeholder="Nome"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setSobrenome}
                    value={sobrenome}
                    placeholder="Sobrenome "
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="E-mail "
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setDataNascimento}
                    value={dataNascimento}
                    placeholder="Data de nascimento "
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
            

        </SafeAreaView>
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


    //PARTE DO MODAL
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

export default Registro;