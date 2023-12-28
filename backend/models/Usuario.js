import mongoose from "mongoose"
import bcrypt from "bcrypt"

const usuarioschema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String
    }
},
{
    timestamps: true
});

usuarioschema.pre('save', async function(next) {
    if (!this.isModified('pasword')) {
        next();    
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

usuarioschema.methods.comprobarPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const Usuario = mongoose.model('Usuarios', usuarioschema);
export default Usuario;