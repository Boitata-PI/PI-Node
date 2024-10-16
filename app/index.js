//IMPORTS DE MIDDLEWARES
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Database from './database/Database.js';

//IMPORTS DE ROTAS
import AuthRoutes from './rotas/authRoutes.js';
import AlunoRoutes from './rotas/alunoRoutes.js';
import ProfessorRoutes from './rotas/professorRoutes.js';
import DisciplinaRoutes from './rotas/disciplinaRoutes.js';
import CursoRoutes from './rotas/cursoRoutes.js';
import AlunoDiscRoutes from './rotas/alunoDiscRoutes.js';



//MIDDLEWARES
dotenv.config();

const app = express();
const port = process.env.PORT || 8081;

const corsOptions = {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:8080', 'http://localhost:8080'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-KEY', 'X-Requested-With', 'X-Custom-Header'],
    credentials: true,
    optionsSuccessStatus: 204
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CONECTANDO AO BANCO
const database = new Database(process.env);

try{
    await database.connect();
    console.log(`Conexão ao banco de dados estabelecida!`);

    await database.sync();
    console.log(`Sincronização com o banco de dados realizada!`);
}
catch(e){
    console.error('Erro ao conectar ao banco de dados: ', e);
    throw e;
}


//ROTAS
const alunoRoutes = new AlunoRoutes(database);
const professorRoutes = new ProfessorRoutes(database);
const cursoRoutes = new CursoRoutes(database);
const disciplinaRoutes = new DisciplinaRoutes(database);
const alunoDiscRoutes = new AlunoDiscRoutes(database);
const authRoutes = new AuthRoutes(database);


//INICIANDO ROTAS
app.get('/', (req, res) => res.json({success: true, message: 'BackEnd UniWorks Ativo!'}));

app.use('/aluno', alunoRoutes.getRouter());

app.use('/alunoDisc', alunoDiscRoutes.getRouter());

app.use('/auth', authRoutes.getRouter());

app.use('/curso', cursoRoutes.getRouter());

app.use('/disciplina', disciplinaRoutes.getRouter());

app.use('/professor', professorRoutes.getRouter());

//FALLBACK
app.use((req, res) => res.status(404).json({success: false, message: 'Not Found - Verify HTTP Request'}));



//INICIANDO SERVIDOR
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});