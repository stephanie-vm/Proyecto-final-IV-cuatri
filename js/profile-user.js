// general function, get api and data
import {
  getBackend,
  getApi,
} from './modules/services.js';
// util varaibles of differents links for doing request api
import {
  anchorHome,
  anchorProfile,
  anchorPlayer,
  anchorArtist,
  params,
  backendLink,
  songLink,
} from './modules/util.js';

const userId = params.get('userId');

// get data of api
const dataUser = await getBackend('GET', `${backendLink}/user/${userId}`);
const dataRecents = await getBackend('GET', `${backendLink}/rectmusic/${userId}`);
const dataFavorites = await getBackend('GET', `${backendLink}/favmusic/${userId}`);
const dataPlaylists = await getBackend('GET', `${backendLink}/playlists/${userId}`);
console.log(dataUser.data);
console.log(dataRecents.data[0]);
console.log(dataFavorites.data[0]);
console.log(dataPlaylists.data);

function tabsPlaylist() {
  const principalContentTabsProfile = document.querySelector('.tab-content-profile');
  for (let i = 0; i < dataPlaylists.data.length; i++) {
    const favoritesongs = document.querySelector('.tabs-list-profile-favorites');
    const listProfileView = document.querySelector('.tabs-list-profile');
    const liProfileView = document.createElement('li');
    listProfileView.appendChild(liProfileView);
    const anchorProfile = document.createElement('a');
    anchorProfile.setAttribute('href', `#tab-${i}`);
    anchorProfile.classList.add('tabs-list-item-profile');
    liProfileView.appendChild(anchorProfile);
    anchorProfile.innerText = `${dataPlaylists.data[i].name}`;
    favoritesongs.after(liProfileView);
    const info = document.createElement('div');
    const list = document.createElement('ul');
    info.setAttribute('id', `tab-${i}`);
    info.setAttribute('class', 'tab-content-info-profile js-hidden');
    info.appendChild(list);
    principalContentTabsProfile.appendChild(info);
    const svgIcon = `
    <svg class="player-btn__icon player-icon" aria-hidden="true" focusable="false" width="60" height="66" viewBox="0 0 60 66"    fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M53.3716 33.4893L12.0141 57.2789C8.50428 59.2957 4 56.8536 4 52.7877V5.20862C4 1.14919 8.49778 -1.29935 12.0141 0.723918L53.3716 24.5135C54.17 24.9653 54.8336 25.6185 55.2953 26.4066C55.7569 27.1948 56 28.09 56 29.0014C56 29.9128 55.7569 30.808 55.2953 31.5962C54.8336 32.3843 54.17 33.0375 53.3716 33.4893Z"
          fill="#FD635D" />
      </g>
    </svg>
    `;
    dataPlaylists.data[i].listSongs.forEach(async(element) => {
      console.log(element)
      const listItems = document.createElement('li');
      const itemTextName = document.createElement('p');
      const itemTextAlbum = document.createElement('p');
      const anchordImgArtsit = document.createElement('a');
      const songs = await getApi(`${songLink}${element}`);
      const spanImgArtsit = document.createElement('span');
      const imgArtistSong = document.createElement('img');
      imgArtistSong.setAttribute('src', `${songs.image}`);
    imgArtistSong.setAttribute('class', 'tabs-content__img-song');
    spanImgArtsit.innerText = 'play';
    spanImgArtsit.hidden = true;
    spanImgArtsit.setAttribute('id', `anchor-label${element}`);
    anchordImgArtsit.setAttribute('href', `player.html?playList=custom&&song=${songs.id}&&userId=${userId}&&playListId=${dataPlaylists.data[i]._id}`);
    anchordImgArtsit.setAttribute('aria-labelledby', `anchor-label${element}`);
    itemTextName.innerText = `${songs.name}`;
    anchordImgArtsit.innerHTML = svgIcon;
    itemTextAlbum.innerText = `${songs.album}`;
    anchordImgArtsit.appendChild(spanImgArtsit);
    listItems.appendChild(imgArtistSong);
    listItems.appendChild(anchordImgArtsit);
    listItems.appendChild(anchordImgArtsit);
    listItems.appendChild(itemTextAlbum);
    listItems.appendChild(itemTextName);
    list.appendChild(listItems);
    });
  }
}

