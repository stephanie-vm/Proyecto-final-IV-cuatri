import { playerSelect } from "./util.js";
// modal function:
function modal(open, close, background) {
  const backgroundModal = background;
  open.addEventListener('click', () => {
    backgroundModal[0].style.display = 'block';
  });
  close[0].addEventListener('click', () => {
    backgroundModal[0].style.display = 'none';
  });
}
function selectModal(close, background) {
  const backgroundModal = background;
  if (playerSelect.value === 'Create new playlist') {
    backgroundModal[0].style.display = 'block';
  }
  close[0].addEventListener('click', () => {
    backgroundModal[0].style.display = 'none';
  });
}

export {
  modal,
  selectModal,
};
