// general function, get api and data
import { getBackend } from './modules/services.js';
// util varaibles of differents links for doing request api
import {
  anchorHome,
  anchorProfile,
  anchorPlayer,
  anchorArtist,
  params,
  backendLink,
} from './modules/util.js';

// get data of api
const userId = params.get('userId');
const dataUser = await getBackend('GET', `${backendLink}/user/${userId}`);
const dataRecents = await getBackend('GET', `${backendLink}/rectmusic/${userId}`);
const dataFavorites = await getBackend('GET', `${backendLink}/favmusic/${userId}`);
const dataPlaylists = await getBackend('GET', `${backendLink}/playlists/${userId}`);
console.log(dataUser.data);
console.log(dataRecents.data[0]);
console.log(dataFavorites.data[0]);
console.log(dataPlaylists.data);

function itemsProfile() {
  for (let i = 0; i < dataArtist.length; i++) {
    const favoritesongs = document.querySelector('.tabs-list-profile-favorites');
    const listProfileView = document.querySelector('.tabs-list-profile');
    const liProfileView = document.createElement('li');
    listProfileView.appendChild(liProfileView);
    const anchorProfile = document.createElement('a');
    anchorProfile.setAttribute('href', `#tab-${i}`);
    anchorProfile.classList.add(`tabs-list-profile-${i}`);
    anchorProfile.classList.add('tabs-list-item-profile');
    liProfileView.appendChild(anchorProfile);
    anchorProfile.innerText = 'playlist 1';

    favoritesongs.after(liProfileView);
  }
}
itemsProfile();

//Function for create and render html about artist's image, description, songs and albums.
function tabsContentArtist() {
  for (let i = 0; i < dataArtist.length; i++) {
    const principalContentTabsProfile = document.querySelector('.tab-content-profile');
    const infoContentProfile = document.createElement('div');
    infoContentProfile.setAttribute('id', `tab-${i}`);
    infoContentProfile.setAttribute('class', 'tab-content-info-profile js-hidden');
    const parrafo = document.createElement('p');
    infoContentProfile.appendChild(parrafo);
    principalContentTabsProfile.appendChild(infoContentProfile);
    parrafo.innerText = 'imply dummy text of the printing and typesetting industry. ';
    const infoRecents = document.createElement('div');
    const infoFavorites = document.createElement('div');
    infoRecents.setAttribute('id', 'tab-recent');
    infoFavorites.setAttribute('id', 'tab-favorites');
    infoRecents.setAttribute('class', 'tab-content-info-profile js-hidden');
    infoFavorites.setAttribute('class', 'tab-content-info-profile js-hidden');
    const parrafo2 = document.createElement('p');
    const parrafo3 = document.createElement('p');
    infoRecents.appendChild(parrafo2);
    infoFavorites.appendChild(parrafo3);
    principalContentTabsProfile.appendChild(infoRecents);
    principalContentTabsProfile.appendChild(infoFavorites);
    parrafo2.innerText = 'HOLA';
    parrafo3.innerText = 'ADIOS';
  }
}
tabsContentArtist();


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
  const items = document.querySelectorAll('.tabs-list-item-profile');
  const content = document.querySelectorAll('.tab-content-info-profile');
  tabsEvent(items, content);
  content[0].classList.remove('js-hidden');
  items[0].classList.add('js-active');
}
changeStatus();

anchorHome.setAttribute('href', `home-logged-in.html?userId=${userId}`);
anchorProfile.setAttribute('href', `profile-user.html?userId=${userId}`);
anchorPlayer.setAttribute('href', `player.html?userId=${userId}`);
anchorArtist.setAttribute('href', `view-artist.html?userId=${userId}`);
