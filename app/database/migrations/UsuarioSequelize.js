import Sequelize from 'sequelize';

const UsuarioSequelize = (sequelize) => {
    const Usuario = sequelize.define('Usuario',{
        nome:{
            type: Sequelize.STRING
        },
        senha:{
            type: Sequelize.STRING
        },
        ra:{
            type: Sequelize.STRING
        },
        tipo:{
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'usuarios'
    });

    
    Usuario.associate = (models) => {
        Usuario.hasMany(models.Disciplina, { foreignKey: 'codProf' });
        Usuario.hasMany(models.Curso, { foreignKey: 'codCord' });
        Usuario.hasMany(models.AlunoDisc, { foreign: 'codAluno' });
    };
    
    
    Usuario.sync();

    return Usuario;
}


export default UsuarioSequelize;