const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const webpackDevServer_host = '0.0.0.0';
const webpackDevServer_port = 9000;

const absolutePath_sourceFolder = pathResolve('src');
const absolutePath_nodeModules = pathResolve('node_modules');


const config_fn = env => {

  const config = {
    devServer: {
      historyApiFallback: true,
      host: webpackDevServer_host,
      port: webpackDevServer_port
    },
    context: absolutePath_sourceFolder,
    entry: {
      vendor: [],
      main: './main.js'
    },
    output: {
      publicPath: '/',
      filename: 'bundle.[name].js'
    },
    resolve: {
      modules: [
        absolutePath_sourceFolder,
        absolutePath_nodeModules
      ],
      extensions: ['.js', '.less', '.css']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$/,
          loader: 'file-loader?name=./imgs/[name].[hash].[ext]',
          exclude: pathResolve('src/common/fonts')
        },
        {
          test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          loader: 'file-loader?&name=fonts/[name].[ext]'
        },
        {
          test: /\.(less|css$)/,
          loader: 'style-loader!css-loader!less-loader',
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.template.html',
        favicon: './common/images/favicon.ico'
      }),
      new ProgressBarPlugin(),
    ],
    // devtool:  'eval', // Shows uncompiled webpack source code during development mode (use this when debug webpack)
    devtool:  'eval-source-map', // Shows original code during development mode (use this when debug application)
    // devtool:  'cheap-module-eval-source-map', // Won't pause in debugger, and show no code (don't use this)
  }
  return config;
};

module.exports = config_fn;

