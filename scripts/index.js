import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import {
  closeAddPopup,
  closeEditPopup,
  openAddPopup,
  openEditPopup,
  pressClickOutside,
  pressEsc,
  add,
} from "./utils.js";

const popUp = document.querySelector(".popup");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popUpSave = document.querySelector(".popup__save");

popUpSave.addEventListener("click", (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popUp.classList.toggle("popup__visible");
});

const addSave = document.querySelector(".popup__save-add");

const inputtitle = document.querySelector("#input-title");
const inputlink = document.querySelector("#input-link");
const items = document.querySelector(".grid");

addSave.addEventListener("click", (e) => {
  e.preventDefault();
  const carta = new Card(
    {
      image: inputlink.value,
      caption: inputtitle.value,
    },
    "#template"
  );
  const cartaElement = carta.generateCard();
  items.prepend(cartaElement);
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
  const carta = new Card(
    {
      image: card.image,
      caption: card.caption,
    },
    "#template"
  );
  const cartaElement = carta.generateCard();
  items.appendChild(cartaElement);
});

const checkProfile = new FormValidator("#formProfile", "#formAdd");
checkProfile.formValidator();
const checkAdd = new FormValidator("#formAdd");
checkAdd.formValidator();
openEditPopup();
closeEditPopup();
openAddPopup();
closeAddPopup();
pressEsc();
pressClickOutside();
