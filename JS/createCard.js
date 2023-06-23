console.clear();
const form = getElementbyDataJS("create-form");
const formButton = getElementbyDataJS("create-form__button");
const contentArea = getElementbyDataJS("content-area");

console.log(form);

form.question.addEventListener("input", () => {
  changeCharacterDisplay("question");
});
form.answer.addEventListener("input", () => {
  changeCharacterDisplay("answer");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  createNewCardAndAddContent(data);
  form.reset();
  form.question.focus();

  // Add EventListeners for new Card
  const answerButton1 = getElementbyDataJS("card__answer-button--1");
  answerButton1.addEventListener("click", () => {
    toggleAnswerText(1);
  });

  const bookmarkButton1 = getElementbyDataJS("card__bookmark-button--1");
  bookmarkButton1.addEventListener("click", () => {
    toggleBookmarkButton(bookmarkButton1);
  });
});

// Functions

function changeCharacterDisplay(answerOrQuestion) {
  const characterDisplay = getElementbyDataJS(
    `create-form__character-display--${answerOrQuestion}`
  );
  const input = getElementbyDataJS(`${answerOrQuestion}`);

  const maxLength = input.getAttribute("maxlength");
  characterDisplay.textContent = maxLength - input.value.length;
}

function createNewCardAndAddContent(formData) {
  const newCard = document.createElement("section");
  newCard.classList.add("card");
  contentArea.append(newCard);

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("card__bookmark-button");
  bookmarkButton.setAttribute("aria-label", "bookmark this question");
  bookmarkButton.setAttribute("data-js", "card__bookmark-button--1");
  bookmarkButton.innerHTML = `<i class="bi bi-bookmark-fill"></i>`;
  newCard.append(bookmarkButton);

  const question = document.createElement("h2");
  question.textContent = formData.question;
  newCard.append(question);

  const answerButton = document.createElement("button");
  answerButton.classList.add("card__answer-button");
  answerButton.setAttribute("data-js", "card__answer-button--1");
  answerButton.textContent = "Show answer";
  newCard.append(answerButton);

  const answer = document.createElement("p");
  answer.classList.add("card__answer-text");
  answer.setAttribute("data-js", "card__answer-text--1");
  answer.textContent = formData.answer;
  newCard.append(answer);

  const tagArea = document.createElement("ul");
  tagArea.classList.add("card__tag-list");
  newCard.append(tagArea);

  const tag = document.createElement("li");
  tag.textContent = formData.yourTags;
  tagArea.append(tag);
}
