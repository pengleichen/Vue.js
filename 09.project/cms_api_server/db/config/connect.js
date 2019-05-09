const Sequelize = require('sequelize')

const config = {
  host: 'localhost',
  port: 3306,
  database: 'cms',
  user: 'root',
  password: '1234'
}

console.log('init sequelize...')
console.log(`mysql: ${JSON.stringify(config)}`)

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  port: config.port,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00'
})

console.log('try to connect...')
sequelize
  .authenticate()
  .then(() => console.log('Connection has been established.'))
  .catch(() => console.error('Unable to connect to the database.'))

exports.sequelize = sequelize

const DataTypes = Sequelize.DataTypes
exports.DataTypes = DataTypes

exports.defineModel = (name, attributes) => {
  let attrs = {}
  for (let key in attributes) {
    let value = attributes[key]
    if (typeof value === 'object' && value['type']) {
      value.allowNull = value.allowNull || false
      attrs[key] = value
    } else {
      attrs[key] = {
        type: value
      }
    }
  }
  attrs.version = {
    type: DataTypes.BIGINT
  }
  attrs.createUser = {
    type: DataTypes.STRING,
    allowNull: false
  }
  attrs.updateUser = {
    type: DataTypes.STRING,
    allowNull: false
  }
  return sequelize.define(name, attrs, {
    tableName: name.toLowerCase(),
    timestamps: true,
    paranoid: true,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    hooks: {
      beforeBulkCreate(instance) {
        instance.version = 0
      },
      beforeValidate(instance) {
        if (instance.isNewRecord) {
          console.log('first')
          instance.version = 0
        } else {
          console.log('not first')
          instance.version += 1
        }
      }
    }
  })
}

module.exports = exports