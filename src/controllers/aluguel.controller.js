const express = require('express');
const router = express.Router();
const aluguelService = require('../services/aluguel.service');

// Rota para criar um novo aluguel
router.post('/', async (req, res) => {
  const { idCliente, idCarro, dataInicio, dataFim, valorTotal } = req.body;
  try {
    const aluguel = await aluguelService.criarAluguel(idCliente, idCarro, dataInicio, dataFim, valorTotal);
    res.status(201).json(aluguel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para buscar um aluguel por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const aluguel = await aluguelService.buscarAluguelPorId(id);
    res.json(aluguel);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rota para atualizar um aluguel
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { idCliente, idCarro, dataInicio, dataFim, valorTotal } = req.body;
  try {
    const aluguel = await aluguelService.atualizarAluguel(id, idCliente, idCarro, dataInicio, dataFim, valorTotal);
    res.json(aluguel);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rota para excluir um aluguel
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await aluguelService.excluirAluguel(id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
