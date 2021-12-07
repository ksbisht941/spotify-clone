'use strict';

const playlist = document.querySelectorAll('.featured-list .featured-item');
const playerContainer = document.getElementById('player-container');
const mainContainer = document.getElementById('main-container');
const progressContainer = document.getElementById('progress-container');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songTitle = document.getElementById('song-title');

const progress = progressContainer.querySelector('.progress');

console.log(progress);

let audio;
playlist.forEach(el => {
    const player = el.querySelector('.playSong');
    const icon = el.querySelector('.playSong i');
    player.addEventListener('click', () => {
        audio = player.querySelector('audio');
        
        if (icon.classList.contains('bx-play')) {
            audio.play();
            icon.classList.add('bx-pause');
            icon.classList.remove('bx-play');
            playerContainer.querySelector('img').style.animationPlayState = 'running';
            
            playBtn.querySelector('.bx').classList.remove('bx-play-circle');
            playBtn.querySelector('.bx').classList.add('bx-pause-circle');
            audio.addEventListener('timeupdate', updateProgress);
        } else {
            audio.pause();
            icon.classList.remove('bx-pause');
            icon.classList.add('bx-play');
            playBtn.querySelector('.bx').classList.add('bx-play-circle');
            playBtn.querySelector('.bx').classList.remove('bx-pause-circle');
            playerContainer.querySelector('img').style.animationPlayState = 'paused';
        }

        playerContainer.classList.add('active-container');
        mainContainer.style.marginBottom = '100px';
    });
});

// Pause song
function pauseSong() {
    playBtn.querySelector('i.bx').classList.add('bx-pause-circle');
    playBtn.querySelector('i.bx').classList.remove('bx-play-circle');
    
    playerContainer.querySelector('img').style.animationPlayState = 'paused';
    audio.pause();
}

// Play song
function playSong() {
    playBtn.querySelector('i.bx').classList.remove('bx-pause-circle');
    playBtn.querySelector('i.bx').classList.add('bx-play-circle');

    playerContainer.querySelector('img').style.animationPlayState = 'running';
    audio.play();
}

// Update Progress
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set Progress
function setProgress(e) {
    console.log(e);
    const width = this.clientWidth;
    const clientX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clientX / width) * duration;
}

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Event listeners
playBtn.addEventListener('click', () => {
    console.log(audio.paused);
    audio.paused ? playSong() : pauseSong();
});