'use strict';
module.exports = (sequelize, DataTypes) => {

  const Urls = sequelize.define('Urls', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    url: Sequelize.STRING,
    created: Sequelize.DATE
  }, {

  });
  Urls.associate = function(models) {
    // associations can be defined here
  };
  return Urls;
};