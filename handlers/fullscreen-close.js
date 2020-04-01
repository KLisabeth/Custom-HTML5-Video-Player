function fullscreenClose() {
    if (video.exitFullscreen) {
        video.exitFullscreen();
    } else if (video.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        video.webkitExitFullscreen();
    }
}
