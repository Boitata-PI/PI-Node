//Iniciando Bibliotecas
const express = require('../app/node_modules/express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config()
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());


app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/public', express.static('/public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));


//ROTAS
//INDEX
app.get('/', (req, res) => res.sendFile(__dirname +'/views/login.html'));


app.get('/index', (req, res) => res.sendFile(__dirname +'/views/index.html'));

app.get('/alunos', (req, res) => res.sendFile(__dirname +'/views/alunos.html'));

app.get('/cadastroAluno', (req, res) => res.sendFile(__dirname +'/views/cadastroAluno.html'));

app.get('/cadastroCurso', (req, res) => res.sendFile(__dirname +'/views/cadastroCurso.html'));

app.get('/cadastroDisciplina', (req, res) => res.sendFile(__dirname +'/views/cadastroDisciplina.html'));

app.get('/disciplicas', (req, res) => res.sendFile(__dirname +'/views/disciplinas.html'));

app.get('/grupos', (req, res) => res.sendFile(__dirname +'/views/grupos.html'));

app.get('/menuCadastro', (req, res) => res.sendFile(__dirname +'/views/menuCadastro.html'));

app.get('/menuCurso', (req, res) => res.sendFile(__dirname +'/views/menuCurso.html'));

app.get('/menuTurmas', (req, res) => res.sendFile(__dirname +'/views/menuTurmas.html'));

app.get('/pagDesenvolvimento', (req, res) => res.sendFile(__dirname +'/views/pagDesenvolvimento.html'));

app.get('/turmas', (req, res) => res.sendFile(__dirname +'/views/turmas.html'));



//CADASTRO
app.get('/registro', (req, res) => res.sendFile(__dirname +'/views/registro.html'));



//FALLBACK
app.use((req, res) => res.redirect('/404'));

//ERRO 404
app.get('/404', (req, res) => res.sendFile(__dirname +'/views/errors/404.html'));



//Iniciando Servidor
app.listen(PORT, () => {
    console.log(`Servidor Ativo na Porta ${PORT}!`);
});