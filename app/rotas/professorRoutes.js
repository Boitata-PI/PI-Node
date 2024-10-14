import express from 'express';

//Controllers
import ProfessorController from '../controllers/professorController.js';

class ProfessorRoutes {
    constructor(database) {
        this.router = express.Router();
        this.ProfessorController = new ProfessorController(database);
        this.setupRoutes();
    }


    setupRoutes() {
        this.router.post('/store', (req, res) => this.ProfessorController.store(req, res));

        this.router.put('/:id/update', (req, res) => this.ProfessorController.update(req, res));

        this.router.get('/list', (req, res) => this.ProfessorController.list(req, res));

        this.router.get('/:id/find', (req, res) => this.ProfessorController.find(req, res));

        this.router.post('/search', (req, res) => this.ProfessorController.search(req, res));

        this.router.delete('/:id/delete', (req, res) => this.ProfessorController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  ProfessorRoutes;