const sequelize = require('../db')
const Model = sequelize.Model
class News extends Model { }

News.init({
  id: { //自增长id,主键,整形
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING(254)
  }
})