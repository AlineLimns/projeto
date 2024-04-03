const express = require('express');
const router = express.Router();
const clienteService = require('../services/cliente.service');

// Rota para criar um novo cliente
router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const cliente = await clienteService.criarCliente(nome, email, senha);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para buscar um cliente por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await clienteService.buscarClientePorId(id);
    res.json(cliente);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rota para atualizar um cliente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    const cliente = await clienteService.atualizarCliente(id, nome, email, senha);
    res.json(cliente);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rota para excluir um cliente
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await clienteService.excluirCliente(id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
