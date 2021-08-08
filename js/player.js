import {
  params,
  artistSongLink,
  playerSelect,
  anchorHome,
  anchorProfile,
  anchorPlayer,
  anchorArtist,
  backendLink,
  optionCreate,
  songLink,
} from './modules/util.js';
import {
  selectModal,
} from './modules/modal.js';
import Playersubject from './modules/player-observer.js';
import Canvas from './modules/canvas.js';
// general function, get api and data
import {
  getApi,
  getBackendBody,
  getBackend,
  
} from './modules/services.js';

// player
const prevBtn = document.querySelector('.btn__prev-js');
const playBtn = document.querySelector('.btn__play-js');
const stopBtn = document.querySelector('.btn__stop-js');
const nextBtn = document.querySelector('.btn__next-js');
const favoritesBtn = document.querySelector('.btn__favorites-js');

// dom elements
const audio = document.querySelector('#audio');
const musicTitle = document.querySelector('.container-player__title-js');


// subscribe observer
const selectSubj = new Playersubject(playerSelect, 'change');
const prevSubj = new Playersubject(prevBtn, 'click');
const playSubj = new Playersubject(playBtn, 'click');
const stopSubj = new Playersubject(stopBtn, 'click');
const nextSubj = new Playersubject(nextBtn, 'click');
const favoritesSubj = new Playersubject(favoritesBtn, 'click');

// canvas
const drawCanvas = new Canvas();

// audio api
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const audioSrc = audioCtx.createMediaElementSource(audio);

// url params
const playListParam = params.get('playList');
const songParam = params.get('song');
const artistPlaylistParam = params.get('artistPlaylist');
const userId = params.get('userId');

function audioPause() {
  audio.pause();
}

function audioVisual() {
  audioCtx.resume();
  audio.play();
  const audioAnalyser = audioCtx.createAnalyser();
  audioSrc.connect(audioAnalyser);
  audioAnalyser.connect(audioCtx.destination);
  audioAnalyser.fftSize = 512;
  const bufferLength = audioAnalyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  function draw() {
    audioAnalyser.getByteFrequencyData(dataArray);
    let count = 0;
    let radius1 = 0;
    const numCircles = 4;
    drawCanvas.clear();
    for (let i = 1; i <= numCircles; i++) {
      radius1 = dataArray[count] / (i + 0.4);
      drawCanvas.circles(i, radius1);
    }
    if (audio.play) {
      count += 1;
      window.requestAnimationFrame(draw);
    }
  }
  draw();
}

function songPlay( i, array, subs=true) {
  let index = i;
  audio.src = array[index].audio;
  musicTitle.innerHTML = array[index].name;
  musicTitle.dataset.id = array[index].id;
  function nextsong() {
    index++;
    if (index > array.length - 1) {
      index = 0;
    }
    audio.pause();
    songPlay(index, array, false);
    audio.play();
  }
  function prevsong() {
    index--;
    if (index < 0) {
      index = array.length - 1;
    }
    songPlay(index, array, false);
    audio.play();
  }
  if (subs) {
  nextSubj.subscribe(nextsong);
  prevSubj.subscribe(prevsong);
  }
}

async function addRecents(){
  const musicId = musicTitle.dataset.id;
  const infoBody = {
    userId: userId,
    listSongs: [musicId],
  };
  const hi = await getBackendBody(infoBody, 'PUT', `${backendLink}/rectmusic`);
}
async function addFavorites(){
  const musicId = musicTitle.dataset.id;
  const infoBody = {
    userId: userId,
    listSongs: [musicId],
  };
  const hi = await getBackendBody(infoBody, 'PUT', `${backendLink}/favmusic`);
  console.log(hi);
}

if (playListParam === 'artist') {
  const songsLink = `${artistSongLink}/${artistPlaylistParam}`;
  const viewSongs = await getApi(songsLink);
  for (let i = 0; i < viewSongs.length; i++) {
    if (viewSongs[i].id === songParam) {
      songPlay(i, viewSongs);
      break;
    }
  }
}else if (playListParam === 'recents') {
  const dataRecents = await getBackend('GET', `${backendLink}/rectmusic/${userId}`);
  let length = dataRecents.data[0].listSongs.length;
  const newArray = [];
  if (dataRecents.data[0].listSongs.length > 10) {
    length = 10;
  }
  for (let i = 0; i < length; i++) {
    console.log(dataRecents.data[0].listSongs[i])
    const songs = await getApi(`${songLink}${dataRecents.data[0].listSongs[i]}`);
    const songObj = {
      audio: songs.audio,
      name: songs.name,
      id: songs.id,
    }
    newArray.push(songObj)
  }
  songPlay(songParam, newArray);
} else if (playListParam === 'custom') {
  const playlistId = params.get('playListId');
  const dataPlaylists = await getBackend('GET', `${backendLink}/playlist/${playlistId}`);
  const newArray = [];
  for (let i = 0; i < dataPlaylists.data.listSongs.length; i++) {
    const songs = await getApi(`${songLink}${dataPlaylists.data.listSongs[i]}`);
    const songObj = {
      audio: songs.audio,
      name: songs.name,
      id: songs.id
    }
    newArray.push(songObj);
  }
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].id == songParam) {
      songPlay(i, newArray);
    }
  }
} else if (!playListParam) {
  const dataRecents = await getBackend('GET', `${backendLink}/rectmusic/${userId}`);
  let length = dataRecents.data[0].listSongs.length;
  const newArray = [];
  if (dataRecents.data[0].listSongs.length > 10) {
    length = 10;
  }
  for (let i = 0; i < length; i++) {
    console.log(dataRecents.data[0].listSongs[i])
    const songs = await getApi(`${songLink}${dataRecents.data[0].listSongs[i]}`);
    const songObj = {
      audio: songs.audio,
      name: songs.name,
      id: songs.id,
    }
    newArray.push(songObj)
  }
  console.log(newArray)
  songPlay(0, newArray);
}

async function getPlaylist(){
  const userPlaylist = await getBackend('GET', `${backendLink}/playlists/${userId}`);
  if (userPlaylist.data.length > 0) {
    userPlaylist.data.forEach((element) => {
      const option = document.createElement('option');
      option.innerHTML = element.name;
      option.dataset.id = element._id;
      optionCreate.after(option);
    });
  }
}


function addPlaylist(){
  const musicId = musicTitle.dataset.id;
  if (playerSelect.value !== 'Create new playlist' || playerSelect.value !== 'Add to playlist') {
    const optionSelected = document.querySelector('option:checked');
    const optionAdd = document.querySelector('.option-add-js');
    console.log(optionSelected)
    const infoBody = {
      listSongs: [musicId],
    };
    getBackendBody(infoBody, 'PUT', `${backendLink}/playlist/${optionSelected.dataset.id}`);
    setTimeout(() => {
      optionAdd.selected = true;
    }, 4000);

  }
}

getPlaylist();

playSubj.subscribe(audioVisual);
playSubj.subscribe(addRecents);
nextSubj.subscribe(addRecents);
prevSubj.subscribe(addRecents);
stopSubj.subscribe(audioPause);
selectSubj.subscribe(selectModal);
selectSubj.subscribe(addPlaylist);
favoritesSubj.subscribe(addFavorites);

anchorHome.setAttribute('href', `home-logged-in.html?userId=${userId}`);
anchorProfile.setAttribute('href', `profile-user.html?userId=${userId}`);
anchorPlayer.setAttribute('href', `player.html?userId=${userId}`);
anchorArtist.setAttribute('href', `view-artist.html?userId=${userId}`);
