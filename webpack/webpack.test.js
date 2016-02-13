/* Test Configuration
======================================================================= */
var testConfig = Object.assign({}, require('./webpack.base.js'), {
  target: undefined,
  devtool: 'inline-source-map'
});

module.exports = testConfig;
