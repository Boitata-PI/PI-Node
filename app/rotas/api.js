import express from 'express';

//Controllers
import UsuarioController from '../controllers/usuarioController.js';
//import AlunoController from '../controllers/alunoController.js';

class Api {
    constructor(database) {
        this.router = express.Router();
        this.UsuarioController = new UsuarioController(database);
        //this.AlunoController = new AlunoController(database);
        this.setupRoutes();
    }

    setupRoutes() {
        //TESTE
        this.router.get('/', (req, res) => res.json({ success: 1 }));



        //AUTH
        this.router.post('/auth/login', (req, res) => this.UsuarioController.store(req, res));

        this.router.post('/auth/register', (req, res) => this.UsuarioController.register(req, res));

        this.router.post('/auth/logout', (req, res) => this.UsuarioController.logout(req, res));



        //ALUNOS
        //this.router.get('/alunos/list', (req, res) => this.AlunoController.list(req, res));

        //this.router.get('/alunos/:id/show', (req, res) => this.AlunoController.show(req, res));

        //this.router.post('/alunos/store', (req, res) => this.AlunoController.store(req, res));

        //this.router.get('/alunos/:id/update', (req, res) => this.AlunoController.update(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default Api;