import Usuario from '../models/Usuario.js';

class UsuarioRepository {
  constructor(database) {
    this.models = database.getModels();
    this.Usuario = database.getModels().Usuario;
  }

  async create(usuario) {
    return await this.Usuario.create({
      nome: usuario.getNome(),
      ra: usuario.getRa(),
      senha: usuario.getSenha(),
      tipo: usuario.getTipo()
    });
  }

  async createMany(usuarios) {
    return await this.Usuario.bulkCreate(usuarios.map(usuario => ({
      nome: usuario.getNome(),
      ra: usuario.getRa(),
      senha: usuario.getSenha(),
      tipo: usuario.getTipo()
    })));
  }

  async findOrCreate(usuario, params) {
    return await this.Usuario.findOrCreate({
      where: params,
      defaults: {
        ra: usuario.getRa(),
        nome: usuario.getNome(),
        senha: usuario.getSenha(),
        tipo: usuario.getTipo()
      }
    }); 
  }

  async update(usuario){
    return await this.Usuario.update({
      nome: usuario.getNome(),
      ra: usuario.getRa(),
      senha: usuario.getSenha()
    }, {
      where: {
        id: usuario.getId()
      }
    });
  }

  async list(tipo = null){
    if(tipo){
      return await this.Usuario.findAll({ where: { tipo } });
    }

    return await this.Usuario.findAll();
  }

  async find(id, tipo = null){
    if(tipo){
      return await this.Usuario.findOne({ where: { id, tipo } });
    }

    return await this.Usuario.findOne({ where: { id } });
  }

  async search(params, tipo = null){
    if(tipo){
      return await this.Usuario.findAll({ where: { ...params, tipo } });
    }

    return await this.Usuario.findAll({ where: params });
  }

  async delete(usuario){
    return await this.Usuario.destroy({ where: { id: usuario.getId(), tipo: usuario.getTipo() } });
  }

  async login(email, password) {
    return await this.Usuario.findOne({ where: { email, password } });
  }

  async logout(token) {
    return true;
  }

  async getResultSequelizeState(token) {
    return await this.sequelize.models.resultSequelize.findOne({ where: { token } });
  }
}


export default UsuarioRepository;