import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from './images.js';
import './css/styles.css';

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    image => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.original}">
          <img
            class="gallery-image"
            src="${image.preview}"
            alt="${image.description}"
          />
        </a>
      </li>
    `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery .gallery-link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
