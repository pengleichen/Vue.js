const {DataTypes, defineModel} = require('../config/connect')

const Swipe = defineModel('swipe', {
  id: {
    type: DataTypes.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  href: DataTypes.STRING
})

module.exports = Swipe