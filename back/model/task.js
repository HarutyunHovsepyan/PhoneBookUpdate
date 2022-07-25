module.exports = (sequelize, Sequelize) => {
    const Phonebook = sequelize.define('contactLists', {
        name: {
            type: Sequelize.STRING,
        },
        lastName: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.INTEGER
        },
        homeNumber: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
    },
        {
            freezeTableName: true,
            timestamps: false,
        })
    return Phonebook
};