async function tabsFavoritesRecents(recents = false) {
  let length = dataFavorites.data[0].listSongs.length;
  let data = dataFavorites.data[0].listSongs;
  let tabId = 'tab-favorites';
  let playList = 'favorites';
  if (recents && dataRecents.data[0].listSongs.length > 10) {
    length = 10;
    data = dataRecents.data[0].listSongs;
    tabId = 'tab-recent';
    playList = 'recents';
  }else if (recents && dataRecents.data[0].listSongs.length <= 10){
    length = dataRecents.data[0].listSongs.length;
    data = dataRecents.data[0].listSongs;
    tabId = 'tab-recent';
    playList = 'recents';
  }

  const principalContentTabsProfile = document.querySelector('.tab-content-profile');
  const info = document.createElement('div');
  info.setAttribute('id', tabId);
  info.setAttribute('class', 'tab-content-info-profile js-hidden');
  const list = document.createElement('ul');
  principalContentTabsProfile.appendChild(info);
  info.appendChild(list);
  const svgIcon = `
    <svg class="player-btn__icon player-icon" aria-hidden="true" focusable="false" width="60" height="66" viewBox="0 0 60 66"    fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M53.3716 33.4893L12.0141 57.2789C8.50428 59.2957 4 56.8536 4 52.7877V5.20862C4 1.14919 8.49778 -1.29935 12.0141 0.723918L53.3716 24.5135C54.17 24.9653 54.8336 25.6185 55.2953 26.4066C55.7569 27.1948 56 28.09 56 29.0014C56 29.9128 55.7569 30.808 55.2953 31.5962C54.8336 32.3843 54.17 33.0375 53.3716 33.4893Z"
          fill="#FD635D" />
      </g>
    </svg>
    `;
  for (let i = 0; i < length; i++) {
    let whatSong;
    const listItems = document.createElement('li');
    const itemTextName = document.createElement('p');
    const itemTextAlbum = document.createElement('p');
    const anchordImgArtsit = document.createElement('a');
    const songs = await getApi(`${songLink}${data[i]}`);
    const spanImgArtsit = document.createElement('span');
    const imgArtistSong = document.createElement('img');
    if (recents){
      whatSong = i;
    }else{
      whatSong = songs.id;
    }
    imgArtistSong.setAttribute('src', `${songs.image}`);
    imgArtistSong.setAttribute('class', 'tabs-content__img-song');
    spanImgArtsit.innerText = 'play';
    spanImgArtsit.hidden = true;
    spanImgArtsit.setAttribute('id', `anchor-label${i}`);
    anchordImgArtsit.setAttribute('href', `player.html?playList=${playList}&&song=${whatSong}&&userId=${userId}`);
    anchordImgArtsit.setAttribute('aria-labelledby', `anchor-label${i}`);
    itemTextName.innerText = `${songs.name}`;
    anchordImgArtsit.innerHTML = svgIcon;
    itemTextAlbum.innerText = `${songs.album}`;
    anchordImgArtsit.appendChild(spanImgArtsit);
    listItems.appendChild(imgArtistSong);
    listItems.appendChild(anchordImgArtsit);
    listItems.appendChild(anchordImgArtsit);
    listItems.appendChild(itemTextAlbum);
    listItems.appendChild(itemTextName);
    list.appendChild(listItems);
  }
}

//Function for controller event click and remove or add the correct class
function tabsEvent(items, content) {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('href').substring(1);
      for (let i = 0; i < content.length; i++) {
        content[i].classList.add('js-hidden');
        if (content[i].getAttribute('id') === id) {
          content[i].classList.remove('js-hidden');
        }
      }
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
tabsFavoritesRecents(true);
tabsFavoritesRecents();
tabsPlaylist();
changeStatus();

anchorHome.setAttribute('href', `home-logged-in.html?userId=${userId}`);
anchorProfile.setAttribute('href', `profile-user.html?userId=${userId}`);
anchorPlayer.setAttribute('href', `player.html?userId=${userId}`);
anchorArtist.setAttribute('href', `view-artist.html?userId=${userId}`);
