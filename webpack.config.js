/* global module require */

const commonConfig = require('./webpack.common');

module.exports = (env) => {
  return Object.assign({mode: env.mode}, commonConfig);
};
