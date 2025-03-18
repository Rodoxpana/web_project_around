const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const inputName = document.querySelector("#inputname");
const inputAbout = document.querySelector("#inputabout");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popUpButton = document.querySelector(".popup__button");

editButton.addEventListener("click", () => {
  popup.classList.toggle("popup__visible");
});

popUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.classList.toggle("popup__visible");
});
