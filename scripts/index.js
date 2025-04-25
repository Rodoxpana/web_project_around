import { resetValidation } from "./validate.js";

const popUp = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeEdit = document.querySelector(".popup__close-edit");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popUpSave = document.querySelector(".popup__save");

editButton.addEventListener("click", () => {
  popUp.classList.toggle("popup__visible");
});
closeEdit.addEventListener("click", () => {
  popUp.classList.toggle("popup__visible");
});

popUpSave.addEventListener("click", (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popUp.classList.toggle("popup__visible");
});

const gridCard = document.querySelector(".grid__item");
const plusButton = document.querySelector(".profile__plus-button");
const add = document.querySelector(".popup__add");
const closeAdd = document.querySelector(".popup__close-add");
const addSave = document.querySelector(".popup__save-add");

const inputtitle = document.querySelector("#input-title");
const inputlink = document.querySelector("#input-link");
const image = document.querySelector(".grid__image");
const caption = document.querySelector(".grid__caption");

plusButton.addEventListener("click", () => {
  add.classList.toggle("add__visible");
});

closeAdd.addEventListener("click", () => {
  add.classList.toggle("add__visible");
});

const items = document.querySelector(".grid");
const popUpImg = document.querySelector(".popup__image");
const popUpShowImg = document.querySelector(".popup__show-image");
const closeImg = document.querySelector(".popup__close-image");

closeImg.addEventListener("click", () => {
  popUpImg.classList.remove("popup__image-visible");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    popUp.classList.remove("popup__visible");
    add.classList.remove("add__visible");
    popUpImg.classList.remove("popup__image-visible");
  } else if (e.key === "Enter") {
    e.preventDefault();
  }
});

document.addEventListener("click", function (e) {
  if (popUp.classList.contains("popup__visible") && e.target === popUp) {
    popUp.classList.remove("popup__visible");
  } else if (add.classList.contains("add__visible") && e.target === add) {
    add.classList.remove("add__visible");
  } else if (
    popUpImg.classList.contains("popup__image-visible") &&
    e.target === popUpImg
  ) {
    popUpImg.classList.remove("popup__image-visible");
  }
});

addSave.addEventListener("click", (e) => {
  e.preventDefault();
  const template = document.querySelector("#template").content;
  const newCard = template.querySelector(".grid__item").cloneNode(true);
  const image = newCard.querySelector(".grid__image");
  const caption = newCard.querySelector(".grid__caption");
  image.src = inputlink.value;
  caption.textContent = inputtitle.value;

  newCard.querySelector(".grid__trash").addEventListener("click", function () {
    newCard.remove();
  });

  const likeButton = newCard.querySelector(".grid__like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("grid__like-active");
  });

  image.addEventListener("click", () => {
    popUpImg.classList.toggle("popup__image-visible");
    popUpShowImg.src = inputlink.value;
  });

  items.prepend(newCard);
  add.classList.toggle("add__visible");
});

const cards = [
  {
    image: "./images/valleDeYosemite.jpg",
    caption: "Valle de Yosemite",
  },

  {
    image: "./images/lagoLouise.png",
    caption: "Lago Louise",
  },

  {
    image: "./images/montañasCalvas.png",
    caption: "Montañas Calvas",
  },

  {
    image: "./images/latemar.png",
    caption: "Latemar",
  },

  {
    image: "./images/vanoisNationalP.png",
    caption: "Vanois National Park",
  },

  {
    image: "./images/lagoDiBraies.png",
    caption: "Lago di Braies",
  },
];

cards.forEach((card) => {
  const template = document.querySelector("#template").content;
  const clon = template.querySelector(".grid__item").cloneNode(true);
  clon.querySelector(".grid__image").src = card.image;
  clon.querySelector(".grid__caption").textContent = card.caption;
  clon.querySelector(".grid__like").src = card.like;
  items.appendChild(clon);
  clon.querySelector(".grid__trash").addEventListener("click", function () {
    clon.remove();
  });

  clon.querySelector(".grid__like").addEventListener("click", () => {
    clon.querySelector(".grid__like").classList.toggle("grid__like-active");
  });

  clon.querySelector(".grid__image").addEventListener("click", () => {
    popUpImg.classList.toggle("popup__image-visible");
    popUpShowImg.src = card.image;
  });
});

resetValidation();
