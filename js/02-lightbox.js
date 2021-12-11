import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
}

refs.gallery.addEventListener('click', onImageClick)

function onImageClick(event) {
  event.preventDefault();
  const isClickOnGalleryImage = event.target.classList.contains('gallery__image');
  if (!isClickOnGalleryImage) {
    return;
  }
}

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(item => {
  return  `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}"  />
</a>`
}).join('');
}

refs.gallery.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250 });
