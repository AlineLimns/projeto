const express = require('express');
const router = express.Router();
const carroService = require('../services/carro.service');

// Rota para criar um novo carro
router.post('/', async (req, res) => {
  const { marca, modelo, ano, valor } = req.body;
  try {
    const carro = await carroService.criarCarro(marca, modelo, ano, valor);
    res.status(201).json(carro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para buscar um carro por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const carro = await carroService.buscarCarroPorId(id);
    res.json(carro);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rota para atualizar um carro
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { marca, modelo, ano, valor } = req.body;
  try {
    const carro = await carroService.atualizarCarro(id, marca, modelo, ano, valor);
    res.json(carro);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rota para excluir um carro
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await carroService.excluirCarro(id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
