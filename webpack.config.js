var webpack = require('webpack');

module.exports = {
  context: __dirname + '/server',
  entry: './index.js',
  output: {
    path: __dirname + '/build-server',
    filename: 'index.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      },
      {
        test: /\.css?$/,
        loaders: 'null-loader'
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
