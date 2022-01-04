const { contextBridge, ipcRenderer } = require("electron");

const api = {
  getConfig: () => ipcRenderer.invoke("getConfig"),
  setConfig: config => ipcRenderer.send("setConfig", config)
};
contextBridge.exposeInMainWorld("api", api);
