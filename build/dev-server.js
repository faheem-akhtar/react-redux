var webpack = require('webpack')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')

const config = require('../config')
var webpackConfig = require('./webpack.dev.conf');

module.exports = (app, port) => {
  var compiler = webpack(webpackConfig)

  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    hot: true,
    quiet: true
  }))

  app.use(webpackHotMiddleware(compiler));

  app.use('*', function (req, res, next) {
    var filename = path.join(compiler.outputPath,'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });

  app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
  });
}
