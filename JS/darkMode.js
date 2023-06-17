console.clear();

const darkModeSwitch = document.querySelector('[js-data="dark-mode-switch"]');
const backgroundColor = document.querySelector('[data-js="main-content"]');
const cardBackground = document.querySelector('[data-js="card-section"]');
const header = document.querySelector('[data-js="header');
const footerMenu = document.querySelector('[data-js="footer-menu"]');
const cardCounters = document.querySelector('[data-js="card__counters"]');

darkModeSwitch.addEventListener("change", () => {
  backgroundColor.classList.toggle("background--dark");
  cardBackground.classList.toggle("background--very-dark");
  header.classList.toggle("header__box-shadow--very-dark");
  footerMenu.classList.toggle("box-shadow--darkmode");
  cardCounters.classList.toggle("counters--background-dark");
});
