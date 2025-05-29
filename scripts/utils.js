const popupElement = document.querySelector(".popup__image");
const popupImage = document.querySelector(".popup__show-image");

export function openPopup(e) {
  popupElement.classList.add("popup__image-visible");
  popupImage.src = e.target.getAttribute("src");
  popupImage.alt = e.target.getAttribute("alt");
  document.querySelector(".popup__caption").textContent =
    e.target.getAttribute("alt");
}

const closePopup = document.querySelector(".popup__close-image");
closePopup.addEventListener("click", (e) => {
  popupElement.classList.remove("popup__image-visible");
});

const popUp = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeEdit = document.querySelector(".popup__close-edit");

export function openEditPopup(e) {
  editButton.addEventListener("click", () => {
    popUp.classList.toggle("popup__visible");
  });
}
export function closeEditPopup(e) {
  closeEdit.addEventListener("click", () => {
    popUp.classList.toggle("popup__visible");
  });
}

const plusButton = document.querySelector(".profile__plus-button");
export const add = document.querySelector(".popup__add");
const closeAdd = document.querySelector(".popup__close-add");

export function openAddPopup(e) {
  plusButton.addEventListener("click", () => {
    add.classList.toggle("add__visible");
  });
}
export function closeAddPopup(e) {
  closeAdd.addEventListener("click", () => {
    add.classList.toggle("add__visible");
  });
}

export function pressEsc(e) {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      popUp.classList.remove("popup__visible");
      add.classList.remove("add__visible");
      popupElement.classList.remove("popup__image-visible");
      console.log(popupElement);
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  });
}

export function pressClickOutside() {
  document.addEventListener("click", function (e) {
    if (popUp.classList.contains("popup__visible") && e.target === popUp) {
      popUp.classList.remove("popup__visible");
    } else if (add.classList.contains("add__visible") && e.target === add) {
      add.classList.remove("add__visible");
    } else if (
      popupElement.classList.contains("popup__image-visible") &&
      e.target === popupElement
    ) {
      popupElement.classList.remove("popup__image-visible");
    }
  });
}
