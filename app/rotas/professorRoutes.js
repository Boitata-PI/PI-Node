import express from 'express';

//Controllers
import ProfessorController from '../controllers/professorController.js';

//Middlewares
import jwtVerify from '../middlewares/jwtVerify.js';

class ProfessorRoutes {
    constructor(database) {
        this.router = express.Router();
        this.ProfessorController = new ProfessorController(database);
        this.setupRoutes();
    }


    setupRoutes() {
        this.router.post('/store', jwtVerify, (req, res) => this.ProfessorController.store(req, res));

        this.router.put('/:id/update', jwtVerify, (req, res) => this.ProfessorController.update(req, res));

        this.router.get('/list', jwtVerify, (req, res) => this.ProfessorController.list(req, res));

        this.router.get('/:id/find', jwtVerify, (req, res) => this.ProfessorController.find(req, res));

        this.router.post('/search', jwtVerify, (req, res) => this.ProfessorController.search(req, res));

        this.router.delete('/:id/delete', jwtVerify, (req, res) => this.ProfessorController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  ProfessorRoutes;