const ENV_KEYS = require("../../environment");

const dbConfig = {
  development: {
    username: ENV_KEYS.DB_USER,
    password: ENV_KEYS.DB_PASSWORD,
    database: ENV_KEYS.DB_DATABASE,
    host: ENV_KEYS.DB_HOST,
    port: ENV_KEYS.DB_PORT,
    dialect: ENV_KEYS.DB_DIALECT,
  },
  test: {
    username: ENV_KEYS.DB_USER,
    password: ENV_KEYS.DB_PASSWORD,
    database: ENV_KEYS.DB_DATABASE,
    host: ENV_KEYS.DB_HOST,
    port: ENV_KEYS.DB_PORT,
    dialect: ENV_KEYS.DB_DIALECT,
  },
  production: {
    username: ENV_KEYS.DB_USER,
    password: ENV_KEYS.DB_PASSWORD,
    database: ENV_KEYS.DB_DATABASE,
    host: ENV_KEYS.DB_HOST,
    port: ENV_KEYS.DB_PORT,
    dialect: ENV_KEYS.DB_DIALECT,
  },
};

module.exports = dbConfig;
