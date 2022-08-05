const form = document.querySelector('[data-form]');
const inputs = document.querySelectorAll('[data-input]');
const inputFirstName = document.querySelector('[data-form-first-name]');
const inputLastName = document.querySelector('[data-form-last-name]');
const inputEmail = document.querySelector('[data-form-email]');
const inputPassword = document.querySelector('[data-form-password]');
const buttonSubmit = document.querySelector('[data-form-submit]');
const errorIcon = document.querySelectorAll('[data-error-icon]');
const errorText = document.querySelectorAll('[data-error-text]');

const handleSubmit = (e) => {
  // change value of input dataset to error when user fails validation and to an empty string otherwise
  if (
    inputFirstName.value.trim() === '' ||
    inputFirstName.value.trim() == null
  ) {
    inputFirstName.dataset.input = 'error';
  } else {
    inputFirstName.dataset.input = '';
  }

  if (inputLastName.value.trim() === '' || inputLastName.value.trim() == null) {
    inputLastName.dataset.input = 'error';
  } else {
    inputLastName.dataset.input = '';
  }

  if (inputEmail.value.trim() === '' || inputEmail.value.trim() == null) {
    inputEmail.dataset.input = 'error';
  } else {
    inputEmail.dataset.input = '';
  }

  if (inputPassword.value.trim() === '' || inputPassword.value.trim() == null) {
    inputPassword.dataset.input = 'error';
  } else {
    inputPassword.dataset.input = '';
  }

  // show error message depending on data attribute
  inputs.forEach((input, i) => {
    if (input.dataset.input == 'error') {
      errorIcon[i].classList.remove('hidden');
      errorText[i].classList.remove('hidden');
      inputs[i].classList.add('error--border');
      inputs[i].classList.add('error--text');
      // prevent form submit
      e.preventDefault();
    } else {
      errorIcon[i].classList.add('hidden');
      errorText[i].classList.add('hidden');
      inputs[i].classList.remove('error--border');
      inputs[i].classList.remove('error--text');
    }
  });
};

form.addEventListener('submit', handleSubmit);
