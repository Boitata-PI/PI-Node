import Sequelize from 'sequelize';

const GrupoSequelize = (sequelize) => {
    const Grupo = sequelize.define('Grupo', {
        codDisc: {
            type: Sequelize.INTEGER,
            references: {
              model: 'disciplinas',
              key: 'id',
            }
        },

        nome: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'grupos',
        hooks: {
            beforeFind: (options) => {
                if (!options.include) {
                    options.include = Object.values(Grupo.associations); 
                }
            }
        }
    });


    Grupo.associate = (models) => {
        models.Grupo.belongsTo(models.Disciplina, { foreignKey: 'codDisc' });
    };

    
    Grupo.sync();

    return Grupo;
};


export default GrupoSequelize;