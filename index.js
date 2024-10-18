const { app, BrowserWindow, ipcMain, shell } = require("electron");
const { join } = require("path");
const getZajel = require("./src/fetchZajel.cjs");
const loginZajel = require("./src/loginZajel.cjs");
const path = require("path");
const getSchedule = require("./src/getSchedule.cjs");
const saveToFile = require("./src/saveCloudflareCookie.cjs");
const startRegistering = require("./src/startRegistering.cjs");
const { autoUpdater, AppUpdater } = require("electron-updater");
// const isDev = require("electron-is-dev");
// Enable electron-reload
// require("electron-reload")(path.join(__dirname), {
//   electron: path.join(__dirname, "node_modules", ".bin", "electron"), // Path to your electron executable
//   electronVersion: "YOUR_ELECTRON_VERSION", // Optional: specify your Electron version
// });
autoUpdater.autoDownload = true; ///false
autoUpdater.autoInstallOnAppQuit = true;
const createWindow = () => {
  const window = new BrowserWindow({
    width: 1300,
    height: 900,
    autoHideMenuBar: true,
    resizable: false,
    show: false,
    webPreferences: {
      preload: join(__dirname, "./src/preload.cjs"),

      contextIsolation: true,
    },
  });
  const startURL = "http://localhost:3000";
  // : `file://${path.join(__dirname, "./app/dist/index.html")}`;

  window.loadURL(startURL);
  // const indexPath = join(__dirname, "app", "dist", "index.html");
  // window.loadFile("./app/dist/index.html");
  window.on("ready-to-show", window.show);
  // window.webContents.openDevTools();
  // window.loadURL("http://localhost:3000/");
};

app.whenReady().then(() => {
  // getZajel().then((res) => {
  //   console.log(res);
  // });
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
  autoUpdater.checkForUpdates();
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
ipcMain.handle("fetch-zajel", async () => {
  try {
    const data = await getZajel();
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error in getZajel:", error);
    throw error; // Re-throw to handle in the renderer if needed
  }
});

ipcMain.handle("login-zajel", async (event, zajelID, zajelPassword) => {
  try {
    console.log(zajelID);
    const data = await loginZajel(zajelID, zajelPassword);
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error in getZajel:", error);
    throw error; // Re-throw to handle in the renderer if needed
  }
});
ipcMain.handle("get-schedule", async (event, cookie) => {
  try {
    const data = await getSchedule(cookie);
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error in getZajel:", error);
    throw error; // Re-throw to handle in the renderer if needed
  }
});
ipcMain.handle("save-cookie", async (event, cookie) => {
  try {
    const data = await saveToFile(cookie);
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error in getZajel:", error);
    throw error; // Re-throw to handle in the renderer if needed
  }
});
ipcMain.handle("start-registering", async (event, cookie, course) => {
  try {
    const resp = await startRegistering(cookie, course);
    return resp; // Return the fetched data
  } catch (error) {
    console.error("Error in getZajel:", error);
    throw error; // Re-throw to handle in the renderer if needed
  }
});
