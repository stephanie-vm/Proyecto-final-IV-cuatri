// imports from other modules:
import {
  artistLink,
  anchorHome,
  anchorProfile,
  anchorPlayer,
  anchorArtist,
  params,
  backendLink,
  songLink,
} from './modules/util.js';
import {
  getApi,
  getBackend,
} from './modules/services.js';

// url params
const userId = params.get('userId');

// variables and instances:
const artistData = await getApi(artistLink);
const setUserName = document.querySelector('.set-name-js');
const parentSetUser = document.querySelector('.home-content-js');
const textSetUser = document.querySelector('.home-content-p-js');

function artistsHome(data) {

    // create and render html of li and anchords for artist view
    for (let i = 0; i < data.length; i++) {
      const listArtist = document.querySelector('.home-content-1__ul');
      const anchorArtist = document.createElement('a');
      anchorArtist.setAttribute('href', `view-artist.html?artistId=${data[i].id}&&userId=${userId}`);
      const liArtist = document.createElement('li');
      liArtist.setAttribute('class', 'home-content-1__li');
      liArtist.setAttribute('id', `${data[i].id}`);
      listArtist.appendChild(anchorArtist);
      anchorArtist.appendChild(liArtist);
      // create and render html image artist for artist view
      const imgArtist = document.createElement('img');
      imgArtist.setAttribute('src', `${data[i].image}`);
      imgArtist.setAttribute('class', 'home-content-1__img');
      liArtist.appendChild(imgArtist);
      // create and render html name artist for artist view
      const nameArtist = document.createElement('h3');
      nameArtist.setAttribute('class', 'home-content-1__h3');
      liArtist.appendChild(nameArtist);
      nameArtist.innerHTML = `${data[i].name}`;
  }
}

async function getUserInfo(){
  const dataUser = await getBackend('GET', `${backendLink}/user/${userId}`);
  const dataRecent = await getBackend('GET', `${backendLink}/rectmusic/${userId}`);
  setUserName.innerHTML=`Welcome, ${dataUser.data.name}`;
  const fisrtSong = dataRecent.data[0].listSongs[0];
  const songData = await getApi(`${songLink}${fisrtSong}`);
  const anchorArtist = document.createElement('img');
  anchorArtist.style.borderRadius = '200px';
  anchorArtist.style.width = '160px';
  anchorArtist.style.height = '160px';
  anchorArtist.style.marginLeft = '50px';
  anchorArtist.setAttribute('src', `${songData.image}`);
  textSetUser.innerHTML=`Go to the last song you listened: ${songData.name}`;
  parentSetUser.insertBefore(anchorArtist, textSetUser);
}

// execute functions and methods:
artistsHome(artistData);
getUserInfo();

anchorHome.setAttribute('href', `home-logged-in.html?userId=${userId}`);
anchorProfile.setAttribute('href', `profile-user.html?userId=${userId}`);
anchorPlayer.setAttribute('href', `player.html?userId=${userId}`);
anchorArtist.setAttribute('href', `view-artist.html?userId=${userId}`);
