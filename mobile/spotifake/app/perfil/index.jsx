import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 
// import { AdvancedImage } from 'cloudinary-react-native';
// import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
// const cld = new Cloudinary({
//     cloud: {
//         cloudName: 'demo'
//     },
//     url: ( 
//         {secure: true} 
//     )
// });

const Perfil = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [imagemUri, setImagemUri] = useState('');


    const selecionarImagem = async () => { // Abre a biblioteca de imagens do dispositivo

        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images, // Filtra para mostrar apenas imagens
          allowsEditing: true, // Permite que o usuário edite a imagem escolhida
          quality: 1, // Define a qualidade máxima da imagem selecionada
        });
    
        if (!result.canceled) {
          setImagemUri(result.assets[0].uri); // Acessar o URI da imagem selecionada corretamente
        }
      };

    return (
        <ImageBackground
            source={{ uri: 'https://wallpaper.forfun.com/fetch/7d/7d79917a27cfd4d071634e26489ec754.jpeg' }}
            style={styles.background}
        >
            <View style={styles.container}>
              
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Perfil</Text>
                    <Link href="/home" style={styles.voltar}>
                    <Pressable>
                    <Text style={styles.textButton}>Voltar</Text>
                    </Pressable>
                    </Link>
                </View>

                
                <View style={styles.containerFoto}>
                    {/* <Image
                        source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' }} // URL da foto de perfil
                        style={styles.foto}
                    /> 

                     <Pressable style={styles.mudarFoto}>
                        <Text style={styles.textButton}>Alterar Foto</Text>
                    </Pressable> */}

                    {imagemUri ? <Image source={{ uri: imagemUri }} style={styles.previewImagem} /> : null}
                    <Pressable onPress={selecionarImagem} style={styles.botaoSalvar}>
                    <Text style={styles.textButton}>Selecionar Imagem</Text>
                    </Pressable>

                </View>

                
                <View style={styles.formulario}>
                    <Text style={styles.lista}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome"
                        value={name}
                        onChangeText={setName}
                    />

                    <Text style={styles.lista}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.lista}>Telefone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu telefone"
                        value={phone}
                        onChangeText={setPhone}
                    />

                    <Pressable style={styles.botaoSalvar}>
                        <Text style={styles.textButton}>Salvar Alterações</Text>
                    </Pressable>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.itensfooter}>Configurações</Text>
                    <Text style={styles.itensfooter}>Ajuda</Text>
                </View>
            </View>
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
    },
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: '#3a5a89', 
        alignItems: 'center',

    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',

    },
    voltar: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#3a5a89',
        padding: 10,
        borderRadius: 5,
        fontSize: 20
    },
    containerFoto: {
        alignItems: 'center',
        marginTop: 20,
      },
      previewImagem: {
        width: 100,          // Defina uma largura fixa para centralizar
        height: 100,         // Altura igual à largura
        marginVertical: 10,
        borderRadius: 50,    // Tornar a imagem redonda
      },
      botaoSalvar: {
        backgroundColor: '#3a5a89',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
    // containerFoto: {
    //     alignItems: 'center',
    //     marginTop: 20,
    // },
    // foto: {
    //     width: 100,
    //     height: 100,
    //     borderRadius: 50,
    // },
    mudarFoto: {
        marginTop: 10,
        backgroundColor: '#3a5a89',
        padding: 10,
        borderRadius: 5,
    },
    formulario: {
        width: '80%',
        marginTop: 20,
    },
    lista: {
        color: 'white',
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    botaoSalvar: {
        backgroundColor: '#3a5a89',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    footer: {
        width: '100%',
        height: 50,
        padding: 20,
        backgroundColor: '#3a5a89', 
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
    },
    itensfooter: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Perfil;