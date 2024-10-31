import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, TextInput, Pressable, StyleSheet, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//requisição do tipo post, para a rota "/login"

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

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [mensagemModal, setMensagemModal] = useState('');

    const registrarUsuario = async () => {
        if ( !email || !senha) {
            setMensagemModal('Os parâmetros email e senha estão incompletos');
            setModalVisible(true);
            return;
        }

        try {
            const resposta = await fetch('http://localhost:8000/autenticacao/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: senha })
            });

            if (resposta.ok) {
                setMensagemModal('Usuário Logado!');

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
                <Text style={styles.headerTitle}>Login</Text>
            </View>
            <View>
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
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Insira sua senha aqui"
                    secureTextEntry={true}
                />
            </View>
            <Pressable onPress={registrarUsuario} style={styles.botao}>
                <Text style={styles.textbotao}>Logar</Text>
            </Pressable>
            <Alerta
                visible={modalVisible}
                message={mensagemModal}
                onClose={() => setModalVisible(false)}
            />
        
                
                <Link href="/home">
                    <Pressable style={styles.botao}>
                        <Text style={styles.textbotao}>Entrar</Text>
                    </Pressable>
                </Link>
                
            </View>
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

export default Login;