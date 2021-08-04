// canvas
const canvas = document.querySelector('canvas');


// add favorite's modal variables :
const openModal = document.getElementById('btn-modal--open');
const closeModal = document.getElementsByClassName('btn-modal--close');
const overlay = document.getElementsByClassName('modal__overlay');

// changes' modal variables :
const openModalChanges = document.getElementById('btn-modal-changes--open');
const closeModalChanges = document.getElementsByClassName('btn-modal-changes--close');
const overlayChanges = document.getElementsByClassName('modal__overlay-changes');

// artist url
const artistLink = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
const artistSongLink = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs';

// player
const prevBtn = document.querySelector('.btn__prev-js');
const playBtn = document.querySelector('.btn__play-js');
const stopBtn = document.querySelector('.btn__stop-js');
const nextBtn = document.querySelector('.btn__next-js');
const favoritesBtn = document.querySelector('.btn__favorites-js');
const playerSelect = document.querySelector('.player__select-js');

// temporal
const audio = document.querySelector('#audio');

export {
  canvas,
  openModal,
  closeModal,
  overlay,
  openModalChanges,
  closeModalChanges,
  overlayChanges,
  artistLink,
  artistSongLink,
  prevBtn,
  playBtn,
  stopBtn,
  nextBtn,
  favoritesBtn,
  playerSelect,
  audio,
};
