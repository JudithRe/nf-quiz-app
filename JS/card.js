console.clear();

// Variables for Bookmark Buttons

const bookmarkButton1 = getElementbyDataJS("card__bookmark-button--1");
const bookmarkButton2 = getElementbyDataJS("card__bookmark-button--2");
const bookmarkButton3 = getElementbyDataJS("card__bookmark-button--3");
const bookmarkButton4 = getElementbyDataJS("card__bookmark-button--4");
const bookmarkButton5 = getElementbyDataJS("card__bookmark-button--5");
const bookmarkButton6 = getElementbyDataJS("card__bookmark-button--6");

// Variables for Answer Buttons

const answerButton1 = getElementbyDataJS("card__answer-button--1");
const answerButton2 = getElementbyDataJS("card__answer-button--2");
const answerButton3 = getElementbyDataJS("card__answer-button--3");
const answerButton4 = getElementbyDataJS("card__answer-button--4");
const answerButton5 = getElementbyDataJS("card__answer-button--5");

// Variables for Multiple Choice Buttons
const multipleChoiceButton1 = getElementbyDataJS("card__option-button--1");
const multipleChoiceButton2 = getElementbyDataJS("card__option-button--2");
const multipleChoiceButton3 = getElementbyDataJS("card__option-button--3");

// Functions

function getElementbyDataJS(elementIdentifier) {
  const newVariable = document.querySelector(
    `[data-js="${elementIdentifier}"]`
  );
  return newVariable;
}

function toggleBookmarkButton(id) {
  id.classList.toggle("card__bookmark-button--clicked");
}

function toggleAnswerText(id) {
  const answerText = document.querySelector(
    `[data-js="card__answer-text--${id}"]`
  );

  const answerButton = document.querySelector(
    `[data-js="card__answer-button--§{id}"]`
  );

  answerText.classList.toggle("card__answer-text--show");
  if (answerText.classList.contains("card__answer-text--show")) {
    answerButton.textContent = "Hide Answer";
    answerButton.style.backgroundColor = "var(--highlight-color)";
  } else {
    answerButton.textContent = "Show Answer";
    answerButton.style.backgroundColor = "var(--main-color)";
  }
}

function multipleChoiceAnswer(id) {
  const button = document.querySelector(
    `[data-js="card__option-button--${id}"]`
  );
  if (button.classList.contains("--is-correct")) {
    button.style.backgroundColor = "var(--highlight-color)";
    button.style.animation = "vertical-shaking 0.35s 0.01s";
  } else {
    button.style.backgroundColor = "var(--wrong-highlight-color)";
    button.style.animation = "horizontal-shaking 0.35s 0.01s";
  }
}

// Event Listeners for Bookmark Buttons

bookmarkButton1.addEventListener("click", () => {
  toggleBookmarkButton(bookmarkButton1);
});
bookmarkButton2.addEventListener("click", () => {
  toggleBookmarkButton(bookmarkButton2);
});
bookmarkButton3.addEventListener("click", () => {
  toggleBookmarkButton(bookmarkButton3);
});
bookmarkButton4.addEventListener("click", () => {
  toggleBookmarkButton(bookmarkButton4);
});
bookmarkButton5.addEventListener("click", () => {
  toggleBookmarkButton(bookmarkButton5);
});
bookmarkButton6.addEventListener("click", () => {
  toggleBookmarkButton(bookmarkButton6);
});

// Event Listeners for Answer Buttons

answerButton1.addEventListener("click", () => {
  toggleAnswerText(1);
});
answerButton2.addEventListener("click", () => {
  toggleAnswerText(2);
});
answerButton3.addEventListener("click", () => {
  toggleAnswerText(3);
});
answerButton4.addEventListener("click", () => {
  toggleAnswerText(4);
});
answerButton5.addEventListener("click", () => {
  toggleAnswerText(5);
});

// Event Listeners for Multiple Choice Buttons

multipleChoiceButton1.addEventListener("click", () => {
  multipleChoiceAnswer(1);
});
multipleChoiceButton2.addEventListener("click", () => {
  multipleChoiceAnswer(2);
});
multipleChoiceButton3.addEventListener("click", () => {
  multipleChoiceAnswer(3);
});
