import express from 'express';

//Controllers
import AlunoController from '../controllers/alunoController.js';

class AlunoRoutes {
    constructor(database) {
        this.router = express.Router();
        this.AlunoController = new AlunoController(database);
        this.setupRoutes();
    }

    setupRoutes() {
        //TESTE
        this.router.get('/', (req, res) => res.json({ success: 1 }));

        
        //ALUNOS
        this.router.get('/alunos/list', (req, res) => this.AlunoController.list(req, res));

        this.router.get('/alunos/:id/show', (req, res) => this.AlunoController.show(req, res));

        this.router.post('/alunos/store', (req, res) => this.AlunoController.store(req, res));

        this.router.get('/alunos/:id/update', (req, res) => this.AlunoController.update(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  AlunoRoutes;