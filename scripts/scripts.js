function ensurePlayVideo(selector){
  var video = document.querySelector(selector);
  var promise = video.play();

  if (promise !== undefined) {
    promise.then(_ => {
      // Autoplay started!

    }).catch(error => {
      // Show something in the UI that the video is muted
      video.muted = true;
    });
  }
}