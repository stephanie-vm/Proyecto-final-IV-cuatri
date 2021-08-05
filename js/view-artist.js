// general function, get api and data
import { getApi } from './modules/services.js';
// util varaibles of differents links for doing request api
import {
  artistLink,
  artistSongLink,
} from './modules/util.js';
// get data of api
const dataArtist = await getApi(artistLink);

// view artist: variables of tabs
const urlArtist = new URL(window.location);
const params = new URLSearchParams(urlArtist.search);
const getParam = params.get('artistId');

// function for create and render html  about name's artists
function nameArtistsTabs() {
  for (let i = 0; i < dataArtist.length; i++) {
    const listNameArtistView = document.querySelector('.tabs-list');
    const liNameArtist = document.createElement('li');
    listNameArtistView.appendChild(liNameArtist);
    const anchorNameArtist = document.createElement('a');
    anchorNameArtist.setAttribute('href', `#tab-${i}`);
    anchorNameArtist.setAttribute('data-id', `${dataArtist[i].id}`);
    anchorNameArtist.classList.add(`tabs-list-${i}`);
    anchorNameArtist.classList.add('tabs-list-item');
    liNameArtist.appendChild(anchorNameArtist);
    anchorNameArtist.innerText = `${dataArtist[i].name}`;
  }
}
nameArtistsTabs();
//Function for create and render html about artist's image, description, songs and albums.
function tabsContentArtist() {
  for (let i = 0; i < dataArtist.length; i++) {
    const principalContentTabs = document.querySelector('.tab-content');
    const infoContentTabs = document.createElement('div');
    infoContentTabs.setAttribute('id', `tab-${i}`);
    infoContentTabs.setAttribute('class', 'tab-content-info js-hidden');
    principalContentTabs.appendChild(infoContentTabs);
    const profileArtist = document.createElement('div');
    profileArtist.setAttribute('class', 'profile-artist')
    const imgArtist = document.createElement('img');
    imgArtist.setAttribute('src', `${dataArtist[i].image}`);
    imgArtist.setAttribute('class', 'tab-content__img-artist');
    const descriptionArtist = document.createElement('p');
    descriptionArtist.setAttribute('class', 'tab-content__p-artist');
    descriptionArtist.innerHTML = `${dataArtist[i].description}`;
    profileArtist.appendChild(imgArtist);
    profileArtist.appendChild(descriptionArtist);
    infoContentTabs.appendChild(profileArtist);
    tabsContentsongs(dataArtist[i].id, infoContentTabs)
  }
}
tabsContentArtist();
async function tabsContentsongs(dataArtist, contentInfoTabs) {
  const songsLink = artistSongLink + '/' + dataArtist;
  const viewSongs = await getApi(songsLink);
  const songsArtist = document.createElement('div');
  const listSongs = document.createElement('ul');
  listSongs.setAttribute('class', 'tabs-content__ul clearfix')
  songsArtist.setAttribute('class', 'list-songs');
  songsArtist.appendChild(listSongs)
  contentInfoTabs.appendChild(songsArtist);
  for (let i = 0; i < viewSongs.length; i++) {
    const liSongsTabs = document.createElement('li');
    liSongsTabs.setAttribute('class', 'tabs-content__li');
    const imgArtistSong = document.createElement('img');
    imgArtistSong.setAttribute('src', `${viewSongs[i].image}`);
    imgArtistSong.setAttribute('class', 'tabs-content__img-song');
    liSongsTabs.appendChild(imgArtistSong);
    const nameSong = document.createElement('p');
    nameSong.setAttribute('class', 'tabs-content-name-song');
    liSongsTabs.appendChild(nameSong)
    nameSong.innerText = `${viewSongs[i].name}`;
    const albumSong = document.createElement('p');
    albumSong.setAttribute('class', 'tabs-content-album-song');
    const anchordImgArtsit = document.createElement('a');
    anchordImgArtsit.setAttribute('href', `player.html?playList=artist&&song=${viewSongs[i].id}`)
    anchordImgArtsit.setAttribute('dataId', `${viewSongs[i].name}`);
    anchordImgArtsit.setAttribute('aria-labelledby', 'anchor-label');
    anchordImgArtsit.setAttribute('id', 'anchord-svg');
    const svgIcon = `
    <svg class="player-btn__icon player-icon" aria-hidden="true" focusable="false" width="60" height="66" viewBox="0 0 60 66"    fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path
          d="M53.3716 33.4893L12.0141 57.2789C8.50428 59.2957 4 56.8536 4 52.7877V5.20862C4 1.14919 8.49778 -1.29935 12.0141 0.723918L53.3716 24.5135C54.17 24.9653 54.8336 25.6185 55.2953 26.4066C55.7569 27.1948 56 28.09 56 29.0014C56 29.9128 55.7569 30.808 55.2953 31.5962C54.8336 32.3843 54.17 33.0375 53.3716 33.4893Z"
          fill="#FD635D" />
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="60" height="66" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
    `
    const spanImgArtsit = document.createElement('span');
    spanImgArtsit.innerText = 'play';
    spanImgArtsit.hidden = true;
    spanImgArtsit.setAttribute('id', 'anchor-label');
    anchordImgArtsit.innerHTML = svgIcon;
    anchordImgArtsit.appendChild(spanImgArtsit);
    liSongsTabs.appendChild(anchordImgArtsit);
    liSongsTabs.appendChild(albumSong);
    albumSong.innerText = `${viewSongs[i].album}`;
    listSongs.appendChild(liSongsTabs);
  }
}


//Function for check id and put the class active in the moment
function checkId(items, content) {
  if (getParam) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].dataset.id == getParam) {
        items[i].classList.add('js-active');
        const id = items[i].getAttribute('href').substring(1);
        if (content[i].getAttribute('id') === id) {
          content[i].classList.remove('js-hidden');
        }
      }
    }
  } else {
    content[0].classList.remove('js-hidden');
    items[0].classList.add('js-active');
  }
}
//Function for controller event click and remove or add the correct class
function tabsEvent(items, content) {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('href').substring(1);
      // eslint-disable-next-line no-shadow
      for (let i = 0; i < content.length; i++) {
        content[i].classList.add('js-hidden');
        if (content[i].getAttribute('id') === id) {
          content[i].classList.remove('js-hidden');
        }
      }
      // eslint-disable-next-line no-shadow
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('js-active');
      }
      event.currentTarget.classList.add('js-active');
    });
  }
}
// Function for change the style, in the moment that just will be active
function changeStatus() {
  const items = document.querySelectorAll('.tabs-list-item');
  const content = document.querySelectorAll('.tab-content-info');
  tabsEvent(items, content);
  checkId(items, content);
}
changeStatus();
