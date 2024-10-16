import express from 'express';
import multer from 'multer';

//Controllers
import AlunoDiscController from '../controllers/alunoDiscController.js';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
class AlunoDiscRoutes {
    constructor(database) {
        this.router = express.Router();
        this.AlunoDiscController = new AlunoDiscController(database);
        this.setupRoutes();
    }

    

    setupRoutes() {
        this.router.post('/store', upload.single('alunos'), (req, res) => this.AlunoDiscController.store(req, res));

        this.router.put('/:id/update', (req, res) => this.AlunoDiscController.update(req, res));

        this.router.get('/list', (req, res) => this.AlunoDiscController.list(req, res));

        this.router.get('/:id/find', (req, res) => this.AlunoDiscController.find(req, res));

        this.router.post('/search', (req, res) => this.AlunoDiscController.search(req, res));

        this.router.delete('/:id/delete', (req, res) => this.AlunoDiscController.delete(req, res));
    }

    getRouter(){
        return this.router
    }
}

export default  AlunoDiscRoutes;