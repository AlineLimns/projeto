const Carro = require('../models/carro.model');

async function criarCarro(marca, modelo, ano, valor) {
  return await Carro.create({ marca, modelo, ano, valor });
}

async function buscarCarroPorId(id) {
  return await Carro.findByPk(id);
}

async function atualizarCarro(id, novaMarca, novoModelo, novoAno, novoValor) {
  const carro = await Carro.findByPk(id);
  if (!carro) {
    throw new Error('Carro não encontrado');
  }
  carro.marca = novaMarca;
  carro.modelo = novoModelo;
  carro.ano = novoAno;
  carro.valor = novoValor;
  return await carro.save();
}

async function excluirCarro(id) {
  const carro = await Carro.findByPk(id);
  if (!carro) {
    throw new Error('Carro não encontrado');
  }
  return await carro.destroy();
}

module.exports = {
  criarCarro,
  buscarCarroPorId,
  atualizarCarro,
  excluirCarro,
};
