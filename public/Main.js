const {app, BrowserWindow, protocol} = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  console.log(app.getPath('userData'));
    /*
    * 넓이 1920에 높이 1080의 FHD 풀스크린 앱을 실행시킵니다.
    * */
    const win = new BrowserWindow({
        width:1080,
        height:720,
        webPreferences: { nodeIntegration: true, contextIsolation: false }
    },);

    // win.webContents.openDevTools()

    /*
    * ELECTRON_START_URL을 직접 제공할경우 해당 URL을 로드합니다.
    * 만일 URL을 따로 지정하지 않을경우 (프로덕션빌드) React 앱이
    * 빌드되는 build 폴더의 index.html 파일을 로드합니다.
    * */
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    /*
    * startUrl에 배정되는 url을 맨 위에서 생성한 BrowserWindow에서 실행시킵니다.
    * */
    win.loadURL(startUrl);

}

// app.whenReady().then(() => {
//   protocol.registerFileProtocol('atom', (request, callback) => {
//     const url = request.url.substr(7);
//     callback({ path: path.normalize(`${__dirname}/${url}`) });
//   })
// })

app.on('ready', () => {
  // protocol.registerFileProtocol('atom', (request, callback) => {
  //   const pathname = decodeURIComponent(request.url.replace('file://', ''));
  //   callback({ path: path.normalize(pathname) })
  // });
  createWindow()
});