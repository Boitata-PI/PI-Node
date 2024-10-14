import Sequelize from 'sequelize';

const CursoSequelize = (sequelize) => {
    const Curso = sequelize.define('Curso', {
        codCord: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'id',
            }
        },

        nome: {
            type: Sequelize.STRING
        },
    },
    {
        tableName: 'cursos'
    });


    Curso.associate = (models) => {
        Curso.belongsTo(models.Usuario, { foreignKey: 'codCord' });
    };

    
    Curso.sync();

    return Curso;
};

export default CursoSequelize;