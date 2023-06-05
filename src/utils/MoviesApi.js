export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
} 

const request = (url, options) => {
  return fetch(url, options).then(getResponseData)
}

export const getMovies = () => {
  return request(BASE_URL, {
      headers: {
          'Content-Type': 'application/json'
        }
  });
}