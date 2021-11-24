const popupElement = document.querySelector('.popup');
const popupForm = popupElement.querySelector('.popup__form');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const inputName = popupElement.querySelector('[name=form-name]');
const inputAbout = popupElement.querySelector('[name=form-about]');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const saveButton = popupElement.querySelector('.popup__save-button');
const template = document.querySelector('.element__template')
const addButton = document.querySelector('.profile__add-button');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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
addButton.addEventListener('click', openPopup)

function formSubmitHandler (evt) {
    evt.preventDefault();

    title.textContent = inputName.value;;
    subtitle.textContent = inputAbout.value;
    closePopup();
}

popupForm.addEventListener('submit', formSubmitHandler);

const createElementDomNode = (item) => {
  const elementTemplate = template.content.querySelector('.element').cloneNode(true);
  elementTemplate.querySelector('.element__title').textContent = item.name;
  elementTemplate.querySelector('.element__image').src = item.link;
  elementTemplate.querySelector('.element__image').alt = item.name;
  return elementTemplate;
}

const result = initialCards.map((item) => {
  return createElementDomNode(item);
});

const list = document.querySelector('.elements__list');

list.append(...result);
