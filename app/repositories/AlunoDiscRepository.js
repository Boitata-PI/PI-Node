import AlunoDisc from '../models/AlunoDisc.js';
import Disciplina from '../database/migrations/DisciplinaSequelize.js';
import AlunoDiscSequelize from '../database/migrations/AlunoDiscSequelize.js';

class AlunoDiscRepository {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.AlunoDisc = AlunoDiscSequelize(this.sequelize);
  }

  async create(alunoDisc) {
    return await this.AlunoDisc.create({
      codDisc: alunoDisc.getCodDisc(),
      codAluno: alunoDisc.getCodAluno()
    });
  }

  async update(alunoDisc){
    return await this.AlunoDisc.update({
      codDisc: alunoDisc.getCodDisc(),
      codAluno: alunoDisc.getCodAluno()
    }, {
      where: {
        id: alunoDisc.getId()
      }
    });
  }

  async list(){
    return await this.AlunoDisc.findAll({
      include: [Disciplina],  // Inclui os posts relacionados
    })
  }

  async find(id){
    return await this.AlunoDisc.findOne({ where: { id } });
  }

  async search(params){
    return await this.AlunoDisc.findAll({ where: params });
  }

  async delete(alunoDisc){
    return await this.AlunoDisc.destroy({ where: { id: alunoDisc.getId() } });
  }
}


export default AlunoDiscRepository;