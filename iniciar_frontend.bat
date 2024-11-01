@echo off
echo Iniciando o servidor FrontEnd...
cd /d "assets"

IF NOT EXIST "node_modules" (
    echo A pasta node_modules nao existe. Executando npm install...
    cmd /k "npm i && npm run dev"
) ELSE (
    echo A pasta node_modules ja existe. Nenhuma acao necessaria.
    cmd /k "npm run dev"
)