'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submitButton = document.querySelector('#id-submit');
const form = document.querySelector('#id-Form');

submitButton.addEventListener('click', submitButtonClick);

function submitButtonClick(event) {
  event.preventDefault();
  form.reset();
}
