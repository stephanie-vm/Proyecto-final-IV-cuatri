import {
  getBackendBody,
} from './services.js';
import {
  backendLink,
} from './util.js';

async function getPlaylist(value, id) {
  const infoBody = {
    userId: id,
    listSongs: [],
    name: value,
  };
  console.log(infoBody)
  const fav = await getBackendBody(infoBody, 'POST', `${backendLink}/playList`);
  console.log(fav);
}

export{
  createPlaylist,
};
