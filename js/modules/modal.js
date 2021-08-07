import {
  playerSelect,
  params,
  optionCreate,
} from './util.js';

import {
  createPlaylist,
} from './playerPlaylist.js';

// add favorite's modal variables :
const closeModal = document.querySelector('.btn-modal--close');
const overlay = document.querySelector('.modal__overlay');
const form = document.querySelector('.modal__form');
const formImput = document.querySelector('.modal__input');

// modal function:
function modal(open, close, background) {
  const backgroundModal = background;
  open.addEventListener('click', () => {
    backgroundModal.style.display = 'block';
  });
  close[0].addEventListener('click', () => {
    backgroundModal.style.display = 'none';
  });
}

function selectModal() {
  const backgroundModal = overlay;
  // url params
  const userId = params.get('userId');
  if (playerSelect.value === 'Create new playlist') {
    backgroundModal.style.display = 'block';
  }
  closeModal.addEventListener('click', async () => {
    backgroundModal.style.display = 'none';
  });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (formImput.value !== '') {
      backgroundModal.style.display = 'none';
      const userPlaylist = await createPlaylist(formImput.value, userId);
      const option = document.createElement('option');
      option.innerHTML = userPlaylist.data.name;
      option.dataset.id = userPlaylist.data._id;
      optionCreate.after(option);
    }
  });
}

export {
  modal,
  selectModal,
};
