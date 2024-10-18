const headers = {
  accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "accept-encoding": "gzip, deflate, br, zstd",
  "accept-language": "en-US,en;q=0.9,ar;q=0.8",
  "cache-control": "no-cache",
  "content-length": "28",
  "content-type": "application/x-www-form-urlencoded",
  cookie:
    "JSESSIONID=s09~96E84B171634574A3378F9CAE9A1941B.tomcat2; cf_clearance=etMvW6F3198mT6dGZ1j5slNbJhGmKNlN5JkavhevHp8-1729161485-1.2.1.1-4g1pjUiKPohfFiunlQo35T1O4KZfWf1jIwykAMPWsDErbBGnXjVkbsPtPtLQ5Oja6yunr20PXHi2YMYr8QbfxIMNFwgkwrD0Aa4AEY9g5Ik1aMLEC55cqFgtC_K_XDdJQE8ktSGEghIsCh6WsnyXOMS8kZ0M1_Ct4Ou0RHqhZCxlSMvK4kQT3WGD9xHuZdB7T0b_E5aaSvoFQ.RG7hu3xAHEyM8mITEXzMNkuqyQIHFLwgXUyAOz8FDZNYltbPs0pCd2skomcNt8_WAMjmcedsnInHt5xAsrgp1g7Psvbb2qt3oZslFTghfbYdcgmKLTQEG7ZbCGzP6_9PS3..aeqosXtU3nCTeiLQsMOJ2JB81nnnYCAlJzEpTnInWbqu52zt0tADgj9LMud5myOrUlEc_BR9zUd2r8zesYUerECeBOXgt0PHv31jEYStGmR77q",
  origin: "https://zajelbs.najah.edu",
  pragma: "no-cache",
  priority: "u=0, i",
  referer: "https://zajelbs.najah.edu/servlet/materials",
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
  "sec-fetch-site": "same-origin",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0",
};

const getZajel = async () => {
  const response = await fetch("https://zajelbs.najah.edu/servlet/materials", {
    method: "POST",
    headers: headers,
  });
  return await response.text();
};

module.exports = getZajel;
