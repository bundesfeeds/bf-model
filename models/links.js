'use strict';
module.exports = (sequelize, DataTypes) => {
  const Links = sequelize.define('Links', {
    url: DataTypes.STRING
  }, {});
  Links.associate = function(models) {
    // associations can be defined here
  };
  return Links;
};