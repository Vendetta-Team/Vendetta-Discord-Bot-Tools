const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron')
const menuTemplate = require('./menu');
const path = require('path')
const url = require('url')
let win
let win2
let win3
let win4
let win5
let win6

const rpc = require('discord-rich-presence')('656727622235062293');

rpc.updatePresence({
  state: 'Made by 천마 [Vendetta]#4120',
  startTimestamp: Date.now(),
  largeImageKey: 'v_3_',
  instance: true,
});


function createWindow() {
  const ico = path.join(__dirname, 'asset/v2 (1).png')
  const paths = path.join
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: ico,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  })
  win.loadURL(url.format({
    pathname: paths(__dirname, './view/index.html'),
    protocol: 'file:',
    slashes: false
  }))

  win.on('closed', () => {

    app.quit()
    win = null
  })
  win.webContents.openDevTools()
  ipcMain.on('CommandsForm', (event, path) => {
    if (!win2) {
      win2 = new BrowserWindow({
        width: 800,
        height: 600,
        icon: ico,
        webPreferences: {
          nodeIntegration: true,
          nodeIntegrationInWorker: true
        }
      })
      win2.webContents.openDevTools()
      win2.loadURL(url.format({
        pathname: paths(__dirname, './view/commands.html'),
        protocol: 'file:',
        slashes: false
      }))
      win2.on('closed', () => {
        win2 = null
      })
    } else {
      win2.focus()
    }
  });

  ipcMain.on('EventsForm', (event, path) => {
    if (!win3) {
      win3 = new BrowserWindow({
        width: 800,
        height: 600,
        icon: ico,
        webPreferences: {
          nodeIntegration: true,
          nodeIntegrationInWorker: true
        }
      })
      win3.loadURL(url.format({
        pathname: paths(__dirname, './view/events.html'),
        protocol: 'file:',
        slashes: false
      }))
      win3.on('closed', () => {

        win3 = null
      })
    } else {
      win3.focus()
    }
  });
  ipcMain.on('logout', () => {
    if (win2) {
      win2.close()
    }
    if (win3) {
      win3.close()
    }
    if (win4) {
      win4.close()
    }
    if (win5) {
      win5.close()
    }
    if (win6) {
      win6.close()
    }
    const paths = path.join
    win.loadURL(paths(__dirname, './view/index.html'))
  })
  ipcMain.on('BotinfoForm', (event, path) => {
    if (!win4) {
      win4 = new BrowserWindow({
        width: 800,
        height: 600,
        icon: ico,
        webPreferences: {
          nodeIntegration: true,
          nodeIntegrationInWorker: true
        }
      })
      win4.loadURL(url.format({
        pathname: paths(__dirname, './view/botinfo.html'),
        protocol: 'file:',
        slashes: false
      }))
      win4.webContents.openDevTools()
      win4.on('closed', () => {

        win4 = null
      })
    } else {
      win4.focus()
    }
  });

  ipcMain.on('GuildsForm', (event, path) => {
    if (!win5) {
      win5 = new BrowserWindow({
        width: 800,
        height: 600,
        icon: ico,
        webPreferences: {
          nodeIntegration: true,
          nodeIntegrationInWorker: true
        }
      })
      win5.webContents.openDevTools()
      win5.loadURL(url.format({
        pathname: paths(__dirname, './view/guilds.html'),
        protocol: 'file:',
        slashes: false
      }))
      win5.on('closed', () => {

        win5 = null
      })
    } else {
      win5.focus()
    }
  });

  ipcMain.on('DatabaseForm', (event, path) => {
    if (!win6) {
      win6 = new BrowserWindow({
        width: 800,
        height: 600,
        icon: ico,
        webPreferences: {
          nodeIntegration: true,
          nodeIntegrationInWorker: true
        }
      })
      win6.loadURL(url.format({
        pathname: paths(__dirname, './view/database.html'),
        protocol: 'file:',
        slashes: false
      }))
      win6.on('closed', () => {

        win6 = null
      })
    } else {
      win6.focus()
    }
  });
}
const menu = Menu.buildFromTemplate(menuTemplate);

Menu.setApplicationMenu(menu);

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    console.clear()
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})