const Sequelize = require('sequelize');

module.exports = function(sequelize) {
    const Urls = sequelize.define('Urls', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        url: Sequelize.STRING,
        created: Sequelize.DATE
    });
    return Urls;
};