const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 3000
  },
  output: {
    filename: '[name].bundle.js?[hash]',
    chunkFilename: '[name].bundle.js?[hash]',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /(node_modules|bower_components)/,
          name: 'vendors',
          chunks: 'all'
        },
        default: {
          name: 'commons',
          minSize: 0,
          maxSize: 0,
          minChunks: 2,
          chunks: 'all',
          reuseExistingChunk: false
        }
      }
    }
  }
}