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

// view artist: variables of tabs
const urlArtist = new URL(window.location);
const params = new URLSearchParams(urlArtist.search);

// select playlist
const playerSelect = document.querySelector('.player__select-js');

export {
  openModal,
  closeModal,
  overlay,
  openModalChanges,
  closeModalChanges,
  overlayChanges,
  artistLink,
  artistSongLink,
  params,
  playerSelect,
};
