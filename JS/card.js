console.clear();

const bookmarkButton1 = document.querySelector(
  '[data-js="card__bookmark-button--1"]'
);

bookmarkButton1.addEventListener("click", () => {
  bookmarkButton1.classList.toggle("card__bookmark-button--clicked");
});

const bookmarkButton2 = document.querySelector(
  '[data-js="card__bookmark-button--2"]'
);

bookmarkButton2.addEventListener("click", () => {
  bookmarkButton2.classList.toggle("card__bookmark-button--clicked");
});

const bookmarkButton3 = document.querySelector(
  '[data-js="card__bookmark-button--3"]'
);

bookmarkButton3.addEventListener("click", () => {
  bookmarkButton3.classList.toggle("card__bookmark-button--clicked");
});

const bookmarkButton4 = document.querySelector(
  '[data-js="card__bookmark-button--4"]'
);

bookmarkButton4.addEventListener("click", () => {
  bookmarkButton4.classList.toggle("card__bookmark-button--clicked");
});

const bookmarkButton5 = document.querySelector(
  '[data-js="card__bookmark-button--5"]'
);

bookmarkButton5.addEventListener("click", () => {
  bookmarkButton5.classList.toggle("card__bookmark-button--clicked");
});

const answerButton1 = document.querySelector(
  '[data-js="card__answer-button--1"]'
);
const answerText1 = document.querySelector('[data-js="card__answer-text--1"]');

answerButton1.addEventListener("click", () => {
  answerText1.classList.toggle("card__answer-text--show");
});

const answerButton2 = document.querySelector(
  '[data-js="card__answer-button--2"]'
);
const answerText2 = document.querySelector('[data-js="card__answer-text--2"]');

answerButton2.addEventListener("click", () => {
  answerText2.classList.toggle("card__answer-text--show");
});

const answerButton3 = document.querySelector(
  '[data-js="card__answer-button--3"]'
);
const answerText3 = document.querySelector('[data-js="card__answer-text--3"]');

answerButton3.addEventListener("click", () => {
  answerText3.classList.toggle("card__answer-text--show");
});

const answerButton4 = document.querySelector(
  '[data-js="card__answer-button--4"]'
);
const answerText4 = document.querySelector('[data-js="card__answer-text--4"]');

answerButton4.addEventListener("click", () => {
  answerText4.classList.toggle("card__answer-text--show");
});

const answerButton5 = document.querySelector(
  '[data-js="card__answer-button--5"]'
);
const answerText5 = document.querySelector('[data-js="card__answer-text--5"]');

answerButton5.addEventListener("click", () => {
  answerText5.classList.toggle("card__answer-text--show");
});
