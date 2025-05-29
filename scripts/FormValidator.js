export { FormValidator };

class FormValidator {
  constructor(idForm) {
    this._idForm = idForm;
  }

  formValidator() {
    this._formSelector = document.querySelector(this._idForm);
    this._label = this._formSelector.querySelectorAll(".popup__field");
    this._inputSelector = ".popup__input";
    this._element = this._formSelector.querySelectorAll(this._inputSelector);
    this._save = this._formSelector.querySelector(".popup__save");
    this._label.forEach((label) => {
      const input = label.querySelector(".popup__input");
      const popupError = label.querySelector(`#${input.id}-error`);
      input.addEventListener("input", () => {
        this._isValid(input, popupError);
        this._toggleButtonState(input);
      });
      this._toggleButtonState(input);
    });
  }

  _hasInvalidInput() {
    const inputList = Array.from(
      this._formSelector.querySelectorAll(this._inputSelector)
    );
    return inputList.some((inputSelector) => {
      console.log(inputSelector);
      return !inputSelector.validity.valid;
    });
  }

  _toggleButtonState(_element) {
    console.log(this._element);
    if (this._hasInvalidInput(_element)) {
      this._save.classList.add("popup__save_disabled");
      this._save.setAttribute("disabled", true);
    } else {
      this._save.classList.remove("popup__save_disabled");
      this._save.removeAttribute("disabled");
    }
  }

  _isValid = (inputElement, popupError) => {
    if (!inputElement.validity.valid) {
      this._showInputError(
        this._formSelector,
        inputElement.validationMessage,
        popupError
      );
    } else {
      this._hideInputError(popupError);
    }
  };

  _showInputError = (_formSelector, errorMessage, popupError) => {
    popupError.textContent = errorMessage;
    popupError.classList.add("form__input-error_active");
  };

  _hideInputError = (popupError) => {
    popupError.classList.remove("form__input-error_active");
    popupError.textContent = "";
  };
}
