const popupElement = document.querySelector('.popup');
const popupForm = popupElement.querySelector('.popup__form');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popupElement.querySelector('.popup__close-button');
const inputName = popupElement.querySelector('[name=form-name]');
const inputAbout = popupElement.querySelector('[name=form-about]');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const saveButton = popupElement.querySelector('.popup__save-button');

const addButton = document.querySelector('.profile__add-button');

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


// document.createElement
// template строки
// tempalte тэг

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

const list = document.querySelector('.elements__list');

const result = initialCards.map((item) => {
  const li = document.createElement('li');
  li.classList.add('element');

  const img = document.createElement('img');
  img.classList.add('element__image');
  img.src = item.link;

  const div = document.createElement('div');
  div.classList.add('element__bottom-block');

  const h2 = document.createElement('h2');
  h2.classList.add('element__title');

  h2.textContent = item.name;

  li.append(img, div);

  div.append(h2);

  return li;
});

list.append(...result);

console.log(result);
