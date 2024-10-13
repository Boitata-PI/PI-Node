import dotenv from 'dotenv';
import express from 'express';
import AlunoRoutes from './rotas/alunoRoutes.js';
import UsuarioRoutes from './rotas/usuarioRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Database from './database/Database.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8081;

const corsOptions = {
    origin: ['http://127.0.0.1:5500','http://localhost:5500', 'http://localhost:8088', 'http://127.0.0.1:8088', 'http://127.0.0.1:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-KEY', 'X-Requested-With', 'X-Custom-Header'],
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const database = new Database(process.env);

try{
    database.connect();
    console.log(`Conexão ao banco de dados estabelecida`);
}
catch(e){
    console.error('Erro ao conectar ao banco de dados: ', e);
    throw e;
}

const alunoRoutes = new AlunoRoutes(database);
const usuarioRoutes = new UsuarioRoutes(database);


app.get('/', (req, res) => res.json({success: true, message: 'BackEnd UniWorks Ativo!'}));

app.use('/aluno', alunoRoutes.getRouter());
app.use('/usuario', usuarioRoutes.getRouter());


app.use((req, res) => res.status(404).json({success: false, message: 'Not Found'}));




app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});