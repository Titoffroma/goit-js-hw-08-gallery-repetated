import smartGallery from "./task-1-class-done";

const initialParams = {
  galleryRef: document.querySelector(".gallery"),
  buttonRef: document.querySelector(".open-btn"),
  modalRef: document.querySelector(".lightbox"),
  modalImageRef: document.querySelector(".lightbox__image"),
  closeButtonRef: document.querySelector(".lightbox__button"),
};

const myGallery = new smartGallery(initialParams);

myGallery.buttonRef.addEventListener(
  "click",
  myGallery.openGallery.bind(myGallery)
);
