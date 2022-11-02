import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
     <div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}" 
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');
}

function onGalleryContainerClick(evt) {         
    evt.preventDefault();

    const isGalleryItem = evt.target.classList.contains('gallery__image');

    if (!isGalleryItem) {
        return;
    }

    const instance = basicLightbox.create
        (`img
            src = ${evt.target.dataset.source}
            alt="${evt.target.alt}"/>`)

    // console.log(evt.target);
    instance.show()
}

// console.log(galleryItems);
