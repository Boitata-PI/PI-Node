import express from 'express';

//Controllers
import AuthController from '../controllers/authController.js';

//Middlewares
import jwtVerify from '../middlewares/jwtVerify.js';
import guestVerify from '../middlewares/guestVerify.js';

class AuthRoutes {
    constructor(database) {
        this.router = express.Router();
        this.AuthController = new AuthController(database);
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post('/login', guestVerify, (req, res, next) => this.AuthController.login(req, res, next));

        this.router.get('/checkAuth', (req, res) => this.AuthController.checkAuth(req, res));

        this.router.get('/logout', jwtVerify, (req, res) => this.AuthController.logout(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default AuthRoutes;