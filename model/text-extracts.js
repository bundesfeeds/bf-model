const Sequelize = require('sequelize');


module.exports = (sequelize)=>{
    const Urls = require('./urls')(sequelize);
    const TextExtracts = sequelize.define('TextExtracts', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        urls_id: {
            type: Sequelize.INTEGER,
    
            references: {
                model: Urls,
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        text: { type: Sequelize.TEXT },
        created: Sequelize.DATE
    });
    return TextExtracts;
};