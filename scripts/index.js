const popUp = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const inputName = document.querySelector("#inputname");
const inputAbout = document.querySelector("#inputabout");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popUpSave = document.querySelector(".popup__save");

editButton.addEventListener("click", () => {
  popUp.classList.toggle("popup__visible");
});
closeButton.addEventListener("click", () => {
  popUp.classList.toggle("popup__visible");
});

popUpSave.addEventListener("click", (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popUp.classList.toggle("popup__visible");
});
