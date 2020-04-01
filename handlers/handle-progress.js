function handleProgress() { // will update flex-basis value in progress_field by calculating percentage. 
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }