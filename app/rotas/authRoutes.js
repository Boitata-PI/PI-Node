import express from 'express';

//Controllers
import AuthController from '../controllers/authController.js';

class AuthRoutes {
    constructor(database) {
        this.router = express.Router();
        this.AuthController = new AuthController(database);
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post('/login', (req, res) => this.AuthController.store(req, res));

        this.router.post('/checkAuth', (req, res) => this.AuthController.checkAuth(req, res));

        this.router.post('/logout', (req, res) => this.AuthController.logout(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default AuthRoutes;