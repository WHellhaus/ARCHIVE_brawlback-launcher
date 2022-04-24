"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
// Modules to control application life and create native browser window
var electron_1 = require("electron");
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var utils_1 = require("./utils");
//const data = fs.readFileSync("config.json");
//const json = data.toString('utf8');
//const settings = JSON.parse(data.toString('utf8'));
var startURL = 'http://localhost:3000';
function createWindow() {
    // Create the browser window.
    var mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js') // uses preload.js because typescript will be compiled down to js in dist
        }
    });
    // and load the index.html of the app.
    //mainWindow.loadFile('index.html')
    mainWindow.loadURL(startURL);
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.whenReady().then(function () {
    electron_1.ipcMain.handle('runDolphin', runDolphin);
    createWindow();
    electron_1.app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
function runDolphin() {
    var settings = JSON.parse(fs.readFileSync("config.json").toString('utf8'));
    console.log(settings);
    var args = [];
    if (settings["AUTO_START_GAME"]) {
        args = ['-b', '-e', "\"".concat(settings["PATH_TO_ISO"], "\"")];
    }
    return (0, utils_1.spawn_child)("".concat(settings["PATH_TO_DOLPHIN"]), args);
}
