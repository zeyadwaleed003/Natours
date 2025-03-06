/* eslint-disable */

const hideeAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
const showwAlert = (type, msg) => {
  hideeAlert();

  const markup = `<div class= "alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

  window.setTimeout(hideeAlert, 5000);
};

const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    location.reload(true);
  } catch (err) {
    console.log(err.message);
    showwAlert('error', 'Error logging out! Try again.');
  }
};

const logOutBtn = document.querySelector('.nav__el--logout');

if (logOutBtn) logOutBtn.addEventListener('click', logout);
