const { config } = require("dotenv");

config();

const ENV_KEYS = {
  port: process.env.PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_HOST: process.env.DB_HOST,
  NODE_ENV: process.env.NODE_ENV,
  DB_DIALECT: process.env.DB_DIALECT,
  DB_PORT: process.env.DB_PORT,
  SALT: process.env.SALT,
  JWT_SECRET: process.env.JWT_SECRET,
  EXPIRE_IN: process.env.EXPIRE_IN,
  REFRESH_SECRET: process.env.REFRESH_SECRET,
  R_EXPIRE_IN: process.env.R_EXPIRE_IN,
};

module.exports = ENV_KEYS;
