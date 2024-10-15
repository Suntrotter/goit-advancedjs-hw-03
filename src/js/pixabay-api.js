const API_KEY = '46490288-24919c30ba7303f136305d546';
const BASE_URL = 'https://pixabay.com/api/';

function getImages(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const searchUrl = `${BASE_URL}?${searchParams}`;
  console.log('Fetching:', searchUrl); 

  return fetch(searchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

export { getImages };
