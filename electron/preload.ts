import { contextBridge, ipcRenderer } from 'electron';
import { Launcher, SettingsData } from '../src/ContextProviders/SettingsReducer';

// This file should augment the properties of the `Window` with the type of the
// `ContextBridgeApi` from `Electron.contextBridge` declared in `src/preload.ts`.
export type ContextBridgeApi = {
  // Declare a `readFile` function that will return a promise. This promise
  // will contain the data of the file read from the main process.
  send: (channel:string, data?:unknown) => Promise<any>,
  runDolphin: () => void,
  getLaunchers: () => Object,
  getConfigSettings: () => Promise<any>
}

const exposedApi: ContextBridgeApi = {
  // send data from renderer to main process
  // returns a Promise that can be waited on for async calls
  send: (channel, data) => {
    return new Promise((resolve, reject) => {
      // whitelist channels
      const validChannels: String[] = [];
      if (validChannels.includes(channel)) {
        resolve(ipcRenderer.invoke(channel, data));
      }
        reject('invalid channel')
    });
  },
  runDolphin: () => ipcRenderer.invoke("runDolphin"),
  getLaunchers: async () => {
    return await ipcRenderer.invoke("getLaunchers");
  },
  getConfigSettings: async () => {
    return await ipcRenderer.invoke("getConfigSettings")
  }
}

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("api", exposedApi);
