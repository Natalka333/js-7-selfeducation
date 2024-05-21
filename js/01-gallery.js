import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryImage = document.querySelector('.gallery');

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </li>`;
    }).join('');

}

galleryImage.innerHTML = createGalleryItems(galleryItems);

galleryImage.addEventListener('click', handleClickImage);

function handleClickImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const imageUrl = event.target.dataset.source;
    // console.log(selectedImage);
    const instance = basicLightbox.create(
        `<img src="${imageUrl}" width="800" height="600">`,
        {
            // onShow: instance => {
            //     window.addEventListener('keydown', onEscape);
            // },

            // onClose: instance => {
            //     window.removeEventListener('keydown', onEscape);
            // },

            handler: null,
            onShow(instance) {
                this.handler = onEscape.bind(instance)
                document.addEventListener('keydown', this.handler);
            },

            onClose(instance) {
                document.removeEventListener('keydown', this.handler)
            }
        }
    );
    instance.show()

    function onEscape(event) {
        if (event.code === 'Escape') {
            this.close();
        }
    };
}



