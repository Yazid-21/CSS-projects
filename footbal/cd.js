const europe = document.getElementById(`europe`);
const card1 = document.getElementById(`card1`);

europe.addEventListener(`click`, () => {
  card1.classList.toggle(`ronaldo`);
});

const card2 = document.getElementById(`card2`);
const America = document.getElementById(`America`);

America.addEventListener(`click`, () => {
  card2.classList.toggle(`messi`);
});

const Africa = document.getElementById(`Africa`);
const card3 = document.getElementById(`card3`);

Africa.addEventListener(`click`, () => {
  card3.classList.toggle(`salah`);
});

const Asia = document.getElementById(`Asia`);
const card = document.getElementById(`card`);

Asia.addEventListener(`click`, () => {
  card.classList.toggle(`son`);
});

window.addEventListener(`online`, () => {
  alert(`you now are online`);
});

window.addEventListener(`offline`, () => {
  alert(`you are offline stupid dumb ass`);
});
