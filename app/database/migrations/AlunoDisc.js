import Sequelize from 'sequelize';

const getAlunoDiscModel = (sequelize) => {
    const AlunoDisc = sequelize.define('alunodisc', {
        codDisc: {
            type: Sequelize.INTEGER,
        },

        codAluno: {
            type: Sequelize.INTEGER    
        },
    });
};

export default getAlunoDiscModel;
