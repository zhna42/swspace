const merge = require('webpack-merge')
const main = require('./main.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(main, {
  entry: {
    app: './app/client/entry-client.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          minChunks: function (module) {
            return (/node_modules/.test(module.context) && !/\.css$/.test(module.request))
          }
        },
        commons: {
          name: 'manifest',
        }
      }
    }
  },
  plugins: [
    new VueSSRClientPlugin()
  ]
})