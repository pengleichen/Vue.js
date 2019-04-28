const path = require('path')
const CleanWepbackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    index1: path.resolve(__dirname, './src/index.1.js'),
    index2: path.resolve(__dirname, './src/index.2.js')
  },
  plugins: [
    new CleanWepbackPlugin(),
    new HtmlWebpackPlugin({
      title: '07_chunk'
    })
  ],
  output: {
    filename: '[name].bundle.js?[hash]',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: "single", // 独立生成单个的runtime代码
    splitChunks: {
      cacheGroups: {
        vendors: { // 公共仓库，依赖的vendors包
          test: /(node_modules|bower_components)/,
          name: 'vendors',
          chunks: 'all',
          maxSize: 1024 * 100 // 根据大小进行拆分
        },
        default: { // 默认其他情况下的功能，主要是项目内部的本身公共模块
          name: 'commons',
          chunks: 'all',
          minSize: 0, // 默认是 30 KB，这是打包所有的公共功能
          maxSize: 0,
          minChunks: 2,
          reuseExistingChunk: false
        }
      }
    }
  }
}