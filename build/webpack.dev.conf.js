var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var baseWebpackConfig = require('./webpack.base.conf')

baseWebpackConfig.entry.app = [
  'webpack-hot-middleware/client',
  'react-hot-loader/patch',
  'webpack/hot/only-dev-server',
  ...baseWebpackConfig.entry.app
]

module.exports = merge(baseWebpackConfig, {
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': config.dev.env
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    })
  ]
});
