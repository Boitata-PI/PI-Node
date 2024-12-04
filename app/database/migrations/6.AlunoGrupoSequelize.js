import Sequelize from 'sequelize';

const AlunoGrupoSequelize = (sequelize) => {
    const AlunoGrupo = sequelize.define('AlunoGrupo', {
        codGrupo: {
            type: Sequelize.INTEGER,
            references: {
              model: 'grupos',
              key: 'id',
            },
            allowNull: false
        },

        codAluno: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'id',
            },
            allowNull: false
        },
    },
    {
        tableName: 'aluno_grupo',
        hooks: {
            beforeFind: (options) => {
                if (!options.include) {
                    options.include = Object.values(AlunoGrupo.associations);
                }
            }
        }
    });


    // Definir associações neste método
    AlunoGrupo.associate = (models) => {
        models.AlunoGrupo.belongsTo(models.Usuario, { foreignKey: 'codAluno' });
        models.AlunoGrupo.belongsTo(models.Grupo, { foreignKey: 'codGrupo' });
    };

    
    AlunoGrupo.sync();

    return AlunoGrupo;
};

export default AlunoGrupoSequelize;
