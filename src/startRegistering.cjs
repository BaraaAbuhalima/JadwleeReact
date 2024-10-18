const windows1251ToUTF8 = (buffer) => {
  const binaryUint8Array = new Uint8Array(buffer);

  let decoder = new TextDecoder("windows-1256");

  let decodedHTML = decoder.decode(binaryUint8Array);

  return decodedHTML;
};

const startRegistering = async (cookie, course) => {
  const data = {
    curFldTyp: course.curFldTyp,
    courseCod: course.courseCod,
    chCou: course.chCou,
    cCod: course.cCod,
    cHr: course.cHr,
    cTyp: course.cTyp,
    secNum: course.secNum,
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

        body: new URLSearchParams(data).toString(),
      }
    );

    const responseBuffer = await response4.arrayBuffer();
    const decodedHTML = windows1251ToUTF8(responseBuffer);
    // console.log(decodedHTML);
    console.log(new URLSearchParams(data).toString());
    const arr = decodedHTML.match(/تم إضافة المساق/gi);
    console.log(arr);
    return arr.length > 0;
  } catch (error) {
    console.error("Error occurred during fetch:", error);
  }
};
// startRegistering(
//   "JSESSIONID=s103~45D48F0E3CBC7D2F88A265117E2DEB49.tomcat2; cf_clearance=yzmfM3WSrsOgpIg5mV.2makZt.l2vH34x_bD0GbU5XE-1729249576-1.2.1.1-ifzS8saT6d..8NSjp7.z4W.M4LOHCqBSxUlQ_UvChp8Ffr0Tp1eRwhN9H5ZHRLMmUHipLzvctrEGkESLjwk.cdiHa0NnNhqTrN6WhT_kB2tAiYAwKrigcE8ECBbjqKo.VlpESuCVbuaTMjKHMk97Y15kW5ztZXkkYazoHXIEFSSap86xsjIwaM7JTp98rV6KHndIYPOpVwr.krG6gvIWMoRAryXFmj9R_6hx7byYTKuDTzbreLCvU9vGfaoEOQsEo2DWz_NMGL1UwKffSmWRRFfLxr.uI3WaNLftDM9Yd9md.HKuDg03nYKWa9meIzmwf.SaYayAWWJBwhNIR4n2AWu0uy0Aj1UezaDYHVrRij6h_I0NvcBLntHEa5ifRCks7mL6LWIniqY02D1J0m.LeAGWddsexUFCD0u4Fmv.IGraQId0axvrlQy62WtwDGU5",
//   {
//     curFldTyp: 44,
//     courseCod: 11000117,
//     chCou: 11000117,
//     cCod: 11000117,
//     cHr: 444,
//     cTyp: 1441,
//     secNum: 59,
//   }
// );
module.exports = startRegistering;
