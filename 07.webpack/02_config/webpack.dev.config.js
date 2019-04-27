const merge = require('webpack-merge')
const common = require('./webpack.config')
module.exports = merge(common, {
  mode: 'development',
  watch: true, // 文件监视改动，自动产出输出
})