const {Sequelize} = require("sequelize");

export default new Sequelize(process.env.NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    // logging: false
})