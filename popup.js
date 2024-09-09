function setupCam() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then(mediaStream => {
    document.querySelector('#webcamVideo').srcObject = mediaStream;
  }).catch((error) => {
    console.warn(error);
  });
}

setupCam();