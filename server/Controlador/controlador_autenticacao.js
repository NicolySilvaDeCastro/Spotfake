import bcryptjs from "bcryptjs"
import { User } from "../db.js"
import jsonwebtoken from "jsonwebtoken";



const registro =  async (req, res) =>{
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
}


const login = async (req, res) =>{
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
}

export { registro, login }