/* eslint-disable */

const hidAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

const shoAlert = (type, msg) => {
  hideAlert();

  const markup = `<div class= "alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

  window.setTimeout(hideAlert, 5000);
};

const stripe = Stripe(
  'pk_test_51QzHcnEVS8WMlxFdd0Z5vlu7z2RMJNW2JGazxytu6dxWMmJRPsZOprBmilPDjKsEWg0dPqkgNeeUXk7AWRqI34Yn00kBilPobx',
);

const bookTour = async (tourID) => {
  try {
    // 1) Get checkout session from the API
    const session = await axios({
      method: 'GET',
      url: `/api/v1/bookings/checkout-session/${tourID}`,
    });

    // 2) Create checkout form & charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    shoAlert('Error', err);
  }
};

const bookBtn = document.getElementById('book-tour');

if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const tourID = e.target.dataset.tourId;
    bookTour(tourID);
  });
}
