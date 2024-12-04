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
                port: environment.DB_PORT,
                logging: false,
            }
        );

        this.models = {};
    }

    async migrate(){
        console.log('')
        console.log('MIGRATING MODELS...');

        const modelFiles = readdirSync(__dirname + '/migrations')
            .filter(file => file !== 'Database.js' && file.endsWith('.js'));

        //console.log(modelFiles.length)

        for (const file of modelFiles) {
            console.log('------------------------------------');
            console.log('Migrating: ' + file);
            await new Promise(resolve => setTimeout(resolve, 200));
            const modelPath = pathToFileURL(path.join(__dirname + '/migrations/' + file)).href;
            const { default: defineModel } = await import(modelPath);
            const model = await defineModel(this.sequelize); // Passando sequelize para o modelo

            // Armazenando o modelo
            this.models[model.name] = model;
            console.log('Migrated: ' + file);
        }

        console.log('------------------------------------');
        console.log('MODELS MIGRATED!');
    }

    async associate(){
        console.log('');
        console.log('=============================================');
        console.log('')
        console.log('ASSOCIATING MODELS...');
        const associations = Object.keys(this.models).map(async modelName => {
            if (this.models[modelName].associate) {
                await this.models[modelName].associate(this.models);
            }
        });

        await Promise.all(associations);
        console.log('ASSOCIATIONS DONE!');
    }

    async seed(){
        console.log('');
        console.log('=============================================');
        console.log('')
        console.log('SEEDING DATABASE...');

        const seedFiles = readdirSync(__dirname + '/seeders')
            .filter(file => file !== 'Database.js' && file.endsWith('.js'));

        for (const file of seedFiles) {
            //intervalo de 200 microsssegundos
            await new Promise(resolve => setTimeout(resolve, 200));
            console.log('------------------------------------');
            console.log('Seeding: ' + file);
            console.log('');
            const seedPath = pathToFileURL(path.join(__dirname + '/seeders/' + file)).href;
            const { default: seed } = await import(seedPath);
            await seed(this);
        }
    }

    async connect(){
        return await this.sequelize.authenticate();
    }

    async sync(){
        await this.migrate();
        await this.associate();
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