chrome.action.onClicked.addListener(function (tab) {
  // Request permissions when the browser action is clicked
  chrome.permissions.request({ permissions: ["activeTab", "media"] }, function (granted) {
    if (granted) {
      console.log("Permissions granted!");
    } else {
      console.log("Permissions denied!");
    }
  });
});
