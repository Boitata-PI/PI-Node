import AlunoGrupo from '../models/AlunoGrupo.js';

class AlunoGrupoRepository {
  constructor(database) {
    this.models = database.getModels();
    this.AlunoGrupo = database.getModels().AlunoGrupo;
  }

  async create(alunoGrupo) {
    return await this.AlunoGrupo.create({
      codGrupo: alunoGrupo.getCodGrupo(),
      codAluno: alunoGrupo.getCodAluno()
    });
  }

  async createMany(alunoGrupos) {
    return await this.AlunoGrupo.bulkCreate(alunoGrupos.map(alunoGrupo => ({
      codGrupo: alunoGrupo.getCodGrupo(),
      codAluno: alunoGrupo.getCodAluno()
    })));
  }

  async findOrCreate(alunoGrupo, params) {
    return await this.AlunoGrupo.findOrCreate({
      where: params,
      defaults: {
        codGrupo: alunoGrupo.getCodGrupo(),
        codAluno: alunoGrupo.getCodAluno()
      }
    });
  }

  async update(alunoGrupo){
    return await this.AlunoGrupo.update({
      codGrupo: alunoGrupo.getCodGrupo(),
      codAluno: alunoGrupo.getCodAluno()
    }, {
      where: {
        id: alunoGrupo.getId()
      }
    });
  }

  async list(){
    return await this.AlunoGrupo.findAll();
  }

  async find(id){
    return await this.AlunoGrupo.findOne({ where: { id } });
  }

  async search(params){
    return await this.AlunoGrupo.findAll({ where: params });
  }

  async delete(alunoGrupo){
    return await this.AlunoGrupo.destroy({ where: { id: alunoGrupo.getId() } });
  }
}


export default AlunoGrupoRepository;