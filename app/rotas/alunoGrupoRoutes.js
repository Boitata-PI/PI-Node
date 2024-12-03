import express from 'express';

//Controllers
import AlunoGrupoController from '../controllers/alunoGrupoController.js';

//Middlewares
import jwtVerify from '../middlewares/jwtVerify.js';

class AlunoGrupoRoutes {
    constructor(database) {
        this.router = express.Router();
        this.AlunoGrupoController = new AlunoGrupoController(database);
        this.setupRoutes();
    }

    

    setupRoutes() {
        this.router.post('/store', jwtVerify, (req, res) => this.AlunoGrupoController.store(req, res));

        this.router.put('/:id/update', jwtVerify, (req, res) => this.AlunoGrupoController.update(req, res));

        this.router.get('/list', jwtVerify, (req, res) => this.AlunoGrupoController.list(req, res));

        this.router.get('/:id/find', jwtVerify, (req, res) => this.AlunoGrupoController.find(req, res));

        this.router.post('/search', jwtVerify, (req, res) => this.AlunoGrupoController.search(req, res));

        this.router.delete('/:id/delete', jwtVerify, (req, res) => this.AlunoGrupoController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  AlunoGrupoRoutes;