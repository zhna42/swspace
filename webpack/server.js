const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const main = require('./main.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(main, {
  entry: './app/client/entry-server.js',
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})