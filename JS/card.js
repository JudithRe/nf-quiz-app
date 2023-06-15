console.clear();

const bookmarkButton = document.querySelector(
  '[data-js="card__bookmark-button"]'
);
const answerButton = document.querySelector('[data-js="card__answer-button"]');
const answerText = document.querySelector('[data-js="card__answer-text"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("card__bookmark-button--clicked");
});

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("card__answer-text--show");
});
