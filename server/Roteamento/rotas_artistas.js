import express from 'express';
import { listarArtistas, encontrarArtista, deletarArtista, atualizarArtista } from '../Controlador/controlador_artistas.js';

const rotasArtistas = express.Router();

rotasArtistas.get('/', listarArtistas);
rotasArtistas.get('/:id', encontrarArtista);
rotasArtistas.delete('/:id', deletarArtista);
rotasArtistas.put('/:id', atualizarArtista);

export { rotasArtistas };
