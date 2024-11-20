import Sequelize from 'sequelize';

const TarefaSequelize = (sequelize) => {
    const Tarefa = sequelize.define('Tarefa', {
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
                    options.include = Object.values(Tarefa.associations);
                }
            }
        }
    });


    // Definir associações neste método
    Tarefa.associate = (models) => {
        models.Tarefa.belongsTo(models.Usuario, { foreignKey: 'codAluno' });
        models.Tarefa.belongsTo(models.Disciplina, { foreignKey: 'codDisc' });
    };

    
    Tarefa.sync();

    return Tarefa;
};

export default TarefaSequelize;
