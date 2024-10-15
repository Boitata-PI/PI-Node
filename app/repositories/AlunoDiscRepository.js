import AlunoDisc from '../models/AlunoDisc.js';

class AlunoDiscRepository {
  constructor(database) {
    this.models = database.getModels();
    this.AlunoDisc = database.getModels().AlunoDisc;
  }

  async create(alunoDisc) {
    return await this.AlunoDisc.create({
      codDisc: alunoDisc.getCodDisc(),
      codAluno: alunoDisc.getCodAluno()
    });
  }

  async createMany(alunoDiscs) {
    return await this.AlunoDisc.bulkCreate(alunoDiscs.map(alunoDisc => ({
      codDisc: alunoDisc.getCodDisc(),
      codAluno: alunoDisc.getCodAluno()
    })));
  }

  async findOrCreate(alunoDisc, params) {
    return await this.AlunoDisc.findOrCreate({
      where: params,
      defaults: {
        codDisc: alunoDisc.getCodDisc(),
        codAluno: alunoDisc.getCodAluno()
      }
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
    return await this.AlunoDisc.findAll();
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