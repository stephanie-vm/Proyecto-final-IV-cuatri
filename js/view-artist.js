import {getApi} from './modules/services.js';
import { artistLink } from './modules/util.js';
import {
  content,
} from './modules/util.js';
const viewArtist = await getApi(artistLink);
console.log(viewArtist);

// function for create the name of artist, description and songs in the artist view
function infoArtistApi(viewArtist) {
  for (let i = 0; i < viewArtist.length; i++) {
    const listArtistView = document.querySelector('.tabs-list');
    const liArtistView = document.createElement('li');
    listArtistView.appendChild(liArtistView);
    const anchorArtistView = document.createElement('a');
    anchorArtistView.setAttribute('href', `#tab${i}`);
    anchorArtistView.classList.add('tabs-list-item');
    anchorArtistView.classList.add(`tabs-list${i}`);
    liArtistView.appendChild(anchorArtistView);

  }
}
infoArtistApi(viewArtist);
for (let i = 0; i < content.length; i++) {
  content[i].classList.add('js-hidden');
}

function changeStatus() {
  const artistsTabs = document.querySelectorAll('tabs-list-item');
  content[0].classList.remove('js-hidden');
  artistsTabs[0].classList.add('js-active');
}
changeStatus();

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
