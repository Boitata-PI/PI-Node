import AlunoDisc from '../models/AlunoDisc.js';
import getAlunoDiscModel from '../database/migrations/AlunoDisc.js';

class AlunoDiscRepository {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.AlunoDisc = getAlunoDiscModel(this.sequelize);
  }

  async create(alunoDisc) {
    const alunoDiscData = await this.AlunoDisc.create({
      nome: alunoDisc.getNome(),
      ra: alunoDisc.getRA(),
      senha: alunoDisc.getSenha(),
      tipo: alunoDisc.getTipo()
    });

    return alunoDiscData;
  }

  async update(alunoDisc){
    const alunoDiscData = await this.AlunoDisc.update({
      nome: alunoDisc.getNome(),
      ra: alunoDisc.getRA(),
      senha: alunoDisc.getSenha(),
      tipo: alunoDisc.getTipo()
    }, {
      where: {
        id: alunoDisc.getId()
      }
    });

    return alunoDiscData;
  }

  async list(){
    const alunoDiscs = await this.AlunoDisc.findAll();

    return alunoDiscs;
  }

  async find(id){
    const alunoDisc = await this.AlunoDisc.findOne({ where: { id } });

    return alunoDisc;
  }

  async search(params){
    const alunoDiscs = await this.AlunoDisc.findAll({ where: params });

    return alunoDiscs;
  }

  async delete(id){
    const alunoDisc = await this.AlunoDisc.destroy({ where: { id } });

    return alunoDisc;
  }
}
  

export default AlunoDiscRepository;