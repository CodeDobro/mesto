const popupProfile = document.querySelector('.popup__profile');
const popupAdd = document.querySelector('.popup__add');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const editButton = document.querySelector('.profile__edit-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const closeButtonAdd = popupAdd.querySelector('.popup__close-button');
const inputName = popupProfile.querySelector('[name=form-name]');
const inputAbout = popupProfile.querySelector('[name=form-about]');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const saveButton = popupProfile.querySelector('.popup__save-button');
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
  popupProfile.classList.add('popup_open');
}

function closePopup() {
  popupProfile.classList.remove('popup_open');
}

function openPopupAdd() {
  // inputName.value = title.textContent;
  // inputAbout.value = subtitle.textContent;
  popupAdd.classList.add('popup_open');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_open');
}

editButton.addEventListener('click', openPopup)
closeButtonProfile.addEventListener('click', closePopup)
addButton.addEventListener('click', openPopupAdd)
closeButtonAdd.addEventListener('click', closePopupAdd)

function formSubmitHandler (evt) {
    evt.preventDefault();

    title.textContent = inputName.value;;
    subtitle.textContent = inputAbout.value;
    closePopup();
}

popupFormProfile.addEventListener('submit', formSubmitHandler);

const createElementDomNode = (item) => {
  const elementTemplate = template.content.querySelector('.element').cloneNode(true);
  elementTemplate.querySelector('.element__title').textContent = item.name;
  elementTemplate.querySelector('.element__image').src = item.link;
  elementTemplate.querySelector('.element__image').alt = item.name;

  const trashButton = elementTemplate.querySelector('.element__trash');
  trashButton.addEventListener('click', () => {
    elementTemplate.remove();
  });

  return elementTemplate;
}

const result = initialCards.map((item) => {
  return createElementDomNode(item);
});

const list = document.querySelector('.elements__list');

list.append(...result);
