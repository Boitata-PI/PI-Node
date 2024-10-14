import express from 'express';

//Controllers
import CursoController from '../controllers/CursoController.js';

class CursoRoutes {
    constructor(database) {
        this.router = express.Router();
        this.CursoController = new CursoController(database);
        this.setupRoutes();
    }

    

    setupRoutes() {
        this.router.post('/store', (req, res) => this.CursoController.store(req, res));

        this.router.put('/:id/update', (req, res) => this.CursoController.update(req, res));

        this.router.get('/list', (req, res) => this.CursoController.list(req, res));

        this.router.get('/:id/find', (req, res) => this.CursoController.find(req, res));

        this.router.post('/search', (req, res) => this.CursoController.search(req, res));

        this.router.delete('/:id/delete', (req, res) => this.CursoController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  CursoRoutes;