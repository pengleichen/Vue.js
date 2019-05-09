const index = require('./index')
const image = require('./image')
const api = require('./api')
module.exports = (app) => {
  app.use('/', index)
  app.use('/image', image)
  api(app)
}
