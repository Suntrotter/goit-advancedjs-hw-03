import { getImages } from './js/pixabay-api';
import createCardsMarkup from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let gallery = document.querySelector('.gallery');

const searchForm = document.querySelector('.form');
searchForm.addEventListener('submit', handleSearch);
function handleSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const userQuery = form.elements.search.value.trim();
  getImages(userQuery)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      gallery.innerHTML = createCardsMarkup(data.hits);
    })
    .catch(console.error)
    .finally(form.reset());
}