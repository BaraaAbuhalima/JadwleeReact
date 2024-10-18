const windows1251ToUTF8 = (buffer) => {
  const binaryUint8Array = new Uint8Array(buffer);

  let decoder = new TextDecoder("windows-1256");

  let decodedHTML = decoder.decode(binaryUint8Array);

  return decodedHTML;
};

const getSchedule = async (cookie) => {
  const windows1251ToUTF8 = (buffer) => {
    const binaryUint8Array = new Uint8Array(buffer);

    let decoder = new TextDecoder("windows-1256");

    let decodedHTML = decoder.decode(binaryUint8Array);

    return decodedHTML;
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
    const response4 = await fetch(
      "https://zajelbs.najah.edu/servlet/SchPreRegStu",
      {
        headers: headers2,
        method: "POST",
        body: "main=",
      }
    );
    const responseBuffer = await response4.arrayBuffer();
    const decodedHTML = windows1251ToUTF8(responseBuffer);

    const regex = /<td><input type="checkbox" name="c" value=".+">/gi;
    const regex2 = /<td><input type="checkbox" name="c" value="|">/gi;
    const regex3 =
      /<td><input type="checkbox" name="c" value="(\d+\\\d+)"><\/td>\s*<td class="datafont">(.*?)<\/td>\s*<td class="datafont">[0-9]+\s*.+<\/td>\s*<td nowrap class="datafont">.+&nbsp;&nbsp;/gi;

    const filterd4 = decodedHTML.match(regex3);
    const names = filterd4.map((ele) => {
      return ele
        .replace(
          /<td><input type="checkbox" name="c" value="(\d+\\\d+)"><\/td>\s*<td class="datafont">(.*?)<\/td>\s*<td class="datafont">[0-9]+\s*.+<\/td>\s*<td nowrap class="datafont">|&nbsp;&nbsp;/gi,
          ""
        )
        .trim();
    });
    // console.log(names);
    const filterd = decodedHTML.match(regex);
    const filterd2 = filterd.map((ele) => {
      return ele.replace(regex2, "");
    });
    const filterd3 = filterd2.map((ele, idx) => {
      const arr = ele.split("\\");
      return {
        courseNumber: arr[0],
        class: arr[1],
        courseName: names[idx],
        curFldTyp: 3,
        courseCod: parseInt(arr[0]),
        chCou: parseInt(arr[0]),
        cCod: parseInt(arr[0]),
        cHr: 3,
        cTyp: 1441,
        secNum: parseInt(arr[1]),
      };
    });
    console.log(filterd3);
    return filterd3;
  } catch (error) {
    console.error("Error occurred during fetch:", error);
  }
};
module.exports = getSchedule;

// getSchedule(
//   "cf_clearance=jyY6bPlo82exmrveK4082P8R94ybQANUdhlmJjN6Noc-1729210467-1.2.1.1-XaoLZXX7D_M4RpNi7ZZkAXOadFV6fFK1E8tlS5FW5Ql96ewyGVbDmvWcYKFToIhbSdsJcL89kqBmo4qwaSOqgjJxIjCsAveNr1bcEGcwcDJvBdglZ.xw1jGG1wIrQG_vNXfGfDgq03B.1n08QpTdr5K2yzaXt4efLtDUtt6glP_cfa0YEYYrf7BAngDTlYFN13zaGXKdksiC48PgkhFUc56cmyTZMkF4TZ2GHWjVf3_S.Pyg_1qBizDNCJP8ns1Vj6dlp1NSPX5coqcjEVUiYdTV1Kww_703gYG0yAA5acFfqQ_nG9pMKVRrbcqAXPLljAVKnGKjIxkIgrxM2F9xJjMR056laXnJDd6aDbsm5UnuDI839VKN9H5CEWq_eb5ICNCYgoZi3SdhIZsIS62FZSF2EuEjXC8zmDi8W3X8TNlrN1ftIEsUAPrGVCk7roD_;JSESSIONID=s104~B83A415698BEE7EEFDD2C25DAC6E19F1.tomcat2; HttpOnly;Secure"
// );
