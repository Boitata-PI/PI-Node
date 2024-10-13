import Sequelize from 'sequelize';

const getAlunoDiscModel = (sequelize) => {
    const AlunoDisc = sequelize.define('aluno_disc', {
        codDisc: {
            type: Sequelize.INTEGER,
            references: {
              model: 'disciplinas',
              key: 'codDisc',
            }
        },

        codAluno: {
            type: Sequelize.INTEGER,
            references: {
              model: 'usuarios',
              key: 'codAluno',
            }
        },
    });

    AlunoDisc.sync();

    return AlunoDisc;
};

export default getAlunoDiscModel;
