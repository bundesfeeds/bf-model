'use strict';
module.exports = (sequelize, DataTypes) => {
  const TextExtracts = sequelize.define('TextExtracts', {
    url: DataTypes.STRING
  }, {});
  TextExtracts.associate = function(models) {
    // associations can be defined here
  };
  return TextExtracts;
};