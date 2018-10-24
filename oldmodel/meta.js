const Sequelize = require('sequelize');

module.exports = (sequelize)=>{
    const Urls = require('./urls')(sequelize);
    const Meta = sequelize.define('Meta', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        urls_id: {
            type: Sequelize.INTEGER,
    
            references: {
                model: Urls,
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        name: { type: Sequelize.TEXT },
        value: { type: Sequelize.TEXT },
        created: Sequelize.DATE
    });
    return Meta;
};