console.clear();

const darkModeSwitch = document.querySelector('[js-data="dark-mode-switch"]');
const backgroundColor = document.querySelector('[data-js="main-content"]');
const cardBackground = document.querySelector('[data-js="card-section"]');

darkModeSwitch.addEventListener("change", () => {
  backgroundColor.classList.toggle("background--dark");
  cardBackground.classList.toggle("background--very-dark");
});
