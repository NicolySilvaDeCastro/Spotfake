import React from 'react';
import { Link } from 'expo-router'; // Importando o Link para navegação
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';

export default function Login() {
    return (
        <ImageBackground
            source={{ uri: 'https://wallpaper.forfun.com/fetch/7d/7d79917a27cfd4d071634e26489ec754.jpeg' }}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Home</Text>
                </View>

                <View style={styles.footer}>
                    <Link  href="/perfil"> {/* Caminho para a página que deseja navegar */}
                        <Pressable style={styles.imageButton}>
                            <Image
                                source={require('../../assets/images/user_processed.png')} // Caminho correto para a imagem
                                style={styles.image}
                            />
                        </Pressable>
                    </Link>
                    
                    <Link  href="/home"> {/* Caminho para a página que deseja navegar */}
                        <Pressable style={styles.imageButton}>
                            <Image
                                source={require('../../assets/images/home_processed.png')} // Caminho correto para a imagem
                                style={styles.image}
                            />
                        </Pressable>
                    </Link>
                    <Link  href="/listas"> {/* Caminho para a página que deseja navegar */}
                        <Pressable style={styles.imageButton}>
                            <Image
                                source={require('../../assets/images/fone.png')} // Caminho correto para a imagem
                                style={styles.image}
                            />
                        </Pressable>
                    </Link>



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
        alignItems: 'center',
    },
    imageButton: {
        width: 50,        // Ajustado para caber no footer
        height: 50,       // Ajustado para caber no footer
        borderRadius: 25, // Tornar a imagem circular
        overflow: 'hidden',
        justifyContent: 'center', // Centralizando a imagem
        alignItems: 'center',     // Centralizando a imagem
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 25, // Bordas arredondadas para a imagem
    },
    footer: {
        width: '100%',
        height: 60,        // Ajustado para dar mais espaço no footer
        backgroundColor: '#3a5a89',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,         // Corrigido para estar sempre no fundo
        justifyContent: 'center', // Centraliza a imagem dentro do footer
        alignItems: 'center',     // Alinha a imagem verticalmente
    },
});
