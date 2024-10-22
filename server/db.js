import Sequelize from 'sequelize'

const sequelize = new Sequelize( //define a conexão com o banco de dados
    'Spotifake',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
)
const User = sequelize.define('user', { // definindo a tabela do banco de dados
    nome: { //atributos
        type: Sequelize.DataTypes.STRING, //tipo do atributo
        allowNull: false, //não pemite que seja nulo
    },
    sobrenome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true //email único
    },
    dataNascimento: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.DataTypes.ENUM('ativo', 'inativo'),//enum = lista de possibilidades
        allowNull: false,
        defaultValue: 'inativo'//padrão da lista é inativo "não pagou boleto"
    },
})

const criarTabelas = () => {
    sequelize.authenticate().then(() => {
        console.log('conectou')
    })
        .catch((err) => {
            console.log(err)
        })
    sequelize.sync({ force: true }).then(() => {
        console.log('tabela criada')
    })
}

export { User, sequelize, criarTabelas };