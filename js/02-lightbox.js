import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const photos = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

gallery.innerHTML = photos;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
