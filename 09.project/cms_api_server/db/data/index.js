const Swipe = require('./swipe')

module.exports = (req, res, next) => {
  Swipe.initData()
}