const express = require('express');
const app = express();
const port = 3000; // Porta em que o servidor irá escutar

// Importando os controllers
const clienteController = require('./controllers/cliente.controller');
const carroController = require('./controllers/carro.controller');
const aluguelController = require('./controllers/aluguel.controller');

// Definindo as rotas para cada controller
app.use('/clientes', clienteController);
app.use('/carros', carroController);
app.use('/alugueis', aluguelController);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
