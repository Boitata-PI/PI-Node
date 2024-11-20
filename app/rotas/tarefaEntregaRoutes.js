import express from 'express';

//Controllers
import TarefaEntregaController from '../controllers/tarefaEntregaController.js';

//Middlewares
import jwtVerify from '../middlewares/jwtVerify.js';

class TarefaEntregaRoutes {
    constructor(database) {
        this.router = express.Router();
        this.TarefaEntregaController = new TarefaEntregaController(database);
        this.setupRoutes();
    }

    

    setupRoutes() {
        this.router.post('/store', jwtVerify, (req, res) => this.TarefaEntregaController.store(req, res));

        this.router.put('/:id/update', jwtVerify, (req, res) => this.TarefaEntregaController.update(req, res));

        this.router.get('/list', jwtVerify, (req, res) => this.TarefaEntregaController.list(req, res));

        this.router.get('/:id/find', jwtVerify, (req, res) => this.TarefaEntregaController.find(req, res));

        this.router.post('/search', jwtVerify, (req, res) => this.TarefaEntregaController.search(req, res));

        this.router.delete('/:id/delete', jwtVerify, (req, res) => this.TarefaEntregaController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  TarefaEntregaRoutes;