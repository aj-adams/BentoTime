/* Development Configuration
======================================================================= */
var developmentConfig = require('./webpack.base.js');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var historyApiFallback = require('connect-history-api-fallback')

developmentConfig.plugins.push(
  new BrowserSyncPlugin({
    proxy: 'localhost:8080'
  })
);

module.exports = developmentConfig;
