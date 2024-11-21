import { User } from "../db.js"

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await User.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
};

const encontrarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await User.findByPk(id);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao encontrar usuário' });
    }
};

const deletarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await User.findByPk(id);
        if (usuario) {
            await usuario.destroy();
            res.status(200).json({ message: 'Usuário deletado com sucesso' });
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
};


const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params; // Obtém o ID do usuário a ser atualizado
        const { nome, sobrenome, email, senha, dataNascimento, profile_image } = req.body; // Obtém os dados do corpo da requisição

        // Encontra o usuário pelo ID
        const usuario = await User.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Atualiza os dados do usuário
        await usuario.update({
            nome: nome || usuario.nome,
            sobrenome: sobrenome || usuario.sobrenome,
            email: email || usuario.email,
            senha: senha || usuario.senha,
            dataNascimento: dataNascimento || usuario.dataNascimento,
            profile_image: profile_image || usuario.profile_image,
        });

        res.status(200).json({ message: 'Usuário atualizado com sucesso', usuario });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message });
    }
};

export { listarUsuarios, encontrarUsuario, deletarUsuario, atualizarUsuario }

//ANOTAÇÕES

// const listar  =  async (req, res) =>{

//     res.send("Usuario criado!")
// }


// const deletar = async (req, res) =>{

//     res.send("Usuario criado!")
// }

// const userExiste = await User.findOne({ where: { email:email } })
// if (userExiste){
//     res.send('Usuario já existe')
//     return
// }

// export { listar, deletar, userExiste }









//Criar rota:
//const userExiste = await User.findOne({ where: { email:email } })
// if (userExiste){
//     res.send('Usuario já existe')
//     return
// }

//"Tela para editar Perfil"

//LISTAR USERS:
//[{nome},{email},{status}]

//PEGAR USER:
//GET{nome, sobrenome, email, status, dataNascimento}

//DELETAR USER:
//DELETE 

//Segunda Entrega: Backend organizado e Tela de Perfil