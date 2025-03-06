/* eslint-disable */

const hidingAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
const showingAlert = (type, msg, time = 7) => {
  hidingAlert();

  const markup = `<div class= "alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

  window.setTimeout(hidingAlert, time * 1000);
};

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showingAlert('success', alertMessage, 20);
