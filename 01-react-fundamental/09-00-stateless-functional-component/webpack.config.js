const pathResolve = require('path').resolve;

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8888,
    contentBase: pathResolve('./')
  },
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // devtool:  'eval', // Shows uncompiled webpack source code during development mode (use this when debug webpack)
  devtool:  'eval-source-map', // Shows original code during development mode (use this when debug application)
  // devtool:  'cheap-module-eval-source-map', // Won't pause in debugger, and show no code (don't use this)
}

