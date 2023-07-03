import { cardData } from "../../utils/cardContent.js";
import { Card, appendToIndex } from "../Card/Card.js";

// Get Cards for index
cardData.forEach((card) => {
  const newCard = Card(card);
  appendToIndex(newCard);
});
