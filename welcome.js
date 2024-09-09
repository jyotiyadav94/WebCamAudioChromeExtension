navigator.mediaDevices.getUserMedia({
  video: true
}).then(mediaStream => {
  document.querySelector('#status').innerHTML =
    'Webcam access granted for extension, please close this tab';
  chrome.storage.local.set({
    'camAccess': true
  }, () => {
    // Open the popup after permission is granted
    chrome.runtime.sendMessage({ action: 'openPopup' });
  });
}).catch(err => {
  document.querySelector('#status').innerHTML =
    'Error getting webcam access for extension:'+ err.toString();
  console.error(err);
});