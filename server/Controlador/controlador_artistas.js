import { Artista, Album, Musica } from "../db.js";

const listarArtistas = async (req, res) => {
    try {
        const artistas = await Artista.findAll({
            include: [{ model: Album, as: 'Albums', include: [{ model: Musica, as: 'Musicas' }] }]
        });
        res.status(200).json(artistas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar artistas', details: error.message });
    }
};

const encontrarArtista = async (req, res) => {
    try {
        const { id } = req.params;
        const artista = await Artista.findByPk(id, {
            include: [{ model: Album, as: 'Albums', include: [{ model: Musica, as: 'Musicas' }] }]
        });
        if (artista) {
            res.status(200).json(artista);
        } else {
            res.status(404).json({ error: 'Artista não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao encontrar artista', details: error.message });
    }
};

const deletarArtista = async (req, res) => {
    try {
        const { id } = req.params;
        const artista = await Artista.findByPk(id);
        if (artista) {
            await artista.destroy();
            res.status(200).json({ message: 'Artista deletado com sucesso' });
        } else {
            res.status(404).json({ error: 'Artista não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar artista', details: error.message });
    }
};

const atualizarArtista = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, bio, imageUrl } = req.body;

        const artista = await Artista.findByPk(id);
        if (!artista) {
            return res.status(404).json({ error: 'Artista não encontrado' });
        }

        await artista.update({
            nome: nome || artista.nome,
            bio: bio || artista.bio,
            imageUrl: imageUrl || artista.imageUrl,
        });

        res.status(200).json({ message: 'Artista atualizado com sucesso', artista });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar artista', details: error.message });
    }
};

export { listarArtistas, encontrarArtista, deletarArtista, atualizarArtista };
