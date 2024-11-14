import  Express  from "express";
// import { criarTabelas } from "./db.js";
import cors from "cors"
import {rotas} from './Roteamento/rotas_autenticacao.js'
import { rotasUsuarios } from './Roteamento/rotas_usuarios.js';

const app = Express()
app.use(Express.json())
app.use(cors())
// criarTabelas()

app.use('/autenticacao', rotas)
app.use('/usuarios', rotasUsuarios);



app.listen(8000)



//TIPOS DE ROTAS
// GET quando é preciso PEGAR uma informação
// POST quando é preciso MANDAR uma informação


//MODO COMPLICADO
    // if (nome != '' && nome != null){
    //     res.send('O campo nome deve ser preenchido')
    // } else if (sobrenome != '' && sobrenome != null){
    //     res.send('O campo sobrenome deve ser preenchido')
    // }






// import { createServer } from 'node:http'

// const servidor = createServer((req, res) => { //requisição e resposta
//     console.log('qualquer coisa')
//     res.write('ta funcionando 2')                                         
//     return res.end()
// })
// //servidor onde o servidor roda
// servidor.listen(8000)



//package.json alterações:

//LINHA 06
//  "type": "module",

//LINHA 09 
//"dev": "nodemon index.js"
//

/*// index.js
import express from 'express';
import cors from 'cors';
import { rotasUsuarios } from './Roteamento/rotas_usuarios.js';

const app = express();
app.use(express.json());
app.use(cors());

// Rotas para usuários
app.use('/usuarios', rotasUsuarios);

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});
 */




//INSTALAÇÕES
//NODEMON: https://www.npmjs.com/package/nodemon --> para não precisar derrubar o servidor quando atualizar o código
//EXPRESS: https://www.npmjs.com/package/express --> api para navegar entre as diferentes rotas, como por exemplo, o user deletar uma música de sua playlist, sem deletar o banco de dados