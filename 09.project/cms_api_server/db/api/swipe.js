const Swipe = require('../model/swipe')

module.exports = {
  findAll() {
    return Swipe.findAll({
      attributes: ['id', ['href', 'src']]
    })
  }
}