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

export {
  modal,
};
