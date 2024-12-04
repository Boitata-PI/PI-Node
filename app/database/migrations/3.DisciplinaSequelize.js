import Sequelize from 'sequelize';

const DisciplinaSequelize = (sequelize) => {
    const Disciplina = sequelize.define('Disciplina', {
        codProf: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'id',
            },
            allowNull: false
        },

        codCurso: {
            type: Sequelize.INTEGER,
            references: {
              model: 'cursos',
              key: 'id',
            },
            allowNull: false
        },

        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'disciplinas',
        hooks: {
            beforeFind: (options) => {
                if (!options.include) {
                    options.include = Object.values(Disciplina.associations); 
                }
            }
        }
    });


    Disciplina.associate = (models) => {
        models.Disciplina.belongsTo(models.Usuario, { foreignKey: 'codProf' });
        models.Disciplina.belongsTo(models.Curso, { foreignKey: 'codCurso' });
        models.Disciplina.hasMany(models.AlunoDisc, { foreignKey: 'codDisc' });
    };

    
    Disciplina.sync();

    return Disciplina;
};


export default DisciplinaSequelize;