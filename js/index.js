// validation login email
function validationEmail() {
  const emailSignIn = document.querySelector('#email');
  emailSignIn.addEventListener('input', (event) => {
    const fieldInput = event.target;
    const checkId = document.querySelector('#validateEmail');

    const emailSpecialSymbols = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    // Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailSpecialSymbols.test(fieldInput
      .value)) {
      checkId.innerText = 'válido';
    } else if (fieldInput.value === '') {
      checkId.innerText = '';
    } else {
      checkId.innerText = 'incorrecto';
    }
  });
}
validationEmail();

function validationPassword() {
  const formSignIn = document.querySelector('#form-sig-in');
  const verifyPassword = document.querySelector('#error-message');
  formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formSignIn.elements[2].value === formSignIn.elements[3].value) {
      verifyPassword.style.display = 'none';
    } else {
      verifyPassword.style.display = 'block';
    }
  });
}
validationPassword();
