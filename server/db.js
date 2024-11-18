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

const Artista = sequelize.define('Artist', {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
    },
    imageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    }
})


const Album = sequelize.define('Album', {
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    releaseYear: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },
    coverImageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
});

Album.belongsTo(Artista, {
    foreignKey: 'artistaId',
    onDelete: 'CASCADE',
});

Artista.hasMany(Album, {
    foreignKey: 'artistaId',
    as: 'Albums'
  });

const Musica = sequelize.define('Musica', {
    titulo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    duracao: {
        type: Sequelize.DataTypes.INTEGER,  // Duração em segundos
        allowNull: false,
    },
    fileUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
});

Musica.belongsTo(Album, {
    foreignKey: 'albumId',
    onDelete: 'CASCADE',
});
Musica.belongsTo(Artista, {
    foreignKey: 'artistaId',
    onDelete: 'CASCADE',
});
Album.hasMany(Musica, {
    foreignKey: 'albumId',
    as: 'Musicas'
  });

const criarTabelas = () => {
    sequelize.authenticate().then(() => {
        console.log('conectou')
    })
        .catch((err) => {
            console.log(err)
        })
    sequelize.sync({ alter: true }).then(() => {
        console.log('tabela criada')
    })
}

export { User, sequelize, criarTabelas, Artista, Album, Musica };