/* global module require */

const path = require('path');

module.exports = {
  entry: {
    page1: './src/index',
    page2: './src/index2'
  },
  output: {
    path: path.join(__dirname + 'dist'),
    filename: '[name].bundle.js'
  }
}
