const Sequelize = require('sequelize');


module.exports = (sequelize)=>{

    const Images = sequelize.define('Images', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        url: Sequelize.STRING,
        created: Sequelize.DATE
    });
    return Images;
};
