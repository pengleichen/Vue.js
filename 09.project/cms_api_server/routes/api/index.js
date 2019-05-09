const cross = require('./cross')
const swipe = require('./swipe')

module.exports = (app) => {
  app.use('/api/*', cross)
  app.use('/api/swipe', swipe)
}