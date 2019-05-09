const Sequelize = require('sequelize')

const sequelize = new Sequelize('cms', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false,
    charset: 'utf8'
  }
})

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established.'))
  .catch(() => console.error('Unable to connect to the database.'))

module.exports = sequelize