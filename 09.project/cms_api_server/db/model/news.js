const {DataTypes, defineModel} = require('../config/connect')

const News = defineModel('news', {
  id: { //自增长id,主键,整形
    type: DataTypes.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  title: DataTypes.STRING,
  publishedAt: DataTypes.DATE,
  description: DataTypes.TEXT,
  like: DataTypes.BIGINT(11),
  imgUrl: DataTypes.STRING
})

module.exports = News

