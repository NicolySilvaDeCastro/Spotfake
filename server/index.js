import  Express  from "express";
import { criarTabelas, User } from "./db.js";
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken";
import cors from "cors"

const app = Express()
app.use(Express.json())
app.use(cors())
// criarTabelas()

app.post('/registro', async (req, res) =>{
    const{nome, sobrenome, email, senha, dataNascimento} = req.body
    if(!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('Voce deve preencher todos os campos')
        return
    }
    const userExiste = await User.findOne({ where: { email:email } })
    if (userExiste){
        res.send('Usuario já existe')
        return
    }
    const senhaCriptografada = bcryptjs.hashSync(senha, 10)

    const usuarioCriado = await User.create({nome, sobrenome, email, dataNascimento, senha: senhaCriptografada })


    res.send("Usuario criado!")
})



app.post('/login', async (req, res) =>{
    const{email, senha} = req.body
    if(!email || !senha){
        res.send('Voce deve preencher todos os campos')
        return
    }
    const userExiste = await User.findOne({ where: { email:email } })
    if (!userExiste){
        res.send('Usuario nao existe')
        return
    }
    const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    if (!senhaValida){
        res.send('senha invalida')
        return
    }

    const token = jsonwebtoken.sign(
        {
            "nome_completo": `${userExiste.nome} ${userExiste.sobrenome}`,
            "email": userExiste.email,
            "status": userExiste.status
        },
        'chavecriptografiajwt',
        {expiresIn: 1000*60*5}//milisegundos x segundos x minutos
        //payload, senha de criptografia, tempo de expiração
    )


    res.send({
        msg: "ok usuario logado",
        tokenJWT: token
    })
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