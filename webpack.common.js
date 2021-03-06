/* global __dirname module path require */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.join(__dirname + 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000 // byte size
            }
          }
        ]
      }
    ]
  }
};
