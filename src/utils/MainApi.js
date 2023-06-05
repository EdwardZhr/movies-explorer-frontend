export const BASE_URL = 'https://api.edwardmovies.nomoredomains.monster';

const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
};

const request = (url, options) => {
  return fetch(url, options)
}

export const register = (email, name, password) => {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, name, password})
  })
  .then((res) => {
    return res.json()
  })
};

export const authorize = (email, password) => {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    return res.json()
  })
};

export const signout = () => {
  return request(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    return res.ok
  })
};

export const getUserInfo = () => {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(getResponseData)
};

export const updateUserInfo = ({name, email}) => {
  return request(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
          name,
          email
        })
  })
  .then(getResponseData);
}

export const getMovies = () => {
  return request(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(getResponseData)
}

export const saveMovie = ({country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN}) => {
  return request(`${BASE_URL}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        country, 
        director, 
        duration, 
        year, 
        description, 
        image: `https://api.nomoreparties.co/${image.formats.url}`, 
        trailerLink, 
        thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`, 
        movieId: id, 
        nameRU, 
        nameEN
      })
  })
  .then(getResponseData);
}


export const deleteMovie = ({_id}) => {
  return request(`${BASE_URL}/movies/${_id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
        }
  })
  .then(getResponseData);
}
