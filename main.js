 const {app ,BrowserWindow,Menu} =  require('electron')
const url = require('url')
const path = require('path')
const dev = require('electron-reload')


if(process.env.NODE_ENV !== 'production'){
    // print("node_env", process.env.NODE_ENV)
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname,'node_modules', '.bin', 'electron')

    })
}

let mainWindow

 app.on('ready', ()=>{
    mainWindow =  new BrowserWindow({
        width:600,
        height:400
    })

    mainWindow.loadURL(url.format({
        protocol:'file',
        pathname: path.join(__dirname,'index.html'),
        slashes:true
    }))
 })