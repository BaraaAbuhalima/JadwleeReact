const fs = require("fs").promises;
const filename = "cookie.txt";
const baraa = async () => {
  try {
    const data = await fs.readFile("./cookie.txt", "utf8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

baraa();
