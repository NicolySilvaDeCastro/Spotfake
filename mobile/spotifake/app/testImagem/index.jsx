import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 

export default function App() {
//   const [titulo, setTitulo] = useState('');
//   const [data, setData] = useState('');
//   const [cidade, setCidade] = useState('');
//   const [descricao, setDescricao] = useState('');
  const [imagemUri, setImagemUri] = useState('');
//   const [appMemoria, setAppMemoria] = useState([]);

//   useEffect(() => {
//     buscarMemorias();
//   }, []);

//   const buscarMemorias = async () => { // Buscar todas as memórias salvas
//     const resultadoMemorias = await AsyncStorage.getItem('@memorias');
//     if (resultadoMemorias) {
//       setAppMemoria(JSON.parse(resultadoMemorias));
//     }
//   };

//   const salvarMemoria = async () => { // Salvar nova memória
//     if (titulo && data && cidade && descricao && imagemUri) { // Verificar se todos os campos estão preenchidos
//       const novaMemoria = { titulo, data, cidade, descricao, imagemUri };
//       const novasMemorias = [...appMemoria, novaMemoria]; // Adicionando a nova memória na lista

//       await AsyncStorage.setItem('@memorias', JSON.stringify(novasMemorias));
//       setAppMemoria(novasMemorias);
//       limparFormulario(); 
//     } else {
//       alert('Por favor, preencha todos os campos.'); 
//     }
//   };
 
  const selecionarImagem = async () => {     // Abre a biblioteca de imagens do dispositivo

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Filtra para mostrar apenas imagens
      allowsEditing: true, // Permite que o usuário edite a imagem escolhida
      quality: 1, // Define a qualidade máxima da imagem selecionada
    });

    if (!result.canceled) {
      setImagemUri(result.assets[0].uri); // Acessar o URI da imagem selecionada corretamente
    }
  };

//   const limparFormulario = () => {
//     setTitulo('');
//     setData('');
//     setCidade('');
//     setDescricao('');
//     setImagemUri('');
//   };

//   const apagarMemoria = async (index) => {
//     const novasMemorias = appMemoria.filter((_, i) => i !== index);
//     await AsyncStorage.setItem('@memorias', JSON.stringify(novasMemorias));
//     setAppMemoria(novasMemorias);
//   };

  return (
    <View style={styles.container}>

      {/* <Text style={styles.header}>Memórias</Text>
      
      {appMemoria.length > 0 ? (
        appMemoria.map((memoria, index) => (
          <View key={index} style={styles.memoriaCard}>
            {memoria.imagemUri ? ( // Verificar se imagemUri não está vazio antes de renderizar
              <Image source={{ uri: memoria.imagemUri }} style={styles.imagem} />
            ) : null}
            <Text style={styles.titulo}>{memoria.titulo}</Text>
            <Text>{memoria.descricao}</Text>
            <Text>{memoria.cidade}, {memoria.data}</Text>
            <Button title="Apagar" onPress={() => apagarMemoria(index)} color="red" />
          </View>
        ))
      ) : (
        <Text style={styles.noMemoriaText}>Nenhuma memória salva</Text>
      )} */}

      {/* <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />
      <TextInput
        placeholder="Quando aconteceu? (ano)"
        value={data}
        onChangeText={setData}
        style={styles.input}
      />
      <TextInput
        placeholder="Onde aconteceu? (cidade)"
        value={cidade}
        onChangeText={setCidade}
        style={styles.input}
      />
      <TextInput
        placeholder="Conte sobre a memória"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      /> */}

      <Button title="Selecionar Imagem" onPress={selecionarImagem} />
      {imagemUri ? <Image source={{ uri: imagemUri }} style={styles.previewImagem} /> : null}

      {/* <Button title="Adicionar" onPress={salvarMemoria} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  memoriaCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  previewImagem: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  noMemoriaText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

