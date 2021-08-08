import {
  getBackendBody,
  getBackend,
} from './services.js';
import {
  backendLink,
} from './util.js';

async function createPlaylist(value, id) {
  const infoBody = {
    userId: id,
    listSongs: [],
    name: value,
  };
  const insertPlayList = await getBackendBody(infoBody, 'POST', `${backendLink}/playList`);
  console.log(insertPlayList);
  return insertPlayList;
}

export{
  createPlaylist,
};
