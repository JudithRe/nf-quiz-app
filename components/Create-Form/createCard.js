import { getElementByDataJS } from "../../utils/helperFunctions.js";
import { Card, appendToCreate } from "../Card/Card.js";

console.clear();
const form = getElementByDataJS("create-form");

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

  const newCard = Card(data);
  appendToCreate(newCard);
  form.reset();
  form.question.focus();
});

// Functions

function changeCharacterDisplay(answerOrQuestion) {
  const characterDisplay = getElementByDataJS(
    `create-form__character-display--${answerOrQuestion}`
  );
  const input = getElementByDataJS(`${answerOrQuestion}`);

  const maxLength = input.getAttribute("maxlength");
  characterDisplay.textContent = maxLength - input.value.length;
}
