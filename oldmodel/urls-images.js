const Sequelize = require('sequelize');


module.exports = (sequelize)=>{
    const Urls = require('./urls')(sequelize);
    const Images = require('./images')(sequelize);
    
    const UrlsImages = sequelize.define('UrlsImages', {
        id: { type: Sequelize.INTEGER, primaryKey: true },
        from_urls_id: {
            type: Sequelize.INTEGER,
    
            references: {
                model: Urls,
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        to_images_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Images,
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        created: Sequelize.DATE
    });

    return UrlsImages;
};