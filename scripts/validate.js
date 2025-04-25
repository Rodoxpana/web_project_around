const resetValidation = () => {
  const popupForms = document.querySelectorAll(".popup__form");
  popupForms.forEach((popupForm) => {
    const labels = popupForm.querySelectorAll(".popup__field");
    const inputs = popupForm.querySelectorAll(".popup__input");
    const popupSave = popupForm.querySelector(".popup__save");
    labels.forEach((label) => {
      const input = label.querySelector(".popup__input");
      const popupError = label.querySelector(`#${input.id}-error`);
      input.addEventListener("input", () => {
        isValid(popupForm, input, popupError);
        toggleButtonState(inputs, popupSave);
      });
      toggleButtonState(inputs, popupSave);
    });
  });
};

const hasInvalidInput = (labels) => {
  return Array.from(labels).some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputs, popupSave) => {
  if (hasInvalidInput(inputs)) {
    popupSave.classList.add("popup__save_disabled");
    popupSave.setAttribute("disabled", true);
  } else {
    popupSave.classList.remove("popup__save_disabled");
    popupSave.removeAttribute("disabled");
  }
};

const isValid = (popup__form, input, popupError) => {
  if (!input.validity.valid) {
    showInputError(popup__form, input, input.validationMessage, popupError);
  } else {
    hideInputError(popup__form, input, popupError);
  }
};

const showInputError = (popup__form, label, errorMessage, popupError) => {
  label.classList.add("form__input_type_error");
  popupError.textContent = errorMessage;
  popupError.classList.add("form__input-error_active");
};

const hideInputError = (popup__form, label, popupError) => {
  label.classList.remove("form__input_type_error");
  popupError.classList.remove("form__input-error_active");
  popupError.textContent = "";
};

// const validationConfig = () => {};

export { resetValidation };
