// imports from other modules:
import ArtistsHome from './modules/render.js';
import {
  artistLink,
} from './modules/util.js';
import {
  getApi,
} from './modules/services.js';

// variables and instances:
const artistData = await getApi(artistLink);
const profileArtist = new ArtistsHome(artistData);

// execute functions and methods:
profileArtist.addArtitstHome();
