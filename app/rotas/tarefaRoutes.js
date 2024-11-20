import express from 'express';

//Controllers
import TarefaController from '../controllers/tarefaController.js';

//Middlewares
import jwtVerify from '../middlewares/jwtVerify.js';

class TarefaRoutes {
    constructor(database) {
        this.router = express.Router();
        this.TarefaController = new TarefaController(database);
        this.setupRoutes();
    }

    

    setupRoutes() {
        this.router.post('/store', jwtVerify, (req, res) => this.TarefaController.store(req, res));

        this.router.put('/:id/update', jwtVerify, (req, res) => this.TarefaController.update(req, res));

        this.router.get('/list', jwtVerify, (req, res) => this.TarefaController.list(req, res));

        this.router.get('/:id/find', jwtVerify, (req, res) => this.TarefaController.find(req, res));

        this.router.post('/search', jwtVerify, (req, res) => this.TarefaController.search(req, res));

        this.router.delete('/:id/delete', jwtVerify, (req, res) => this.TarefaController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  TarefaRoutes;