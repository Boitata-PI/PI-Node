@echo off
echo Iniciando o servidor FrontEnd...
cd /d "assets"

IF NOT EXIST "node_modules" (
    echo A pasta node_modules nao existe. Executando npm install...
    cmd /k "npm i && nodemon index.js"
) ELSE (
    echo A pasta node_modules ja existe. Nenhuma acao necessaria.
    cmd /k "nodemon index.js"
)