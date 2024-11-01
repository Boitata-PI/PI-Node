//Iniciando Bibliotecas
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config()
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/src', express.static(__dirname + '/src'));

app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});



//Iniciando Servidor
app.listen(PORT, () => {
    console.log(`Servidor Ativo na Porta ${PORT}!`);
});