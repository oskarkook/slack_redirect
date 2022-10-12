chrome.webRequest.onBeforeRequest.addListener(details => {
  const url = new URL(details.url);
  if(url.pathname.startsWith("/archives/")) {
    return { redirectUrl: url.href.replace("/archives/", "/messages/") };
  }},
  { urls: ["https://*.slack.com/*"] },
  ["blocking"],
);
