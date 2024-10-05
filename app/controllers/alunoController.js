import AlunoRepository from "../repositories/AlunoRepository";

class AlunoController {
  constructor() {
      this.AlunoRepository = new AlunoRepository();
  }

  async store(req, res) {
    const { nome, sexo, idade, cep, logradouro, bairro, cidade, estado } = req.body;

    if (!nome || !sexo || !idade || !cep || !logradouro || !bairro || !cidade || !estado) {
      return res.status(400).json({ message: "Dados incompletos" });
    }

    const Aluno = {
      nome,
      sexo,
      idade,
      cep,
      logradouro,
      bairro,
      cidade,
      estado
    };

    try {
      const result = await this.AlunoRepository.create(Aluno)
      .then(function () {
        console.log("Added document");
        res.redirect("/index.php/clients/home");
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao registrar Aluno: ${error.message}` });
    }
  }

  async list(req, res) {
    try {
      const user = await this.db.getAuthState()
      // .then(async (user) => {
        console.log(user);
        if (!user) {
          return res.redirect("/index.php/user/login");
        }else{
          const result = await this.AlunoRepository.getAll();
          return res.render("client/home", {title: "Alunos", Alunos: result});
        }
      // });
    } catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao obter quantidade de Alunos: ${error.message}` });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await this.AlunoRepository.delete(id)
      .then(function () {
        console.log("Deleted document");
        res.redirect("/index.php/clients/home");
      });
      return res.status(200).json(result);
    }
    catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao deletar Aluno: ${error.message}` });
    }
  }

  async edit(req, res) {
    try {
      const { id } = req.params;
      const result = await this.AlunoRepository.getById(id);
      console.log(result);
      return res.render("client/editar", {title: "Editar Aluno", Aluno: result, id: id, layout: "editarlayout"});
    } catch (error) {
      return res.status(500).json({ status: false, message: `Erro ao obter Aluno: ${error.message}` });
    }
  }

  async update(req, res) {
    try{

      const { nome, sexo, idade, cep, logradouro, bairro, cidade, estado } =
        req.body;
      const { id } = req.body;

      console.log(req.body);

      if (!nome || !sexo || !idade || !cep || !logradouro || !bairro || !cidade || !estado) {
        return res.status(400).json({ message: "Dados incompletos" });
      }

      const Aluno = {
        id,
        nome,
        telefone,
        origem,
        data_contato,
        observacao
      };

      const result = await this.AlunoRepository.update(id, Aluno)
      .then(function () {
        console.log("Updated document");
        res.redirect("/index.php/clients/home");
      });

    }catch(error){
      return res.status(500).json({ status: false, message: `Erro ao atualizar Aluno: ${error.message}` });
    }
  }
}


export default AlunoController;