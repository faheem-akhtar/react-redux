var webpack = require('webpack')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('../config')
var webpackConfig = require('./webpack.dev.conf');

module.exports = (app, port) => {
  var compiler = webpack(webpackConfig)

  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    hot: true
    // quiet: true
  }))

  app.use(webpackHotMiddleware(compiler));

  app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
  });
}
