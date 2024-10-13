import 'dotenv/config'; 
import express from 'express';
import Api from './rotas/api.js';
import bodyParser from 'body-parser';
import Database from './database/Database.js';
import cors from 'cors';

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

const apiRoutes = new Api(database);

app.use('/api', apiRoutes.getRouter());

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});