document.getElementById('togglePlayPause').addEventListener('click', function() {
    const video = document.getElementById('farmVideo');
    
    if (video.paused) {
        video.play();
        this.textContent = 'Pause Video';
    } else {
        video.pause();
        this.textContent = 'Play Video';
    }
});
