const {config} = require('dotenv');

config()

const ENV_KEYS = {
    port:process.env.PORT,
    DB_USER:process.env.DB_USER,
    DB_PASSWORD:process.env.DB_PASSWORD,
    DB_DATABASE:process.env.DB_DATABASE,
    DB_HOST:process.env.DB_HOST,
    NODE_ENV:process.env.NODE_ENV,
    DB_DIALECT:process.env.DB_DIALECT,
    DB_PORT:process.env.DB_PORT,
    SALT:process.env.SALT
}

module.exports = ENV_KEYS


