import {
  validationEmail,
  validationPassword,
  validFieldSigin,
  validFieldLogin,
} from './modules/forms.js';

const formLogin = document.querySelector('#form-login');
const requiredLogin = document.querySelectorAll('.required-login-js');
const msjLogin = document.querySelector('#error-login-message');
const msjEmailLogin = document.querySelector('#validateEmailLogin');
const emailLogin = document.querySelector('#email-1');
const emailSignIn = document.querySelector('#email');
const msjEmailSigin = document.querySelector('#validateEmailSigin');
const formSignIn = document.querySelector('#form-sig-in');
const verifyPassword = document.querySelector('#error-message');
const msjSigin = document.querySelector('#error-sigin-message');
const requiredSigin = document.querySelectorAll('.required-sigin-js');

validFieldSigin(formSignIn, requiredSigin, msjSigin);
validationEmail(emailSignIn, msjSigin, msjEmailSigin);
validationPassword(formSignIn, msjSigin, verifyPassword);
validFieldLogin(formLogin, requiredLogin, msjLogin);
validationEmail(emailLogin, msjLogin, msjEmailLogin);


