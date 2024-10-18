const fs = require("fs");
// const filename = "./cookie.txt";
const { join } = require("path");
const saveToFile = async (data) => {
  const cookie = "cf_clearance=" + data + ";";
  fs.writeFile(join(__dirname, "./cookie.txt"), cookie, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return "Error writing file:";
    } else {
      console.log(cookie);
      console.log("File saved successfully!");
      return "File saved successfully!";
    }
  });
};
module.exports = saveToFile;
