let video = document.querySelector('.video');

let btnPlay = document.querySelector('.play');
let btnPause = document.querySelector('.pause');
let btnFast = document.querySelector('.speed-up');
let btnSlow = document.querySelector('.speed-down');
let btnNormal = document.querySelector('.normal');

btnPlay.addEventListener('click', (e) => {
  video.play();
});

btnPause.addEventListener('click', (e) => {
  video.pause();
});
btnFast.addEventListener('click', (e) => {
  video.play();
  video.playbackRate = 2;
});
btnSlow.addEventListener('click', (e) => {
  video.play();
  video.playbackRate = 0.5;
});

btnNormal.addEventListener('click', (e) => {
  video.play();
  video.playbackRate = 1;
});

let volumeInput = document.querySelector('.volume-input');
volumeInput.min = 0;
volumeInput.max = 10;
volumeInput.value = 5;
video.volume = 0.5;
volumeInput.addEventListener('change', (e) => {
  video.volume = e.target.value / 10;
});
