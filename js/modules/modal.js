import {
  playerSelect,
  params,
  optionCreate,
  backendLink,
} from './util.js';

import {
  createPlaylist,
} from './playerPlaylist.js';

import {
  getBackend,
  getBackendBody,
} from './services.js';

// url params
const userId = params.get('userId');

// modal function:

function editNameModal() {
  // add favorite's modal variables :
  const openTrash = document.querySelector('.edit-icon');
  const closeModal = document.querySelector('.btn-modal--close');
  const overlay = document.querySelector('.modal__overlay');
  const form = document.querySelector('.modal__form');
  const formImput = document.querySelector('.modal__input');
  openTrash.addEventListener('click', (e) => {
    overlay.style.display = 'block';
  });
  closeModal.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
  form.addEventListener('submit', async(e) => {
    e.preventDefault();
    if (formImput.value !== '') {
      const infoBody = {
        name: formImput.value,
      };
      await getBackendBody(infoBody, 'PUT', `${backendLink}/user/${userId}`);
      location.reload();
    }
    overlay.style.display = 'none';
  });
}

async function modalFavoritesSongs(openTrash) {
  console.log(openTrash);
  const backgroundModal = document.querySelector('.modal__overlay-changes');
  const close = document.querySelector('.btn-modal-changes--close');
  const cancel = document.querySelector('.cancel-btn');
  const ok = document.querySelector('.btn-save-changes');
  for (let i = 0; i < openTrash.length; i++) {
    openTrash[i].addEventListener('click', (e) => {
      backgroundModal.style.display = 'block';
      const playSong = e.currentTarget.dataset.song;
      console.log(e.currentTarget);

      ok.addEventListener('click', async () => {
        await getBackend('DELETE', `${backendLink}/favmusic/${userId}/song/${playSong}`);
        backgroundModal.style.display = 'none';
        location.reload();
      });
    });
  }
  close.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
  });
  cancel.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
  });
}

async function modalPlaylistSongs(openTrash) {
  console.log(openTrash);
  const backgroundModal = document.querySelector('.modal__overlay-changes');
  const close = document.querySelector('.btn-modal-changes--close');
  const cancel = document.querySelector('.cancel-btn');
  const ok = document.querySelector('.btn-save-changes');
  for (let i = 0; i < openTrash.length; i++) {
    openTrash[i].addEventListener('click', (e) => {
      backgroundModal.style.display = 'block';
      const playListId = e.currentTarget.dataset.id;
      const playSong = e.currentTarget.dataset.song;
      ok.addEventListener('click', async () => {
        await getBackend('DELETE', `${backendLink}/playlist/${playListId}/song/${playSong}`);
        backgroundModal.style.display = 'none';
        location.reload();
      });
    });
  }
  close.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
  });
  cancel.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
  });
}

function modalPlaylistChanges() {
  const openTrash = document.querySelectorAll('.trash');
  const backgroundModal = document.querySelector('.modal__overlay-changes');
  const close = document.querySelector('.btn-modal-changes--close');
  const cancel = document.querySelector('.cancel-btn');
  const ok = document.querySelector('.btn-save-changes');
  for (let i = 0; i < openTrash.length; i++) {
    openTrash[i].addEventListener('click', (e) => {
      backgroundModal.style.display = 'block';
      const playListId = e.currentTarget.dataset.id;
      ok.addEventListener('click', async () => {
        await getBackend('DELETE', `${backendLink}/playlist/${playListId}`);
        backgroundModal.style.display = 'none';
        location.reload();
      });
    });
  }
  close.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
  });
  cancel.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
  });
}

function selectModal() {
  // add favorite's modal variables :
  const closeModal = document.querySelector('.btn-modal--close');
  const overlay = document.querySelector('.modal__overlay');
  const form = document.querySelector('.modal__form');
  const formImput = document.querySelector('.modal__input');
  const backgroundModal = overlay;
  if (playerSelect.value === 'Create new playlist') {
    backgroundModal.style.display = 'block';
  }
  closeModal.addEventListener('click', async () => {
    backgroundModal.style.display = 'none';
  });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (formImput.value !== '') {
      const optionAdd = document.querySelector('.option-add-js');
      backgroundModal.style.display = 'none';
      const userPlaylist = await createPlaylist(formImput.value, userId);
      const option = document.createElement('option');
      option.innerHTML = userPlaylist.data.name;
      option.dataset.id = userPlaylist.data._id;
      optionCreate.after(option);
      optionAdd.selected = true;
    }
  });
}

export {
  modalPlaylistChanges,
  selectModal,
  modalPlaylistSongs,
  modalFavoritesSongs,
  editNameModal,
};
