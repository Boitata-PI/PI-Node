import Sequelize from 'sequelize';

const UsuarioSequelize = (sequelize) => {
    const Usuario = sequelize.define('Usuario',{
        nome:{
            type: Sequelize.STRING,
            allowNull: false
        },
        senha:{
            type: Sequelize.STRING,
            allowNull: false
        },
        ra:{
            type: Sequelize.STRING,
            allowNull: true
        },
        tipo:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'ALUNO'
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