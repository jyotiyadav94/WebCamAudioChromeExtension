document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const video = document.getElementById("video");

  startButton.addEventListener("click", function () {
    // Request access to the webcam and microphone
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(function (stream) {
        // Set the video source to the stream
        video.srcObject = stream;
        video.play();
      })
      .catch(function (error) {
        console.error("Error accessing webcam and microphone:", error);
        if (error.name === "NotAllowedError") {
          console.log("User denied access to webcam and microphone.");
        } else if (error.name === "NotFoundError") {
          console.log("Webcam or microphone not found.");
        } else if (error.name === "NotReadableError") {
          console.log("Webcam or microphone not readable.");
        } else {
          console.log("Unknown error:", error);
        }
      });
  });
});
