import { cardData } from "../../utils/cardContent.js";
import { Card, appendToBookmarks } from "../Card/Card.js";

// Get Bookmarked Cards

cardData
  .filter((card) => card.isBookmarked)
  .forEach((card) => {
    const newCard = Card(card);
    appendToBookmarks(newCard);
    // newCard.bookmarkButton.classList.add("card__bookmark-button--clicked");
  });
