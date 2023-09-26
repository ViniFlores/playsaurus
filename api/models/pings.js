const { DataTypes } = require('sequelize');
const sequelize = require('.')

module.exports = sequelize.define('Ping', {
  // Model attributes are defined here
  ip: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});