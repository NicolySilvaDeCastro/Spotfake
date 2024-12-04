import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router'; 
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';

export default function Home() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/artistas'); 
                const data = await response.json();
                setDados(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ImageBackground
            source={{ uri: 'https://wallpaper.forfun.com/fetch/7d/7d79917a27cfd4d071634e26489ec754.jpeg' }}
            style={styles.background}
        >
            <ScrollView contentContainerStyle={styles.container}>

                {/* Cabeçalho */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Home</Text>
                </View>

                {/* Seção de Artistas */}
                <Text style={styles.sectionTitle}>Artistas</Text>
                <View style={styles.section}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {dados.map((artista) => (
                            <View key={artista.id} style={styles.item}>
                                <Image source={{ uri: artista.imageUrl }} style={styles.itemImage} />
                                <Text style={styles.itemText}>{artista.nome}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Seção de Álbuns */}
                <Text style={styles.sectionTitle}>Álbuns</Text>
                <View style={styles.section}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {dados.flatMap((artista) => artista.Albums).map((album) => (
                            <View key={album.id} style={styles.item}>
                                <Image source={{ uri: album.coverImageUrl }} style={styles.itemImage} />
                                <Text style={styles.itemText}>{album.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Seção de Músicas */}
                <Text style={styles.sectionTitle}>Músicas</Text>
                <View style={styles.section}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {dados.flatMap((artista) =>
                            artista.Albums.flatMap((album) => album.Musicas)
                        ).map((musica) => (
                            <View key={musica.id} style={styles.item}>
                                <Image source={{ uri: musica.fileUrl }} style={styles.itemImage} />
                                <Text style={styles.itemText}>{musica.titulo}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Rodapé */}
                <View style={styles.footer}>
                    <Link href="/perfil"> 
                        <Pressable style={styles.imageButton}>
                            <Image source={require('../../assets/images/user_processed.png')} style={styles.image} />
                        </Pressable>
                    </Link>
                    <Link href="/home"> 
                        <Pressable style={styles.imageButton}>
                            <Image source={require('../../assets/images/home_processed.png')} style={styles.image} />
                        </Pressable>
                    </Link>
                    <Link href="/listas">
                        <Pressable style={styles.imageButton}>
                            <Image source={require('../../assets/images/fone.png')} style={styles.image} />
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
    },
    section: {
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    item: {
        alignItems: 'center',
        marginRight: 15, // Espaçamento horizontal entre os itens
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 5, // Espaçamento entre a imagem e o texto
    },
    itemText: {
        fontSize: 14,
        color: "white",
        textAlign: 'center',
    },
    footer: {
        width: '100%',
        height: 60,
        backgroundColor: '#3a5a89',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
});
