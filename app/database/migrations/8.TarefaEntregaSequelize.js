import Sequelize from 'sequelize';

const TarefaEntregaSequelize = (sequelize) => {
    const TarefaEntrega = sequelize.define('TarefaEntrega', {
        codTarefa: {
            type: Sequelize.INTEGER,
            references: {
              model: 'tarefas',
              key: 'id',
            },
            allowNull: false
        },

        codGrupo: {
            type: Sequelize.INTEGER,
            references: {
              model: 'grupos',
              key: 'id',
            },
            allowNull: false
        },

        corrigida: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },

        dataCorrecao: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: null
        },

        pontos: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },

        comentarios: {
            type: Sequelize.TEXT,
            allowNull: true,
            defaultValue: null
        },

        entrega: {
            type: Sequelize.TEXT,
            allowNull: true
        },
    },
    {
        tableName: 'tarefa_entrega',
        hooks: {
            beforeFind: (options) => {
                if (!options.include) {
                    options.include = Object.values(TarefaEntrega.associations);
                }
            }
        }
    });


    // Definir associações neste método
    TarefaEntrega.associate = (models) => {
        models.TarefaEntrega.belongsTo(models.Usuario, { foreignKey: 'codGrupo' });
        models.TarefaEntrega.belongsTo(models.Tarefa, { foreignKey: 'codTarefa' });
    };

    
    TarefaEntrega.sync();

    return TarefaEntrega;
};

export default TarefaEntregaSequelize;
