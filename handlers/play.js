function togglePlay() { // will play video or pause
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }