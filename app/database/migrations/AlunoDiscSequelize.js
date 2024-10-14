import Sequelize from 'sequelize';

const AlunoDiscSequelize = (sequelize) => {
    const AlunoDisc = sequelize.define('AlunoDisc', {
        codDisc: {
            type: Sequelize.INTEGER
        },

        codAluno: {
            type: Sequelize.INTEGER
        },
    },
    {
        tableName: 'aluno_disc'
    });


    // Definir associações neste método
    AlunoDisc.associate = (models) => {
        AlunoDisc.belongsTo(models.Usuario, { foreignKey: 'codAluno' });
        AlunoDisc.belongsTo(models.Disciplina, { foreignKey: 'codDisc' });
    };

    
    AlunoDisc.sync();

    return AlunoDisc;
};

export default AlunoDiscSequelize;
