import Disciplina from '../models/Disciplina.js';
import DisciplinaSequelize from '../database/migrations/DisciplinaSequelize.js';

class DisciplinaRepository {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.Disciplina = DisciplinaSequelize(this.sequelize);
  }

  async create(disciplina) {
    return await this.Disciplina.create({
      nome: disciplina.getNome(),
      codProf: disciplina.getCodProf(),
    });
  }

  async update(disciplina){
    return await this.Disciplina.update({
      nome: disciplina.getNome(),
      codProf: disciplina.getCodProf(),
    }, {
      where: {
        id: disciplina.getId()
      }
    });
  }

  async list(){
    return await this.Disciplina.findAll();
  }

  async find(id){
    return await this.Disciplina.findOne({ where: { id } });
  }

  async search(params){
    return await this.Disciplina.findAll({ where: params });
  }

  async delete(Disciplina){
    return await this.Disciplina.destroy({ where: { id: Disciplina.getId() } });
  }
}


export default DisciplinaRepository;