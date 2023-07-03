import { toggleClass } from "../../utils/helperFunctions.js";
import { getElementByDataJS } from "../../utils/helperFunctions.js";

const contentArea = getElementByDataJS("content-area");
const contentAreaBookmarks = getElementByDataJS("content-area-bookmarks");
const contentAreaCreate = getElementByDataJS("content-area__create-card");

export function Card(formData) {
  //Create Content Elements
  const newCard = document.createElement("section");
  newCard.classList.add("card");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("card__bookmark-button");
  bookmarkButton.setAttribute("aria-label", "bookmark this question");
  bookmarkButton.innerHTML = `<i class="bi bi-bookmark-fill"></i>`;
  newCard.append(bookmarkButton);

  const question = document.createElement("h2");
  question.textContent = formData.question;
  newCard.append(question);

  const answerButton = document.createElement("button");
  answerButton.classList.add("card__answer-button");
  answerButton.textContent = "Show answer";
  newCard.append(answerButton);

  const answer = document.createElement("p");
  answer.classList.add("card__answer-text");
  answer.textContent = formData.answer;
  newCard.append(answer);

  const tagArea = document.createElement("ul");
  tagArea.classList.add("card__tag-list");
  newCard.append(tagArea);

  formData.tags.split(", ").forEach((tag) => {
    const tagElement = document.createElement("li");
    tagElement.textContent = tag;
    tagArea.append(tagElement);
  });

  // Create Event Listeners
  bookmarkButton.addEventListener("click", (event) => {
    toggleClass(event.target, "card__bookmark-button--clicked");
    formData.isBookmarked.toggle("true");
  });

  answerButton.addEventListener("click", () => {
    toggleClass(answer, "card__answer-text--show");
  });

  return newCard;
}

export function BookmarkedCards(formData) {
  if (formData.isBookmarked) {
    Card(formData);
  }
}

export function appendToIndex(newCard) {
  contentArea.append(newCard);
}

export function appendToBookmarks(bookmarkedCard) {
  contentAreaBookmarks.append(bookmarkedCard);
}

export function appendToCreate(newCard) {
  contentAreaCreate.append(newCard);
}
