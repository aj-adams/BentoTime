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

      // Middleware that redirects requests to `/` to use as a single-page app
      // Requests for files are expections, and re-routed to these specific locations
      middleware: [
        historyApiFallback({
          rewrites: [
            { from: /\.html/, to: '/index.html'},
            { from: /\.css/, to: '/build/styles.css'},
            { from: /\.js/, to: '/build/main.js'}
          ]
        })
      ]
    }
  })
);

module.exports = developmentConfig;
