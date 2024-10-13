//Iniciando Bibliotecas
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config()
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.use(express.json());


//ROTAS
//INDEX
app.get('/api', (req, res) => {
    try{
        return res.status(200).json({success: true, data: {id: 200}, message: 'Success'});
    }
    catch(e){
        return res.status(500).json({success: false, message: 'Error: ' + e});
    }
});


//INDEX
app.get('/', (req, res) => res.json({success: true, message: 'API UniWorks Ativo!'}));


//FALLBACK
app.use((req, res) => res.status(404).json({success: false, message: 'Not Found'}));



//Iniciando Servidor
app.listen(PORT, () => {
    console.log(`API Ativa na Porta: ${PORT}!`);
});