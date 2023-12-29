import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ConectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express();
app.use(express.json());

dotenv.config();

ConectarDB();

//CORS
const whilelist = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback) {
        if (whilelist.includes(origin)) {
            //Permisos para API
            callback(null, true);
        } else {
            //Permiso denegado
            callback(new Error('Not allowed by CORS'));
        }
    }
}

app.use(cors(corsOptions));

//ROUTING
app.use('/api/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 4000

app.listen(4000, () => {
    console.log(`Corriendo en el servidor ${PORT}`);
});