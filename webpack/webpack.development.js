/* Development Configuration
======================================================================= */
var developmentConfig = require('./webpack.base.js');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var historyApiFallback = require('connect-history-api-fallback')

developmentConfig.plugins.push(
  // Run Browser sync, starting a server serving our build files
  new BrowserSyncPlugin({
    host: 'localhost',
    port: 3005,
    open: false,
    server: {
      baseDir: ['public'],
      middleware: [ historyApiFallback() ]
    }
  })
);

module.exports = developmentConfig;
