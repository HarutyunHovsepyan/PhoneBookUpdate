const { DB, USER, HOST, PASSWORD, DIALECT } = require("../db/configDB");
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
});
const Phonebook = require('./task')(sequelize, Sequelize);

(async () => {
    await sequelize.sync()
})()

module.exports = {
    Phonebook
}
