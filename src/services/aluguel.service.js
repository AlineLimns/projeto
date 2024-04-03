const Aluguel = require('../models/aluguel.model');

async function criarAluguel(idCliente, idCarro, dataInicio, dataFim, valorTotal) {
  return await Aluguel.create({ idCliente, idCarro, dataInicio, dataFim, valorTotal });
}

async function buscarAluguelPorId(id) {
  return await Aluguel.findByPk(id);
}

async function atualizarAluguel(id, novoIdCliente, novoIdCarro, novaDataInicio, novaDataFim, novoValorTotal) {
  const aluguel = await Aluguel.findByPk(id);
  if (!aluguel) {
    throw new Error('Aluguel não encontrado');
  }
  aluguel.idCliente = novoIdCliente;
  aluguel.idCarro = novoIdCarro;
  aluguel.dataInicio = novaDataInicio;
  aluguel.dataFim = novaDataFim;
  aluguel.valorTotal = novoValorTotal;
  return await aluguel.save();
}

async function excluirAluguel(id) {
  const aluguel = await Aluguel.findByPk(id);
  if (!aluguel) {
    throw new Error('Aluguel não encontrado');
  }
  return await aluguel.destroy();
}

module.exports = {
  criarAluguel,
  buscarAluguelPorId,
  atualizarAluguel,
  excluirAluguel,
};
