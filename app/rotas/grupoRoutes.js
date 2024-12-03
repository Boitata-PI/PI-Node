import express from 'express';

//Controllers
import GrupoController from '../controllers/grupoController.js';

//Middlewares
import jwtVerify from '../middlewares/jwtVerify.js';

class GrupoRoutes {
    constructor(database) {
        this.router = express.Router();
        this.GrupoController = new GrupoController(database);
        this.setupRoutes();
    }

    

    setupRoutes() {
        this.router.post('/store', jwtVerify, (req, res) => this.GrupoController.store(req, res));

        this.router.put('/:id/update', jwtVerify, (req, res) => this.GrupoController.update(req, res));

        this.router.get('/list', jwtVerify, (req, res) => this.GrupoController.list(req, res));

        this.router.get('/:id/find', jwtVerify, (req, res) => this.GrupoController.find(req, res));

        this.router.post('/search', jwtVerify, (req, res) => this.GrupoController.search(req, res));

        this.router.delete('/:id/delete', jwtVerify, (req, res) => this.GrupoController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  GrupoRoutes;