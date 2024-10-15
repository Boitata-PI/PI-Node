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
        tableName: 'usuarios',
        hooks: {
            beforeFind: (options) => {
                if (!options.include) {
                    options.include = Object.values(Usuario.associations); 
                }
            }
        }
    });

    
    Usuario.associate = (models) => {
        models.Usuario.hasMany(models.Disciplina, { foreignKey: 'codProf' });
        models.Usuario.hasMany(models.Curso, { foreignKey: 'codCord' });
        models.Usuario.hasMany(models.AlunoDisc, { foreignKey: 'codAluno' });
    };
    
    
    Usuario.sync();

    return Usuario;
}


export default UsuarioSequelize;