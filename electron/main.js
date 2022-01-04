const {app, BrowserWindow, ipcMain} = require("electron");
const {join} = require("path");

const isDev = !app.isPackaged;
if (isDev)
  require("electron-reload")(__dirname + '/..', {
    electron: join(__dirname, '../node_modules', '.bin', 'electron'),
    awaitWriteFinish: true,
    hardResetMethod: 'exit'
  });

function main() {

  const mainWin = new BrowserWindow({ 
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js")
    }});

  mainWin.loadURL(`file://${__dirname}/../public/index.html`);
  mainWin.on("ready-to-show", () => {
    mainWin.show();
    if (isDev)
      mainWin.webContents.openDevTools();
  });

  mainWin.on('closed', () => {
    console.log("Bye Bye");
  });

  // use when ipcRenderer.invoke
  ipcMain.handle("getConfig", () => {
    return {
      debug: true
    };});

  // use when ipcRenderer.send
  ipcMain.on("setConfig", (ev, config) => {
    console.log("==========================");
    console.log("setConfig", {config});
  });

}

app.whenReady().then(main);

app.on('window-all-closed', () => {
  app.quit()
})
