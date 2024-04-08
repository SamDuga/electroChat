const { app, BrowserWindow, Notification, ipcMain } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1000,
		height: 800,
		backgroundColor: 'white',
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	win.loadFile('./index.html');
	isDev && win.webContents.openDevTools();
};

if (isDev) {
	require('electron-reload')(__dirname, {
		electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
	});
}

app.whenReady().then(() => {
	createWindow();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('active', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

ipcMain.on('notify', (e, message) => {
	const notify = new Notification({ title: 'Hello!', body: message });
	notify.show();
});
