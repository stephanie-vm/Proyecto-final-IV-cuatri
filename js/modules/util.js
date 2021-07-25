// add favorite's modal variables :
const openModal = document.getElementById('btn-modal--open');
const closeModal = document.getElementsByClassName('btn-modal--close');
const overlay = document.getElementsByClassName('modal__overlay');

// changes' modal variables :
const openModalChanges = document.getElementById('btn-modal-changes--open');
const closeModalChanges = document.getElementsByClassName('btn-modal-changes--close');
const overlayChanges = document.getElementsByClassName('modal__overlay-changes');

// view artist: variables of tabs
const urlArtist = new URL(window.location);
const params = new URLSearchParams(urlArtist.search);
const getParam = params.get('artistId');

// artist url
const artistLink = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';

//player
const prevBtn = document.querySelector('.btn__prev-js');
const playBtn = document.querySelector('.btn__play-js');
const stopBtn = document.querySelector('.btn__stop-js');
const nextBtn = document.querySelector('.btn__next-js');
const favoritesBtn = document.querySelector('.btn__favorites-js');
const playerSelect = document.querySelector('.player__select-js');

/*// canvas
const canvas = document.querySelector('.canvas');
const ctx = canvas().getContext('2d');

// temporal
const audio = document.querySelector('#audio');*/

export {
  openModal,
  closeModal,
  overlay,
  openModalChanges,
  closeModalChanges,
  overlayChanges,
  artistLink,
  getParam,
  prevBtn,
  playBtn,
  stopBtn,
  nextBtn,
  favoritesBtn,
  playerSelect,
  /*canvas,
  ctx,
  audio,*/
};
