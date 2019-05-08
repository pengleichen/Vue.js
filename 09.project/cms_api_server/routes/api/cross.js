module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', '*')

  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  next()
}