import express from 'express';
import { listarUsuarios, encontrarUsuario, deletarUsuario } from '../Controlador/controlador_usuarios.js';

const rotasUsuarios = express.Router();
rotasUsuarios.get('/', listarUsuarios);
rotasUsuarios.get('/:id', encontrarUsuario);
rotasUsuarios.delete('/:id', deletarUsuario);

export { rotasUsuarios };
