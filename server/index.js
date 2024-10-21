import  Express  from "express";

const app = Express()
app.use(Express.json())

app.post('/registro', (req, res) =>{
    const{nome, sobrenome, email, senha, dataNascimento} = req.body
    if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('Voce deve preencher todos os campos')
        return
    }
    res.send("Usuario criado!")
})

app.post('/login', (req, res) =>{
    const{email, senha} = req.body
    if(!email || !senha){
        res.send('Voce deve preencher todos os campos')
        return
    }
    //verifica se o usuario existe no banco de dados
    //comparar a senha do usuario com a senha do banco de dados
    //criar um token de autenticação para este usuario
    //retornar a mensagem com o token
    res.send("Bem vindo de volta!")
})

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


//INSTALAÇÕES
//NODEMON: https://www.npmjs.com/package/nodemon --> para não precisar derrubar o servidor quando atualizar o código
//EXPRESS: https://www.npmjs.com/package/express --> api para navegar entre as diferentes rotas, como por exemplo, o user deletar uma música de sua playlist, sem deletar o banco de dados