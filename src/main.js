import { getImages } from './js/pixabay-api';
import { createCardsMarkup, initSimpleLightbox, refreshGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader'); 


initSimpleLightbox();

const searchForm = document.querySelector('.form');
searchForm.addEventListener('submit', handleSearch);

function handleSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const userQuery = form.elements.search.value.trim();

  
  if (userQuery === '') {
    iziToast.error({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return; 
  }

  gallery.innerHTML = '';
  loader.style.display = 'block'; // Show the loader

  getImages(userQuery)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return; 
      }

      gallery.innerHTML = createCardsMarkup(data.hits);
      refreshGallery(); 
    })
    .catch(error => {
      console.error('Fetch error:', error);
      iziToast.error({
        message: 'An error occurred. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.style.display = 'none'; 
      form.reset(); 
    });
}
