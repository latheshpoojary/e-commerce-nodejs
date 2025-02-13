const {Sequelize} = require('sequelize');

const ENV_KEYS = require('../../environment');
const config = require('../config/config')[ENV_KEYS.NODE_ENV];

const sequelize = new Sequelize(config)

module.exports = sequelize;