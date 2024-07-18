require('dotenv').config();
const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_CONNECTION_LIMIT: process.env.DB_CONNECTION_LIMIT || 10,
    DB_NAME: process.env.DB_NAME || 'nodeJSDB',
    DB_PORT: process.env.DB_PORT || 5432
}
module.exports = config;