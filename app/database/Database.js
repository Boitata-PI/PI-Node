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

        this.models = {};
    }

    async migrate(){
        const modelFiles = readdirSync(__dirname + '/migrations')
            .filter(file => file !== 'Database.js' && file.endsWith('.js'));

        //console.log(modelFiles.length)

        for (const file of modelFiles) {
            const modelPath = pathToFileURL(path.join(__dirname + '/migrations/' + file)).href;
            const { default: defineModel } = await import(modelPath);
            const model = defineModel(this.sequelize); // Passando sequelize para o modelo

            // Armazenando o modelo
            this.models[model.name] = model;
        }
    }

    associate(){
        Object.keys(this.models).forEach(modelName => {
            if (this.models[modelName].associate) {
                this.models[modelName].associate(this.models);
            }
        });
    }

    async seed(){
        const seedFiles = readdirSync(__dirname + '/seeders')
            .filter(file => file !== 'Database.js' && file.endsWith('.js'));

        for (const file of seedFiles) {
            const seedPath = pathToFileURL(path.join(__dirname + '/seeders/' + file)).href;
            const { default: seed } = await import(seedPath);
            seed(this);
        }
    }

    async connect(){
        return await this.sequelize.authenticate();
    }

    async sync(){
        await this.migrate();
        this.associate();
        await this.seed();

        //console.log(await this.models.Usuario.findAll())
        //console.log(this.getModels());

        return this.sequelize.sync({ alter: true });
    }

    getConnection(){
        return this.sequelize;
    }

    getModels(){
        return this.models;
    }
}


export default Database;