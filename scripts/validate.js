const inputs = document.querySelectorAll('.popup__input')
const form = document.querySelector('form')

const validationConfig = {
  inputErrorClass: 'input_type_error'
}

const showInputError = (formElement, inputElement, { inputErrorClass }, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
  errorElement.textContent = errorMessage
  inputElement.classList.add(inputErrorClass)
  console.log(inputErrorClass)
}

const hideInputError = (formElement, inputElement, { inputErrorClass }) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}Error`)
  errorElement.textContent = ''
  inputElement.classList.remove(inputErrorClass)
}

inputs.forEach(input => {
  input.addEventListener('input', (e) => {
    if (!e.currentTarget.validity.valid) {
      showInputError(form, e.currentTarget, validationConfig, e.currentTarget.validationMessage)
    } else {
      hideInputError(form, e.currentTarget, validationConfig)
    }
  })
})

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 
