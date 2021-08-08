// changes' modal variables :
const openModalChanges = document.getElementById('btn-modal-changes--open');
const closeModalChanges = document.getElementsByClassName('btn-modal-changes--close');
const overlayChanges = document.getElementsByClassName('modal__overlay-changes');

// artist url
const artistLink = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists';
const artistSongLink = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs';
const songLink = 'https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/';

// view artist: variables of tabs
const urlArtist = new URL(window.location);
const params = new URLSearchParams(urlArtist.search);

// select playlist
const playerSelect = document.querySelector('.player__select-js');
const optionCreate = document.querySelector('.option-create-js');

// backend url
const backendLink = 'https://paul-proyect1887.herokuapp.com';

// header anchors
const anchorHome = document.querySelector('.anchor-home-js');
const anchorProfile = document.querySelector('.anchor-profile-js');
const anchorPlayer = document.querySelector('.anchor-player-js');
const anchorArtist = document.querySelector('.anchor-artist-js');

export {
  openModalChanges,
  closeModalChanges,
  overlayChanges,
  artistLink,
  artistSongLink,
  params,
  playerSelect,
  backendLink,
  anchorHome,
  anchorProfile,
  anchorPlayer,
  anchorArtist,
  songLink,
  optionCreate,
};
