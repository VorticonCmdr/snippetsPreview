let previewURL = chrome.runtime.getURL("preview.html");

chrome.action.onClicked.addListener((tab) => {

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["js/preview-content-script.js"]
  });
  chrome.tabs.create({
    url: previewURL,
    active: false
  });

});
