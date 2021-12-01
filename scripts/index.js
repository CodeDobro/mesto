const popupProfile = document.querySelector('.popup_type_profile');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const popupOpenImage = document.querySelector('.popup_type_image');
const popupImage = popupOpenImage.querySelector('.popup__image');
const popupImageTitle = popupOpenImage.querySelector('.popup__image-title');
const popupAdd = document.querySelector('.popup_type_add');
const popupFormAdd = popupAdd.querySelector('.popup__form-add');
const editButton = document.querySelector('.profile__edit-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const closeButtonAdd = popupAdd.querySelector('.popup__close-button');
const closeButtonImage = popupOpenImage.querySelector('.popup__close-button');
const inputName = popupProfile.querySelector('[name=form-name]');
const inputAbout = popupProfile.querySelector('[name=form-about]');
const inputTitle = popupAdd.querySelector('[name=form-title]');
const inputLink = popupAdd.querySelector('[name=form-link]');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const saveButton = popupProfile.querySelector('.popup__save-button');
const template = document.querySelector('.element__template')
const addButton = document.querySelector('.profile__add-button');
const list = document.querySelector('.elements__list');

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

function openPopup(item) {
  item.classList.add('popup_open');
};

function closePopup(item) {
  item.classList.remove('popup_open');
};

editButton.addEventListener('click', () => {
  inputName.value = title.textContent;
  inputAbout.value = subtitle.textContent;
  openPopup(popupProfile);
});

closeButtonProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

closeButtonAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});

closeButtonImage.addEventListener('click', () => {
  closePopup(popupOpenImage);
});

const submitFormHandler = (evt) => {
  evt.preventDefault();

  title.textContent = inputName.value;
  subtitle.textContent = inputAbout.value;
  
  closePopup(popupProfile);
};

const renderElement = (item, meth) => {
  list[meth](item);
};

const submitFormAdd = (evt) => {
  evt.preventDefault();

  const inputAddTitle = inputTitle.value;
  const inputAddLink = inputLink.value;
  const elementName = createElementDomNode({ name: inputAddTitle, link: inputAddLink });

  renderElement(elementName, "prepend");

  inputTitle.value = '';
  inputLink.value = '';

  closePopup(popupAdd);
};

const listenTrashButton = (elementTemplate) => {
  const trashButton = elementTemplate.querySelector('.element__trash');
  trashButton.addEventListener('click', () => {
    elementTemplate.remove();
  });
};

const listenLikeButton = (elementTemplate) => {
  elementTemplate.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_status_active');
  });
};

const listenImageClick = (elementTemplate, item) => {
  elementTemplate.querySelector('.element__image').addEventListener('click', () => {
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupImageTitle.textContent = item.name;
    openPopup(popupOpenImage);
  });
};

popupFormProfile.addEventListener('submit', submitFormHandler);
popupFormAdd.addEventListener('submit', submitFormAdd);

const createElementDomNode = (item) => {
  const elementTemplate = template.content.querySelector('.element').cloneNode(true);
  elementTemplate.querySelector('.element__title').textContent = item.name;
  elementTemplate.querySelector('.element__image').src = item.link;
  elementTemplate.querySelector('.element__image').alt = item.name;

  listenImageClick(elementTemplate, item);
  listenLikeButton(elementTemplate);
  listenTrashButton(elementTemplate);

  return elementTemplate;
}

const result = initialCards.map((item) => {
  return createElementDomNode(item);
});

result.forEach((item) => {
  renderElement(item, "append");
});
