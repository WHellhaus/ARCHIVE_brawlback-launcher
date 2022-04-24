// Modules to control application life and create native browser window
import {app, BrowserWindow, ipcMain} from 'electron';
import * as path from 'path';
import * as fs from 'fs';

import { spawn_child } from './utils';

//const data = fs.readFileSync("config.json");
//const json = data.toString('utf8');
//const settings = JSON.parse(data.toString('utf8'));

const startURL = 'http://localhost:3000';

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      preload: path.join(__dirname, 'preload.js')// uses preload.js because typescript will be compiled down to js in dist
    }
  })

  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')
  mainWindow.loadURL(startURL)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  ipcMain.handle('runDolphin', runDolphin);

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

function runDolphin(): Promise<String> {
  const settings = JSON.parse(fs.readFileSync("config.json").toString('utf8'));
  console.log(settings)
  let args: string[] = [];
  if (settings["AUTO_START_GAME"]) {
    args = ['-b', '-e', `\"${settings["PATH_TO_ISO"]}\"`];
  }
    
  return spawn_child(`${settings["PATH_TO_DOLPHIN"]}`, args);
}
