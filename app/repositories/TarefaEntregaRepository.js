import TarefaEntrega from '../models/TarefaEntrega.js';

class TarefaEntregaRepository {
  constructor(database) {
    this.models = database.getModels();
    this.TarefaEntrega = database.getModels().TarefaEntrega;
  }

  async create(tarefaEntrega) {
    return await this.TarefaEntrega.create({
      codTarefa: tarefaEntrega.getCodTarefa(),
      codGrupo: tarefaEntrega.getCodGrupo(),
      corrigida: tarefaEntrega.getCorrigida(),
      pontos: tarefaEntrega.getPontos(),
      comentarios: tarefaEntrega.getComentarios(),
      dataCorrecao: tarefaEntrega.getDataCorrecao(),
      entrega: tarefaEntrega.getEntrega()
    });
  }

  async findOrCreate(tarefaEntrega, params) {
    return await this.TarefaEntrega.findOrCreate({
      where: params,
      defaults: {
        codTarefa: tarefaEntrega.getCodTarefa(),
        codGrupo: tarefaEntrega.getCodGrupo(),
        corrigida: tarefaEntrega.getCorrigida(),
        pontos: tarefaEntrega.getPontos(),
        comentarios: tarefaEntrega.getComentarios(),
        dataCorrecao: tarefaEntrega.getDataCorrecao(),
        entrega: tarefaEntrega.getEntrega()
      }
    }); 
  }

  async update(tarefaEntrega){
    return await this.TarefaEntrega.update({
      codTarefa: tarefaEntrega.getCodTarefa(),
      codGrupo: tarefaEntrega.getCodGrupo(),
      corrigida: tarefaEntrega.getCorrigida(),
      pontos: tarefaEntrega.getPontos(),
      comentarios: tarefaEntrega.getComentarios(),
      dataCorrecao: tarefaEntrega.getDataCorrecao(),
      entrega: tarefaEntrega.getEntrega()
    }, {
      where: {
        id: tarefaEntrega.getId()
      }
    });
  }

  async list(){
    return await this.TarefaEntrega.findAll();
  }

  async find(id){
    return await this.TarefaEntrega.findOne({ where: { id } });
  }

  async search(params){
    return await this.TarefaEntrega.findAll({ where: params });
  }

  async delete(tarefaEntrega){
    return await this.TarefaEntrega.destroy({ where: { id: tarefaEntrega.getId() } });
  }
}


export default TarefaEntregaRepository;