/* global module require */

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (env) => {
  return webpackMerge({mode: env.mode}, commonConfig);
};
