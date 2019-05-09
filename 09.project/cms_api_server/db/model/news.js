const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes
const sequelize = require('../config/index')

class News extends Sequelize.Model { }

News.init({
  id: { //自增长id,主键,整形
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING
  }
}, {sequelize, modelName: 'news'})

