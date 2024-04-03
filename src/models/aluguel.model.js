const { DataTypes } = require('sequelize');
const sequelize = require('../database/db.config');

const Aluguel = sequelize.define('Aluguel', {
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataFim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  valorTotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Aluguel;
