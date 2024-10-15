import Sequelize from 'sequelize';

const AlunoDiscSequelize = (sequelize) => {
    const AlunoDisc = sequelize.define('AlunoDisc', {
        codDisc: {
            type: Sequelize.INTEGER,
            references: {
              model: 'disciplinas',
              key: 'id',
            }
        },

        codAluno: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'id',
            }
        },
    },
    {
        tableName: 'aluno_disc',
        hooks: {
            beforeFind: (options) => {
                if (!options.include) {
                    options.include = Object.values(AlunoDisc.associations);
                }
            }
        }
    });


    // Definir associações neste método
    AlunoDisc.associate = (models) => {
        models.AlunoDisc.belongsTo(models.Usuario, { foreignKey: 'codAluno' });
        models.AlunoDisc.belongsTo(models.Disciplina, { foreignKey: 'codDisc' });
    };

    
    AlunoDisc.sync();

    return AlunoDisc;
};

export default AlunoDiscSequelize;
