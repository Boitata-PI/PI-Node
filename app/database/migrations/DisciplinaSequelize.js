import Sequelize from 'sequelize';

const DisciplinaSequelize = (sequelize) => {
    const Disciplina = sequelize.define('Disciplina', {
        codProf: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'id',
            }
        },

        nome: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'disciplinas'
    });


    Disciplina.associate = (models) => {
        Disciplina.belongsTo(models.Usuario, { foreignKey: 'codProf' });
        Disciplina.hasMany(models.AlunoDisc, { foreignKey: 'codDisc' });
    };

    
    Disciplina.sync();

    return Disciplina;
};


export default DisciplinaSequelize;