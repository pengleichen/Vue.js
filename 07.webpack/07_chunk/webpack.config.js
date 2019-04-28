const path = require('path')
const CleanWepbackPlugin = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    index1: path.resolve(__dirname, './src/index.1.js'),
    index2: path.resolve(__dirname, './src/index.2.js')
  },
  plugins: [
    new CleanWepbackPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /(node_modules|bower_components)/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
}