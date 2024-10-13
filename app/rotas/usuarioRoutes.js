import express from 'express';

//Controllers
import UsuarioController from '../controllers/usuarioController.js';

class UsuarioRoutes {
    constructor(database) {
        this.router = express.Router();
        this.UsuarioController = new UsuarioController(database);
        this.setupRoutes();
    }

    setupRoutes() {
        //TESTE
        this.router.get('/', (req, res) => res.json({ success: 1 }));


        //AUTH
        this.router.post('/auth/login', (req, res) => this.UsuarioController.store(req, res));

        this.router.post('/auth/register', (req, res) => this.UsuarioController.register(req, res));

        this.router.post('/auth/logout', (req, res) => this.UsuarioController.logout(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default UsuarioRoutes;