const webpack = require('webpack');

module.exports = function() {
  return new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
    }
  })
};