import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`)

const refs = {
  gallery: document.querySelector('.gallery'),
  image: instance.element().querySelector('img'),
}

refs.gallery.addEventListener('click', onImageClick)

function onImageClick(event) {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains('gallery__image');
  if (!isGalleryImage) {
    return;
  }
  console.log('target', event.target);
  console.log('target-current', event.currentTarget);
  refs.image.src = event.target.dataset.source;
  instance.show();

  document.addEventListener('keydown', onPressKeyEsc);
 

}

function onPressKeyEsc(event) {
  console.log('event.key', event.key)
  if (event.key === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onPressKeyEsc);
  }
}

const galleryMarkup = createGalleryMarkup(galleryItems);
console.log(galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(item => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
}).join('');
}

refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);