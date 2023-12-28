import express from 'express';
import dotenv from 'dotenv'
import ConectarDB from "./config/db.js";

const app = express();

dotenv.config();

ConectarDB();

const PORT = process.env.PORT || 4000

app.listen(4000, () => {
    console.log(`Corriendo en el servidor ${PORT}`);
});