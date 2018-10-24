'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meta = sequelize.define('Meta', {
    url: DataTypes.STRING
  }, {});
  Meta.associate = function(models) {
    // associations can be defined here
  };
  return Meta;
};