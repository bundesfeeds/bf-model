'use strict';
module.exports = (sequelize, DataTypes) => {

  const Urls = require('./urls')(sequelize, DataTypes);

  const Links = sequelize.define('Links', {
    url: DataTypes.STRING,
    from_urls_id: {
      type: DataTypes.INTEGER,
      references: {
          model: Urls,
          key: 'id',
          deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    to_urls_id: {
      type: DataTypes.INTEGER,
      references: {
          model: Urls,
          key: 'id',
          deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    created: DataTypes.DATE
  }, {});
  Links.associate = function(models) {
    // associations can be defined here
  };
  return Links;
};