'use strict';
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const crashReporter = electron.crashReporter;

require('electron-debug')();
crashReporter.start();

var mainWindow = null;

const app = electron.app;
app.on('window-all-closed', function allWindowsAreClosed() {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function initializeElectron() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  if (process.env['NODE_ENV'] == 'development') {
    setTimeout(function waitForBrowsersync() {
      mainWindow.loadURL('http://localhost:3005');
    }, 5000);
  } else {
    mainWindow.loadURL(`file://${__dirname}/public/index.html`);
  }

  mainWindow.on('closed', function exitApplication() {
    mainWindow = null;
  });
});
