'use strict';
module.exports = (sequelize, DataTypes) => {
  const UrlsImages = sequelize.define('UrlsImages', {
    url: DataTypes.STRING
  }, {});
  UrlsImages.associate = function(models) {
    // associations can be defined here
  };
  return UrlsImages;
};