const popupElement = document.querySelector('.popup');
const popupForm = popupElement.querySelector('.popup__form');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const inputName = popupElement.querySelector('[name=form-name]');
const inputAbout = popupElement.querySelector('[name=form-about]');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const saveButton = popupElement.querySelector('.popup__save-button');

function openPopup() {
  inputName.value = title.textContent;
  inputAbout.value = subtitle.textContent;
  popupElement.classList.add('popup_open');
}

function closePopup() {
  popupElement.classList.remove('popup_open');
}

editButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)

function formSubmitHandler (evt) {
    evt.preventDefault();

    title.textContent = inputName.value;;
    subtitle.textContent = inputAbout.value;
    closePopup();
}

popupForm.addEventListener('submit', formSubmitHandler);
