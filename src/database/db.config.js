const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/database.sqlite'
});

sequelize.sync();

module.exports = sequelize;

