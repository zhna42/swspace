const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../app/server/view'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader?limit=100000&name=./img/[hash].[ext]' 
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/, 
        loader: 'url-loader?limit=100000&name=./fonts/[hash].[ext]' 
      }
    ]
  },
  optimization: {minimize: isProd},
  plugins: isProd ? [
    new ExtractTextPlugin({filename: 'style.css'}),
    new VueLoaderPlugin()
  ] : [
    new VueLoaderPlugin()
  ]
}