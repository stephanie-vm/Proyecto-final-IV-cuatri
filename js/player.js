import{
  prevBtn,
  playBtn,
  stopBtn,
  nextBtn,
  favoritesBtn,
  playerSelect,
} from './modules/util.js';
import PlayerObserver from './modules/player-observer.js';

const prevObv = extend(prevBtn, PlayerObserver);
const playObv = extend(playBtn, PlayerObserver);
const stopObv = extend(stopBtn, PlayerObserver);
const nextObv = extend(nextBtn, PlayerObserver);
const favoritesObv = extend(favoritesBtn, PlayerObserver);
const SelectObv = extend(playerSelect, PlayerObserver);
console.log(prevObv)
