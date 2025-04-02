const popUp = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeEdit = document.querySelector(".popup__close-button");
const inputName = document.querySelector("#inputname");
const inputAbout = document.querySelector("#inputabout");
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
const add = document.querySelector(".add");
const closeAdd = document.querySelector(".add__close-button");
const addSave = document.querySelector(".add__save");

const inputtitle = document.querySelector("#inputtitle");
const inputlink = document.querySelector("#inputlink");
const image = document.querySelector(".grid__image");
const caption = document.querySelector(".grid__caption");

plusButton.addEventListener("click", () => {
  add.classList.toggle("add__visible");
});

closeAdd.addEventListener("click", () => {
  add.classList.toggle("add__visible");
});

const items = document.querySelector(".grid");
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

  const popUpImg = document.querySelector(".popup__image");
  const popUpShowImg = document.querySelector(".popup__show-image");
  image.addEventListener("click", () => {
    popUpImg.classList.toggle("popup__image-visible");
    popUpShowImg.src = inputlink.value;
  });

  const closeImg = document.querySelector(".popup__close-image");
  closeImg.addEventListener("click", () => {
    popUpImg.classList.remove("popup__image-visible");
  });

  items.prepend(newCard);
  add.classList.toggle("add__visible");
});
//

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

  const popUpImg = document.querySelector(".popup__image");
  const popUpShowImg = document.querySelector(".popup__show-image");
  clon.querySelector(".grid__image").addEventListener("click", () => {
    popUpImg.classList.toggle("popup__image-visible");
    popUpShowImg.src = card.image;
  });
  const closeImg = document.querySelector(".popup__close-image");
  closeImg.addEventListener("click", () => {
    popUpImg.classList.remove("popup__image-visible");
  });
});
