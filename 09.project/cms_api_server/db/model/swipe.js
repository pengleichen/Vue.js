const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
const sequelize = require('../config/index')
class Swipe extends Sequelize.Model {}
Swipe.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  href: {
    type: DataTypes.STRING
  }
}, {sequelize, modelName: 'swipe'})

module.exports = Swipe