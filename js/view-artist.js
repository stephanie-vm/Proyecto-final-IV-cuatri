// general function, get api and data
import { getApi } from './modules/services.js';
// util varaibles of differents links for doing request api
import {
  getParam,
  artistLink,
  artistSongLink,
} from './modules/util.js';
// get data of api
const dataArtist = await getApi(artistLink);

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
  }
}
tabsContentArtist();

async function prueba() {
  for (let i = 0; i < dataArtist.length; i++) {
    const songsLink = artistSongLink + '/' + dataArtist[i].id;
    const viewSongs = await getApi(songsLink);
  }
  const content2 = document.querySelectorAll('.tab-content-info');
  for (let i = 0; i < viewSongs.length; i++) {
    const listSongs = document.createElement('ul');
    const liSongsTabs = document.createElement('li');
    liSongsTabs.innerText = `${viewSongs[0].name}`;
    content2[0].appendChild(listSongs);
    listSongs.appendChild(liSongsTabs);
  }

}
prueba();

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

//Canciones
// //songs list
// //CANCIONES
// const songsLink = artistSongLink + '/' + dataArtist[i].id;
// const viewSongs = await getApi(songsLink);
// const listSongs = document.createElement('ul');
// const liSongsTabs = document.createElement('li');
// for (let a = 0; a < viewSongs.length; a++) {
//   const nameArtist = document.createElement('h3');
//   liSongsTabs.appendChild(nameArtist);
//   listSongs.appendChild(liSongsTabs);
//   nameArtist.innerText = `${viewSongs[a].name}`;
// }
// infoContentTabs.appendChild(listSongs);
