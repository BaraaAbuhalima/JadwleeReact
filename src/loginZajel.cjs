const fs = require("fs").promises;
const filename = "./cookie.txt";
const { join } = require("path");
const windows1251ToUTF8 = (buffer) => {
  const binaryUint8Array = new Uint8Array(buffer);

  let decoder = new TextDecoder("windows-1256");

  let decodedHTML = decoder.decode(binaryUint8Array);

  return decodedHTML;
};
const readCookie = async () => {
  try {
    const data = await fs.readFile(join(__dirname, filename), "utf8");
    return data;
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

const loginZajel = async (zajelID, zajelPassword) => {
  let cookie;
  const windows1251ToUTF8 = (buffer) => {
    const binaryUint8Array = new Uint8Array(buffer);

    let decoder = new TextDecoder("windows-1256");

    let decodedHTML = decoder.decode(binaryUint8Array);

    return decodedHTML;
  };
  cookie = await readCookie();
  const headers = {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9,ar;q=0.8",
    "cache-control": "no-cache",
    // "content-length": "24",
    "content-type": "application/x-www-form-urlencoded",
    cookie: cookie,
    origin: "https://zajel.najah.edu",
    pragma: "no-cache",
    priority: "u=0, i",
    referer: "https://zajel.najah.edu/",
    "sec-ch-ua":
      '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"129.0.2792.89"',
    "sec-ch-ua-full-version-list":
      '"Microsoft Edge";v="129.0.2792.89", "Not=A?Brand";v="8.0.0.0", "Chromium";v="129.0.6668.101"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"Windows"',
    "sec-ch-ua-platform-version": '"19.0.0"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-site",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
  };
  const headers2 = {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9,ar;q=0.8",
    "cache-control": "no-cache",
    // "content-length": "5",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://zajelbs.najah.edu",
    pragma: "no-cache",
    priority: "u=0, i",
    cookie: cookie,
    referer: "https://zajelbs.najah.edu/servlet/mainN",
    "sec-ch-ua":
      '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"129.0.2792.89"',
    "sec-ch-ua-full-version-list":
      '"Microsoft Edge";v="129.0.2792.89", "Not=A?Brand";v="8.0.0.0", "Chromium";v="129.0.6668.101"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"Windows"',
    "sec-ch-ua-platform-version": '"19.0.0"',
    "sec-fetch-dest": "iframe",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
  };

  try {
    const response1 = await fetch(
      "https://zajelbs.najah.edu/servlet/ZajelGate",
      {
        method: "POST",
        headers: headers,
        body: "startDate=&liun=" + zajelID,
      }
    );
    // console.log(zajelID);
    // console.log(cookie);
    console.log(response1.ok);
    headers["cookie"] += response1.headers.get("Set-Cookie");
    headers2["cookie"] += response1.headers.get("Set-Cookie");

    await fetch("https://zajelbs.najah.edu/servlet/ZajelGt", {
      headers: headers,
      method: "POST",
      body: "gsw=Uiu545.?",
    });

    console.log("startDate=" + Date.now());
    const response3 = await fetch("https://zajelbs.najah.edu/servlet/login", {
      headers: headers,
      method: "POST",
      body: "startDate=" + Date.now(),
    });

    headers["referer"] = "https://zajelbs.najah.edu/servlet/mainN";
    console.log(headers2["cookie"]);
    console.log(response3.ok);

    const response4 = await fetch(
      "https://zajelbs.najah.edu/servlet/SchPreRegStu",
      {
        headers: headers2,
        method: "POST",
        body: "",
      }
    );

    // const responseBuffer = await response4.arrayBuffer();
    return headers2["cookie"];
  } catch (error) {
    console.error("Error occurred during fetch:", error);
  }
};
loginZajel("12217207", "Uiu545.?");
module.exports = loginZajel;
