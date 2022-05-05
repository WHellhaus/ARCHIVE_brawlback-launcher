// Modules to control application life and create native browser window
import {app, BrowserWindow, ipcMain} from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
// node modules
const path = require('path');
const fs = require('fs');
const ini = require('ini');

import { spawn_child } from './utils';
import { Launcher, SettingsData } from '../src/ContextProviders/SettingsReducer';

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
  ipcMain.handle('getConfigSettings', getConfigSettings);

  installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));

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

function updateSDCardPath(path: string) {
  const config = JSON.parse(fs.readFileSync("config.json").toString('utf8'));
  const dolphConfig = ini.parse(fs.readFileSync(config['PATH_TO_DOLPHIN_CONFIG'], 'utf-8'))
  dolphConfig.General.WiiSDCardPath = path;
  fs.writeFileSync(config['PATH_TO_DOLPHIN_CONFIG'], ini.stringify(dolphConfig, {whitespace: true}));
}

function getLaunchers() {
  return new Promise((resolve, reject) => {
    const settings = JSON.parse(fs.readFileSync("config.json").toString('utf8'));
    if ("LAUNCHERS" in settings)
      resolve(settings["LAUNCHERS"]);

    reject("LAUNCHERS key not present in config");
  })
}

function getConfigSettings() {
  return new Promise((resolve, reject) => {
    const config = JSON.parse(fs.readFileSync("config.json").toString('utf8'));

    const settings: SettingsData = {
      autoStartGame: config["AUTO_START_GAME"],
      selectedLauncherIndex: config["LAST_USED_LAUNCHER"],
      launchers: config["LAUNCHERS"].map((launcherVals: any): Launcher => {
        return {
          elfPath: launcherVals["ELF_PATH"],
          sdCardPath: launcherVals["SD_CARD_PATH"],
          name: launcherVals["NAME"]
        }
      })
    }

    resolve(settings)
  })
}

function runDolphin(event: Electron.IpcMainInvokeEvent, data: string): Promise<String> {
  console.log(data);
  const settings = JSON.parse(fs.readFileSync("config.json").toString('utf8'));
  let args: string[] = [];
  if (settings["AUTO_START_GAME"]) {
    args = ['-b', '-e', `\"${settings["PATH_TO_ISO"]}\"`];
  }
    
  return spawn_child(`${settings["PATH_TO_DOLPHIN"]}`, args);
}
