import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const photos = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
  )
  .join("");

gallery.innerHTML = photos;

let modal;

const zoomPhoto = (event) => {
  event.preventDefault();

  const selectedPhoto = event.target.dataset.source;

  modal = basicLightbox.create(`
   <img class="gallery__image" src="${selectedPhoto}"/>`);

  modal.show();

  gallery.addEventListener("keydown", closePhoto);
};

const closePhoto = (event) => {
  if (event.code === "Escape") {
    modal.close();
    gallery.removeEventListener("keydown", closePhoto);
  }
};

gallery.addEventListener("click", zoomPhoto);
