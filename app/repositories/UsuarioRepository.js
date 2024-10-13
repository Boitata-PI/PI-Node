import Usuario from '../models/Usuario.js';
import getUsuarioModel from '../database/migrations/Usuario.js';

class UsuarioRepository {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.Usuario = getUsuarioModel(this.sequelize);
  }

  async create(user) {
    const userData = await this.Usuario.create({
      nome: user.getNome(),
      ra: user.getRa(),
      senha: user.getSenha(),
      tipo: user.getTipo()
    });

    return userData;
  }

  async update(user){
    const userData = await this.Usuario.update({
      nome: user.getNome(),
      ra: user.getRa(),
      senha: user.getSenha(),
      tipo: user.getTipo()
    }, {
      where: {
        id: user.getId()
      }
    });

    return userData;
  }

  async list(){
    const users = await this.Usuario.findAll();

    return users;
  }

  async find(id){
    const user = await this.Usuario.findOne({ where: { id } });

    return user;
  }

  async search(params){
    const users = await this.Usuario.findAll({ where: params });

    return users;
  }

  async login(email, password) {
    const user = await this.Usuario.findOne({ where: { email, password } });
    return user;
  }

  async logout(token) {
    const user = await this.Usuario.destroy({ where: {token} });
    return user;
  }

  async delete(Aluno){
    const user = await this.Usuario.destroy({ where: { id: Aluno.getId() } });

    return user;
  }

  async getUserState(token) {
    const user = await this.sequelize.models.Usuarios.findOne({ where: { token } });
    return user;
  }
}
  

export default UsuarioRepository;