# ETAPAS
O projeto está em Desenvolvimento:

- [x] Estrutura
- [x] 1° Sprint - Disciplinas, Cursos e Usuários
- [ ] 2° Sprint - Auth(JWT), Permissões e Tarefas

> Projeto Integrador: Sistema para Armazenamento e Gerenciamento de P.Is realizados pelos alunos da FATEC Zona Leste
> Padrão REST API

# INICIANDO PROJETO</h1>
### (SEMPRE CLONE DA BRANCH DE HOMOLOGAÇÃO)
- Crie uma base de dados vazia 
- Clone o arquivo .env.example e renomeie a cópia para .env
- Configure o .env com as informações pedidas no exemplo

```
git clone -b homologation https://github.com/Boitata-PI/PI-Node.git
```
- Execute os arquivos .bat para iniciar os servidores
- Front-End: http://localhost:8080
- Back-End: http://localhost:8081

<br><br>

# EXPLICAÇÕES
- app: Pasta do Back-End
- assets: Pasta do Front-End


<br><br>

# GITHUB
> SUBINDO SUAS ALTERAÇÕES PARA O GITHUB
## PRIMEIRA VEZ (quando ainda não existir a sua branch):
```
git checkout -b <seu_nome>
git add *
git commit -m "<seu_comentario>"
git push -u origin <seu_nome>
```
- pull request pelo site do Github da sua branch para a branch de homologação

<br>

## OUTRAS VEZES
```
git add .
git commit -m "<seu_comentario>"
git push
```
- pull request pelo site do Github da sua branch para a branch de homologação

<br><br>

# PUXANDO AS ALTERAÇÕES DA BRANCH DE HOMOLOGAÇÃO
Caso o projeto já exista na sua máquina e outra pessoa tiver feito alterações antes de você, execute:
```
git pull origin homologation
```

<br><br><br>

# DOCUMENTAÇÃO
```
npm i express --save
npm i nodemon --save-dev
npm i body-parser --save
npm i cors --save
npm i sequelize --save
npm i dotenv --save
npm i mysql2 --save
```