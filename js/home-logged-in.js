// imports from other modules:
import {
  artistLink,
} from './modules/util.js';
import {
  getApi,
} from './modules/services.js';

// variables and instances:
const artistData = await getApi(artistLink);

class ArtistsHome {
  constructor(data) {
    this.data = data;
  }

  addArtitstHome() {
    // create and render html of li and anchords for artist view
    for (let i = 0; i < this.data.length; i++) {
      const listArtist = document.querySelector('.home-content-1__ul');
      const anchorArtist = document.createElement('a');
      anchorArtist.setAttribute('href', `view-artist.html?artistId=${this.data[i].id}`);
      const liArtist = document.createElement('li');
      liArtist.setAttribute('class', 'home-content-1__li');
      liArtist.setAttribute('id', `${this.data[i].id}`);
      listArtist.appendChild(anchorArtist);
      anchorArtist.appendChild(liArtist);
      // create and render html image artist for artist view
      const imgArtist = document.createElement('img');
      imgArtist.setAttribute('src', `${this.data[i].image}`);
      imgArtist.setAttribute('class', 'home-content-1__img');
      liArtist.appendChild(imgArtist);
      // create and render html name artist for artist view
      const nameArtist = document.createElement('h3');
      nameArtist.setAttribute('class', 'home-content-1__h3');
      liArtist.appendChild(nameArtist);
      nameArtist.innerHTML = `${this.data[i].name}`;
    }
  }
}
// execute functions and methods:
const profileArtist = new ArtistsHome(artistData);
profileArtist.addArtitstHome();
