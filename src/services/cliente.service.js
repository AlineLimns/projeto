const Cliente = require('../models/cliente.model');

async function criarCliente(nome, email, senha) {
  return await Cliente.create({ nome, email, senha });
}

async function buscarClientePorId(id) {
  return await Cliente.findByPk(id);
}

async function atualizarCliente(id, novoNome, novoEmail, novaSenha) {
  const cliente = await Cliente.findByPk(id);
  if (!cliente) {
    throw new Error('Cliente não encontrado');
  }
  cliente.nome = novoNome;
  cliente.email = novoEmail;
  cliente.senha = novaSenha;
  return await cliente.save();
}

async function excluirCliente(id) {
  const cliente = await Cliente.findByPk(id);
  if (!cliente) {
    throw new Error('Cliente não encontrado');
  }
  return await cliente.destroy();
}

module.exports = {
  criarCliente,
  buscarClientePorId,
  atualizarCliente,
  excluirCliente,
};
