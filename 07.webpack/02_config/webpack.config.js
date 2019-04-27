const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  // 入口
  entry: {
    // 可以有多个入口，也可以有一个，如果有一个就默认从这个一个入口开始解析
    main: path.resolve(__dirname,'index.js')
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 声明模块 包含各个loader
  module: {
    rules: [
      // style-loader, css-loader
      /*
       * 遇到后缀为 .css 的文件，webpack会用 style-loader 和 css-loader 加载器去解析这个文件
       */
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpg|jpeg|svg|png|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}