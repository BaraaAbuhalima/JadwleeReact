import { app, BrowserWindow } from "electron";

const createWindow = () => {
  new BrowserWindow({
    width: 1300,
    height: 900,
    resizable: false,
  }).loadURL("http://localhost:5173/");
};

app.whenReady().then(() => {
  createWindow();
});
