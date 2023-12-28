import express from "express";
const route = express.Router();

import { RegistrarUsuario, autenticar, perfil } from '../controllers/usuarioController.js'
import CheckAuth from '../middleware/checkAuth.js'

//AUTENTICACION Y CREACION DE USUARIOS
route.post('/', RegistrarUsuario);
route.post('/login', autenticar);

route.get('/perfil', CheckAuth, perfil);

export default route;