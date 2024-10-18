const { contextBridge, ipcRenderer } = require("electron");
// const { default: startRegistering } = require("./startRegistering.cjs");
// const getSchedule = require("./getScheule.cjs");
contextBridge.exposeInMainWorld("api", {
  loginZajel: async (zajelID, zajelPassword) => {
    try {
      console.log(zajelID);
      const data = await ipcRenderer.invoke(
        "login-zajel",
        zajelID,
        zajelPassword
      );
      // console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching Zajel:", error);
      throw error;
    }
  },
  getSchedule: async (cookie) => {
    try {
      const data = await ipcRenderer.invoke("get-schedule", cookie);
      return data;
    } catch (error) {
      console.error("Error fetching Zajel:", error);
      throw error;
    }
  },
  saveCookie: async (cookie) => {
    try {
      const data = await ipcRenderer.invoke("save-cookie", cookie);
      return data;
    } catch (error) {
      console.error("Error fetching Zajel:", error);
      throw error;
    }
  },
  startRegistering: async (cookie, course) => {
    try {
      const data = await ipcRenderer.invoke(
        "start-registering",
        cookie,
        course
      );
      return data;
    } catch (error) {
      console.error("Error fetching Zajel:", error);
      throw error;
    }
  },
});
