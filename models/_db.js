const Sequelize = require('sequelize');

const dbName = 'PLEASE_REPLACE_ME';
const db = new Sequelize(
  `postgres://localhost:5432/${dbName}`,
  { logging: false }
);

module.exports = db;
