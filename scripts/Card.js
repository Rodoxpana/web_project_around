import { openPopup } from "./utils.js";

export { Card };

class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._imageElement = data.image;
    this._caption = data.caption;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".grid__item")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".grid__image");
    this._image.src = this._imageElement;
    this._image.alt = this._caption;
    this._element.querySelector(".grid__caption").textContent = this._caption;
    this._like = this._element.querySelector(".grid__like");
    this._trash = this._element.querySelector(".grid__trash");
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    this._trash.addEventListener("click", () => {
      this._element.remove();
    });

    this._like.addEventListener("click", (e) => {
      e.target.classList.toggle("grid__like-active");
    });

    this._image.addEventListener("click", (e) => {
      openPopup(e);
    });
  }
}
