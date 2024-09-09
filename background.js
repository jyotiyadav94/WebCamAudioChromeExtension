chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed and background script running.");
  });
  
  // You can add permission handling or other logic here as needed
  chrome.permissions.onAdded.addListener((permissions) => {
    console.log("New permissions granted:", permissions);
  });
  