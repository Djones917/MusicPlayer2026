const musicContainer = document.getElementById('music-container');
const playBTN = document.getElementById('play');
const prevBTN = document.getElementById('prev');
const nextBTN = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Song Titles
const songs = ['hey', 'summer', 'ukulele'];


// Keep track of songs
let songIndex = 2;


// load song details
loadSong(songs[songIndex]);


function loadSong (song) {
  title.innerText = song;
  audio.scr = `music/${song}.mp3`;
  cover.scr = `images/${song}.jpg`;
}



function playSong() {

}



playBtn.addEventListner('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
      pauseSong();
  } else {
    playSong();
  }
});

