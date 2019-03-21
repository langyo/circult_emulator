const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain, ipcRenderer} = electron;
const ipc = require('electron').ipcMain;

let mainWnd = null;

function createMainWnd() {
    mainWnd = new BrowserWindow({
        width:816,
        height:616,
        useContentSize: true,
        show: false,
        frame: false,
        transparent: true
    });

    mainWnd.loadURL(`file://${__dirname}/public/index.window.html`);

    mainWnd.on('ready-to-show', ()=>{
        Menu.setApplicationMenu(null);
        mainWnd.show();
        // mainWnd.webContents.openDevTools({ detach:true });
    });

  mainWnd.on('closed', () => {
    mainWnd = null;
    process.exit();
  });
}

app.on('ready', ()=>{
  createMainWnd();
});

app.on('window-all-closed', () => {
    app.quit();
});