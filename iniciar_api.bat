@echo off
echo Iniciando o servidor API...
cd /d "api"

IF NOT EXIST "node_modules" (
    echo A pasta node_modules nao existe. Executando npm install...
    cmd /k "npm i && npx nodemon index.js"
) ELSE (
    echo A pasta node_modules ja existe. Nenhuma acao necessaria.
    cmd /k "npx nodemon index.js"
)