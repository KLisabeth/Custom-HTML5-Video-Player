function openFullscreen() {
    if (video.requestFullscreen){ 
       video.requestFullscreen()
    }else if(video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
       video.webkitRequestFullscreen();
    }
    
 };