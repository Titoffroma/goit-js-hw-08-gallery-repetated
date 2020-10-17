import imagesArr from "./gallery-items";
export default class smartGallery {
  constructor(params, imagesArray = imagesArr) {
    this.galleryRef = params.galleryRef;
    this.buttonRef = params.buttonRef;
    this.modalRef = params.modalRef;
    this.modalImageRef = params.modalImageRef;
    this.closeButtonRef = params.closeButtonRef;
    this.imagesArray = imagesArray;
    smartGallery.prototype.operateLightbox = function (event) {
      console.log(event.code);
      if (event.code === "Escape") {
        this.closeLightbox();
      }
      if (event.code === "ArrowRight") {
        this.moveRightLightbox();
      }
      if (event.code === "ArrowLeft") {
        this.moveLeftLightbox();
      }
    }.bind(this);
  }
  addImages() {
    const imagesString = this.imagesArray.reduce(
      (acc, { preview, original, description }) => {
        let oneImageString = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
        return (acc += oneImageString);
      },
      ""
    );
    this.galleryRef.insertAdjacentHTML("beforeend", imagesString);
  }
  openGallery(event) {
    if (this.galleryRef.children.length === 0) {
      this.addImages();
      event.target.textContent = "Close Gallery";
      this.galleryRef.addEventListener("click", this.openLightbox.bind(this));
    } else {
      this.galleryRef.classList.toggle("is-hidden");
      if (event.target.textContent === "Close Gallery") {
        event.target.textContent = "Open Gallery";
      } else {
        event.target.textContent = "Close Gallery";
      }
    }
  }
  addDocListener() {
    this.galleryRef.addEventListener("keydown", this.operateLightbox);
  }
  removeDocListener() {
    this.galleryRef.removeEventListener("keydown", this.operateLightbox);
  }
  openLightbox(event) {
    event.preventDefault();
    if (event.target.tagName !== "IMG") return;
    this.addDocListener();
    this.modalRef.classList.add("is-open");
    document.body.style.overflow = "hidden";
    this.modalImageRef.src = event.target.dataset.source;
    this.modalImageRef.alt = event.target.alt;
    this.currentIndex = Array.from(
      document.querySelectorAll(".gallery__image")
    ).indexOf(event.target);
    this.closeButtonRef.addEventListener(
      "click",
      this.closeLightbox.bind(this),
      { once: true }
    );
  }
  moveImages() {
    this.modalImageRef.classList.add("scale");
    this.modalImageRef.src = this.imagesArray[this.currentIndex].original;
    this.modalImageRef.alt = this.imagesArray[this.currentIndex].description;
    setTimeout(() => this.modalImageRef.classList.remove("scale"), 200);
  }
  moveRightLightbox() {
    if (this.currentIndex === this.imagesArray.length - 1) {
      this.currentIndex = -1;
    }
    this.currentIndex += 1;
    this.moveImages();
  }
  moveLeftLightbox() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.imagesArray.length;
    }
    this.currentIndex -= 1;
    this.moveImages();
  }
  closeLightbox() {
    this.modalRef.classList.remove("is-open");
    setTimeout(() => (this.modalImageRef.src = ""), 200);
    document.body.style.overflow = "auto";
    this.removeDocListener();
  }
}
