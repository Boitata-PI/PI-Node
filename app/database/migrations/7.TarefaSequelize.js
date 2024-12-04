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

        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },

        material: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        instrucoes: {
            type: Sequelize.TEXT,
            allowNull: false
        }   ,

        dataVencimento: {
            type: Sequelize.DATE,
            allowNull: false
        },

        dataFechamento: {
            type: Sequelize.DATE,
            allowNull: false
        },

        pontos: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'tarefas',
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
        models.Tarefa.belongsTo(models.Disciplina, { foreignKey: 'codDisc' });
    };

    
    Tarefa.sync();

    return Tarefa;
};

export default TarefaSequelize;
