const express = require('express')
const path = require('path')

const config = require('../config')

const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || config.dev.port;

const app = express();

if(!isProd) {
  const devServer = require('../build/dev-server')
  devServer(app, port)
} else {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

  app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
  });
}


