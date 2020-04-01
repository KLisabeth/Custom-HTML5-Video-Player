let mousedown = false; // will disable mousedown to read scrub function 
progress.addEventListener('click', scrub); // will read a position of  on click
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); //if mousedown is true will fire a scrub if it's false will do nothing
progress.addEventListener('mousedown', () => mousedown = true); // mousedown is true  
progress.addEventListener('mouseup', () => mousedown = false); // not mousedown is false