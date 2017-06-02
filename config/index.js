var path = require('path')

module.exports = {
  isProd: process.env.NODE_ENV === 'production',
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/'
  },
  dev: {
    port: 8080,
    assetsPublicPath: '/'
  }
}
