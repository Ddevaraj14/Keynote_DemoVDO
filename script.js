document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  video.controls = false; // Hide default controls
  video.muted = true; // Mute the video

  let pauseTimes = [
    7, // Pause at 5 seconds
    11, // Pause at 10 seconds
    15, // Pause at 15 seconds
    20, // Pause at 20 seconds
    // Add more pause times as needed
  ];

  let currentPauseIndex = 0;

  function managePause() {
    const currentTime = video.currentTime;

    if (currentPauseIndex < pauseTimes.length) {
      const pauseTime = pauseTimes[currentPauseIndex];

      if (currentTime >= pauseTime && !video.paused) {
        video.pause();
      } else if (currentTime < pauseTime && video.paused) {
        video.play();
      } else if (currentTime >= pauseTime) {
        currentPauseIndex++;
      }
    }
  }

  video.addEventListener("timeupdate", managePause);

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowRight":
        if (currentPauseIndex < pauseTimes.length) {
          video.play(); // Start playing
        }
        break;
      default:
        break;
    }
  });

  // Stop video after reaching the end
  video.addEventListener("ended", function () {
    video.pause();
  });
});
