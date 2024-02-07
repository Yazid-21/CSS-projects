const hamburger = document.getElementById(`hamburger`);
const list = document.getElementById(`list`);

hamburger.addEventListener(`click`, () => {
  list.classList.toggle(`hidden`);
});

window.addEventListener(`offline`, () => {
  alert(`you are offline dumb ass`);
});

window.addEventListener(`online`, () => {
  alert(`now you are online`);
});

const submit = document.getElementById(`submit`);

submit.addEventListener(`click`, () => {
  alert(`stupid dumb ass u cant use it right now`);
});
