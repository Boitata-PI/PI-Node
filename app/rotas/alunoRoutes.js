import express from 'express';

//Controllers
import AlunoController from '../controllers/alunoController.js';

//Middlewares
import jwtVerify from '../middlewares/jwtVerify.js';

class AlunoRoutes {
    constructor(database) {
        this.router = express.Router();
        this.AlunoController = new AlunoController(database);
        this.setupRoutes();
    }


    setupRoutes() {
        this.router.post('/store', (req, res) => this.AlunoController.store(req, res));

        this.router.put('/:id/update', jwtVerify, (req, res) => this.AlunoController.update(req, res));

        this.router.get('/list', jwtVerify, (req, res) => this.AlunoController.list(req, res));

        this.router.get('/:id/find', jwtVerify, (req, res) => this.AlunoController.find(req, res));

        this.router.post('/search', jwtVerify, (req, res) => this.AlunoController.search(req, res));

        this.router.delete('/:id/delete', jwtVerify, (req, res) => this.AlunoController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  AlunoRoutes;