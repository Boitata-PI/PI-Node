import Sequelize from 'sequelize';

const getUsuarioModel = (sequelize) => {
    const Usuario = sequelize.define('usuarios',{
        nome:{
            type: Sequelize.STRING
        },
        senha:{
            type: Sequelize.STRING
        },
        ra:{
            type: Sequelize.STRING
        },
    });
    
    Usuario.sync();

    return Usuario;
}

export default getUsuarioModel;