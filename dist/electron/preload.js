"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var exposedApi = {
    // send data from renderer to main process
    // returns a Promise that can be waited on for async calls
    send: function (channel, data) {
        return new Promise(function (resolve, reject) {
            // whitelist channels
            var validChannels = ["runDolphin"];
            if (validChannels.includes(channel)) {
                resolve(electron_1.ipcRenderer.invoke(channel, data));
            }
            reject('invalid channel');
        });
    }
};
// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
electron_1.contextBridge.exposeInMainWorld("api", exposedApi);
