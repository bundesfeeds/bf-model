const Sequelize = require('sequelize');

module.exports = (sequelize)=>{
    const Urls = require('./urls')(sequelize);
    const Links = sequelize.define('Links', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        from_urls_id: {
            type: Sequelize.INTEGER,
    
            references: {
                model: Urls,
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        to_urls_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Urls,
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        created: Sequelize.DATE
    });
    return Links;
};