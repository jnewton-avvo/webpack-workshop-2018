/* global module require */

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = ({mode}) => {
  // const envConfig = require(`webpack.${env.mode}`);
  return webpackMerge({mode}, commonConfig);
};
