import{
  getBackendBody,
}from './services.js';

function validationEmail(email, msjForm, msjEmail) {
  email.addEventListener('input', () => {
    msjForm.style.display = 'none';
    const emailSpecialSymbols = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    // Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailSpecialSymbols.test(email.value)) {
      msjEmail.style.display = 'block';
      msjEmail.innerText = 'Valid email';
      msjEmail.style.color = 'green';
    } else if (email.value === '') {
      msjEmail.style.display = 'none';
    } else {
      msjEmail.style.display = 'block';
      msjEmail.innerText = 'Invalid email ';
      msjEmail.style.color = 'red';
    }
  });
}

function validationPassword(form, msjForm, msjPassword) {
  form.elements[0].addEventListener('input', () => {
    msjForm.style.display = 'none';
  });
  form.elements[2].addEventListener('input', () => {
    msjForm.style.display = 'none';
  });
  form.elements[3].addEventListener('input', (e) => {
    msjForm.style.display = 'none';
    e.preventDefault();
    if (form.elements[2].value === form.elements[3].value) {
      msjPassword.style.display = 'block';
      msjPassword.innerHTML = 'The passwords match';
      msjPassword.style.color = 'green';
    } else if (form.elements[3].value === '') {
      msjPassword.style.display = 'none';
    } else {
      msjPassword.style.display = 'block';
      msjPassword.innerHTML = 'The password doesn´t match, try again';
      msjPassword.style.color = 'red';
    }
  });
}

function getIvalid(required) {
  const invalids = [];

  required.forEach((element) => {
    const inputs = element;
    if (inputs.value === '') {
      inputs.style.border = '6px solid red';
      invalids.push(inputs);
    } else {
      inputs.style.border = 'none';
    }
  });
  return invalids;
}

function validFieldLogin(form, required, callback) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = getIvalid(required);

    // Si tenemos campos invalidos
    if (fields.length > 0) {
      msjForm.style.display = 'block';
      msjForm.innerText = 'Try again: verify the red fields';
      msjForm.style.color = 'red';
    } else {
      callback();
    }
  });
}

function validFieldSigin(form, required) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fields = getIvalid(required);

    // Si tenemos campos invalidos
    if (fields.length > 0) {
      msjForm.style.display = 'block';
      msjForm.innerText = 'Try again: verify the red fields';
      msjForm.style.color = 'red';
    } else {
      const nameInfo = form.elements[0].value;
      const emailInfo = form.elements[1].value;
      const passwordInfo = form.elements[3].value;
      const infoBody = {
        name: nameInfo,
        email: emailInfo,
        password: passwordInfo,
      };
      const data = await getBackendBody('https://paul-proyect1887.herokuapp.com/user', 'POST', infoBody);
      console.log(data);
    }
  });
}

export {
  validationEmail,
  validationPassword,
  validFieldSigin,
  validFieldLogin,
};
