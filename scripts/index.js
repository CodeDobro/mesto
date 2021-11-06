const popupElement = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const inputName = popupElement.querySelector('.popup__input-name');
const inputAbout = popupElement.querySelector('.popup__input-about');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const saveButton = popupElement.querySelector('.popup__save-button');

function openPopup() {
  popupElement.classList.add('popup_open');
}

function closePopup() {
  popupElement.classList.remove('popup_open');
}

editButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)

function formSubmitHandler (evt) {
    evt.preventDefault();

    let userName = inputName.value;
    let userAbout = inputAbout.value;

    title.textContent = userName;
    subtitle.textContent = userAbout;
    popupElement.classList.remove('popup_open');
}

saveButton.addEventListener('click', formSubmitHandler);
