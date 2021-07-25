import {getApi} from './modules/services.js';
import { artistLink } from './modules/util.js';
import {
  getParam,
} from './modules/util.js';
const viewArtist = await getApi(artistLink);

// for (let i = 0; i < viewArtist.length; i++) {
//   const songsLink = artistLink + viewArtist[i].id;
//   const viewSongs = await getApi(songsLink);
//   // logica

// }

// function for create the name of artist, description and songs in the artist view
function infoArtistApi(){
  for (let i = 0; i < viewArtist.length; i++) {
    const listArtistView = document.querySelector('.tabs-list');
    const liArtistView = document.createElement('li');
    listArtistView.appendChild(liArtistView);
    const anchorArtistView = document.createElement('a');
    anchorArtistView.setAttribute('href', `#tab-${i}`);
    anchorArtistView.setAttribute('data-id', `${viewArtist[i].id}`);
    anchorArtistView.classList.add(`tabs-list-${i}`);
    anchorArtistView.classList.add('tabs-list-item');
    liArtistView.appendChild(anchorArtistView);
    anchorArtistView.innerText = `${viewArtist[i].name}`;
  }
}

infoArtistApi();
//Function tabs content
function tabsContentArtist() {
  for (let i = 0; i < viewArtist.length; i++) {
    const principalContentTabs = document.querySelector('.tab-content');
    const infoContentTabs = document.createElement('div');
    infoContentTabs.setAttribute('id', `tab-${i}`);
    infoContentTabs.setAttribute('class', 'tab-content-info js-hidden');
    principalContentTabs.appendChild(infoContentTabs);
    const profileArtist = document.createElement('div');
    profileArtist.setAttribute('class', 'profile-artist')
    const imgArtist = document.createElement('img');
    imgArtist.setAttribute('src',`${viewArtist[i].image}` );
    imgArtist.setAttribute('class', 'tab-content__img-artist');
    const descriptionArtist = document.createElement('p');
    descriptionArtist.setAttribute('class', 'tab-content__p-artist');
    descriptionArtist.innerHTML = `${viewArtist[i].description}`;
    profileArtist.appendChild(imgArtist);
    profileArtist.appendChild(descriptionArtist);
    infoContentTabs.appendChild(profileArtist);
  }
}
tabsContentArtist();
//Check id
function checkId(items, content){
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
//controller tabs
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

function changeStatus() {
  const items = document.querySelectorAll('.tabs-list-item');
  const content = document.querySelectorAll('.tab-content-info');
  tabsEvent(items, content);
  checkId(items, content);
}
changeStatus();
