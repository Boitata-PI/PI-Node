import Sequelize from 'sequelize';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

// Substitui __dirname com ES6, convertendo para file URL no Windows
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Database 
{
    constructor(environment) {
        this.init(environment);
    }

    init(environment){
        this.sequelize = new Sequelize(
            environment.DB_DATABASE,
            environment.DB_USER,
            environment.DB_PASSWORD,
            {
                host: environment.DB_HOST,
                dialect: environment.DB_TYPE,
                port: environment.DB_PORT
            }
        );

        this.db = {};
    }

    migrate(){
        readdirSync(__dirname)
            .filter(file => file !== 'Database.js' && file.endsWith('.js'))
            .forEach(async (file) => {
                // Corrigindo o caminho para file:// no Windows
                const modelPath = pathToFileURL(path.join(__dirname, file)).href;
                const { default: defineModel } = await import(modelPath);
                const model = defineModel(this.sequelize);  // Agora passando o sequelize corretamente para o modelo
                this.db[model.name] = model;
            });
    }

    associate(){
        Object.keys(this.db).forEach(modelName => {
            if (this.db[modelName].associate) {
                this.db[modelName].associate(this.db);
            }
        });
    }

    connect(){
        return this.sequelize.authenticate();
    }

    sync(){
        this.migrate();
        this.associate();

        return this.sequelize.sync();
    }

    getConnection(){
        return this.sequelize;
    }
}


export default Database;