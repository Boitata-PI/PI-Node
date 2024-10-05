import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

class Web {
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        //HOME
        this.router.get('/', (req, res) =>  res.sendFile(path.join(dirname, '..', '..', 'assets', 'views', 'index.html')));



        //AUTH
        this.router.get('/login', (req, res) => res.render('views.login'));

        this.router.get('/register', (req, res) => res.render('views.register'));
    }

    getRouter(){
        return this.router
    }
}

export default Web;