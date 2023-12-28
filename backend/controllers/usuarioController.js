import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";

const RegistrarUsuario = async (req, res) => {

    const { email } = req.body;
    const existeusuario = await Usuario.findOne({ email });

    if (existeusuario) {
        const error = new Error('El usuario ya existe');
        return res.status(400).json({ msg: error.message});
    }

    try {
        const usuario = new Usuario(req.body);
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
    } catch (error) {
        console.log(`Error al crear usuario: ${error.message}`);
    }

    

}

const autenticar = async (req, res) => {

    const { email, password } = req.body;

    //  COMPROBAR SI EL USUARIO YA EXISTE
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        const error = new Error('El usuario no existe');
        return res.status(404).json(error.message);
    }

    // COMPROBAR SI EL PASSWORD ES CORRECTO
    if(await usuario.comprobarPassword(password)){
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            token: generarJWT(usuario._id),
        })
    } else {
        const error = new Error('El password es Incorrecto');
        return res.status(404).json(error.message);
    }
}

const perfil = async (req, res) => {
    const {usuario} = req;

    res.json(usuario);

}

export { RegistrarUsuario, autenticar, perfil }