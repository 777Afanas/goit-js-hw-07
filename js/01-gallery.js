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

    if (evt.target.nodeName !== 'IMG') {
        return;
    };

    const instance = basicLightbox.create
        (`<img src="${evt.target.dataset.source}" width="800" height="600">`,
            {
                onShow: () => {
                    window.addEventListener('keydown', onEscKeyPress);
                },
                onClose: () => {
                    window.removeEventListener('keydown', onEscKeyPress);
                },
            });      
         
    instance.show();
    console.log(evt.target.dataset.source);
} 

function onEscKeyPress(evt) {
        if (evt.code === 'Escape') {
            return;
       }
       instance.close();
    }
          

