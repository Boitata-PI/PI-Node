import Sequelize from 'sequelize';

class Database 
{
    constructor(environment) {
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
    }

    connect(){
        return this.sequelize.authenticate();
    }

    getConnection(){
        return this.sequelize;
    }
}

export default Database;