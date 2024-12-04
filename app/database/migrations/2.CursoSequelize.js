import Sequelize from 'sequelize';

const CursoSequelize = (sequelize) => {
    const Curso = sequelize.define('Curso', {
        codCord: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'id',
            },
            allowNull: false
        },

        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'cursos',
        hooks: {
            beforeFind: (options) => {
                if (!options.include) {
                    options.include = Object.values(Curso.associations); 
                }
            }
        }
    });


    Curso.associate = (models) => {
        models.Curso.belongsTo(models.Usuario, { foreignKey: 'codCord' });
        models.Curso.hasMany(models.Disciplina, { foreignKey: 'codCurso' });
    };

    
    Curso.sync();

    return Curso;
};

export default CursoSequelize;