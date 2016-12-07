/**
 * Created by Karl Moad on 12/7/16.
 */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


//window needs to be global object or app will instantly close
let window;

function createWindow () {
    // Create window
    window = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    window.loadURL('http://localhost:8080');

    // On close clean up catch
    window.on('closed', function () {
        // set window to be GC'd
        window = null
    })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (window === null) {
        createWindow()
    }
})