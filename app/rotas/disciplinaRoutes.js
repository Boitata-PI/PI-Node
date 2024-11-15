import express from 'express';

//Controllers
import DisciplinaController from '../controllers/disciplinaController.js';

//Middlewares
import jwtVerify from '../middlewares/jwtVerify.js';

class DisciplinaRoutes {
    constructor(database) {
        this.router = express.Router();
        this.DisciplinaController = new DisciplinaController(database);
        this.setupRoutes();
    }

    

    setupRoutes() {
        this.router.post('/store', jwtVerify, (req, res) => this.DisciplinaController.store(req, res));

        this.router.put('/:id/update', jwtVerify, (req, res) => this.DisciplinaController.update(req, res));

        this.router.get('/list', jwtVerify, (req, res) => this.DisciplinaController.list(req, res));

        this.router.get('/:id/find', jwtVerify, (req, res) => this.DisciplinaController.find(req, res));

        this.router.post('/search', jwtVerify, (req, res) => this.DisciplinaController.search(req, res));

        this.router.delete('/:id/delete', jwtVerify, (req, res) => this.DisciplinaController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  DisciplinaRoutes;