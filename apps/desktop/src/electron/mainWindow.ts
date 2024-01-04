import { delay } from '@tonkeeper/core/dist/utils/common';
import { BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';
import { handleBackgroundMessage } from '../electron/background';
import { Message } from '../libs/message';

// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export abstract class MainWindow {
    static mainWindow: BrowserWindow | undefined = undefined;

    static async openMainWindow() {
        // Create the browser window.
        this.mainWindow = new BrowserWindow({
            icon: path.join(process.cwd(), 'public', process.platform === "darwin" ? 'icon.icns' : "icon.png"),
            width: isDev ? 1100 : 450,
            height: 700,
            resizable: isDev,
            webPreferences: {
                zoomFactor: 0.8,
                preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
            }
        });

        // and load the index.html of the app.
        this.mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

        if (isDev) {
            // Open the DevTools.
            this.mainWindow.webContents.openDevTools();
        }


        this.mainWindow.on('closed', () => {
            ipcMain.removeHandler('message');
            this.mainWindow = null;
        });

        ipcMain.handle('message', async (event, message: Message) => {
            try {
                return await handleBackgroundMessage(message);
            } catch (e) {
                return e;
            }
        });

        await delay(500);
    }
}
