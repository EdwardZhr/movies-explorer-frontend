import {useEffect, useState} from 'react';
import { Route, Routes, useLocation, useNavigate, Navigate} from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserCintext';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import SidePanel from '../SidePanel/SidePanel';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import useResize from '../../hooks/useResize';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginChecked, setIsLoginChecked] = useState(false);
  const [errStatus, setErrStatus] = useState('');
  const [moviesStatus, setMoviesStatus] = useState('Начните поиск');
  const [savedMoviesStatus, setSavedMoviesStatus] = useState('Нет сохраненных фильмов');
  const [currentUser,  setCurrentUser] = useState({_id: '', email:'', name:''});
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [amountCards, setAmountCards] = useState(0);
  const [moviesCards, setMoviesCards] = useState([]);
  const [savedMovieCards, setSavedMovieCards] = useState([]);
  const [displayedSavedCards, setDisplayedSavedCards] = useState([]);
  const [displayedСards, setDisplayedСards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMoreBtnDisplayed, setIsMoreBtnDisplayed] = useState(false);
  const [moviesQuery, setMoviesQuery] = useState((function () {
    if (JSON.parse(localStorage.getItem('query'))) {
      return JSON.parse(localStorage.getItem('query')).query
      }
    return {search: '', checkbox: false}
})())

  const location = useLocation()
  const width  = useResize();
  const navigate = useNavigate();

  function handleLogin (email, password) {
    setIsLoading(true)
    mainApi.authorize(email, password)
    .then((res) => {
        if (res.message !== 'Вы успешно авторизовались') {
          return Promise.reject(res.message)
        }
        setLoggedIn(true);
        navigate('/movies', {replace: true});
  })
    .catch(err => {
        console.log(err)
        setErrStatus(err)
    })
    .finally(()=>{
      setIsLoading(false)
    });
  }

  function handleRegister (email, name, password) {
    setIsLoading(true)
    mainApi.register(email, name, password)
    .then((res) => {
        if (!res.data) {
          return Promise.reject(res.message)
        }
        handleLogin(email, password)
        })
    .catch(err => {
        setErrStatus(err)
        setIsLoading(false)
    })
  }

  function handleTokenCheck () {
      mainApi.getUserInfo()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
    })
      .catch((err)=> { 
        console.log(err);
    })
      .finally(()=>{
        setIsLoginChecked(true)
      })
  }

  useEffect(() => {
    handleTokenCheck();
  }, [])

  async function handleUpdateUserInfo(info) {
    const promise = mainApi.updateUserInfo(info)
    .then((newInfo)=>{
      if (newInfo.email) {
        setCurrentUser(newInfo);
        return newInfo
      }
    })
    .catch((err)=>{ 
        console.log(err);
    })
    const result = await promise
    return result
}

  function signOut(){
      mainApi.signout()
      .then(res=> {
        if(res) {
          setLoggedIn(false);
          navigate('/', {replace: true});
          localStorage.removeItem('query');
          setMoviesQuery({search: '', checkbox: false})
          setMoviesStatus('Начните поиск')
          setMoviesCards([])
        }
      })
      .catch((err)=> { 
        console.log(err);
    })
  }  
  
  function handleSearchMovies (query) {
    setIsLoading(true)
    moviesApi.getMovies()
    .then((movies)=>{
      const result = movies.filter((movie) => {
        if (query.checkbox) {
          return  movie.duration <= 40 && movie.nameRU.toLowerCase().includes(query.search.toLowerCase()) 
        }
        return movie.nameRU.toLowerCase().includes(query.search.toLowerCase())
      }).map((movie) => {
        let isSaved = false
        savedMovieCards.forEach((item) => {
          if (item.movieId === movie.id) {
            isSaved = true
            movie._id = item._id
          }
        })
        movie.isSaved = isSaved
        return movie
      })

      const status = (function () {
        if (JSON.stringify(result) === '[]') {
          return 'Фильмы не найдены'
        }
      })()

      setMoviesCards(result)

      setMoviesStatus(status)

      localStorage.setItem('query', JSON.stringify({query, movies: result, moviesStatus: status}));
      setMoviesQuery(query)
    })
    .catch((err)=>{ 
      setMoviesStatus('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    })
    .finally(()=>{
      setIsLoading(false)
    });
  }

  function handleSearchSavedMovies (query) {
    const result = savedMovieCards.filter((movie) => {
      if (query.checkbox) {
        return  movie.duration <= 40 && movie.nameRU.includes.toLowerCase()(query.search.toLowerCase()) 
      }
      return movie.nameRU.toLowerCase().includes(query.search.toLowerCase())
    })

    const status = (function () {
      if (JSON.stringify(result) === '[]') {
        return 'Фильмы не найдены'
      }
    })()

    setSavedMoviesStatus(status)
    setDisplayedSavedCards(result)
  }

  function handleMovieSave(movie) {
    if (movie.isSaved) {
      return
    }
    mainApi.saveMovie(movie)
    .then((item)=>{
      let query = JSON.parse(localStorage.getItem('query'))
      item.isSaved = true
      movie.isSaved = true
      movie._id = item._id

      setSavedMovieCards([item, ...savedMovieCards])

      query.movies.forEach((i) => {
        if (i.id === movie.id) {
          i.isSaved = true
          i._id = item._id
        }
      })
      localStorage.setItem('query', JSON.stringify(query))
    })
    .catch(err => console.log(err))
  }

  function handleMovieDelete(movie) {

    if (!movie.isSaved) {
      return
    }
    mainApi.deleteMovie(movie)
    .then(()=>{
      let query = JSON.parse(localStorage.getItem('query'))
      movie.isSaved = false

      setSavedMovieCards((state) => {
        return state.filter((c) => {
          return c._id !== movie._id
        })
      })

      setDisplayedSavedCards((state) => {
        return state.filter((c) => {
          return c._id !== movie._id
        })
      })

      if (moviesCards.length !== 0) {
        setMoviesCards((state) => {
        state.forEach((i) => {
          if (i.id === movie.movieId) {
            i.isSaved = false
          }
        })
        query.movies = state
        localStorage.setItem('query', JSON.stringify(query))
        return state
      })
    }
      

    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if (!loggedIn) {
        return
    }

    mainApi.getUserInfo()
    .then((profileData)=>{ 
        setCurrentUser(profileData);
  })
    .catch(err=>{ 
      console.log(err);
  });

    if (localStorage.getItem('query')) {
      const query = JSON.parse(localStorage.getItem('query'));
      setMoviesCards(query.movies)
      setMoviesStatus(query.moviesStatus)
    }

    mainApi.getMovies()
    .then((movies) => {
      setSavedMovieCards(movies.map((movie) => {
        movie.isSaved = true;
        return movie
      }))
    })
    .catch(err=> {
      console.log(err)
    })
  }, [loggedIn])

  useEffect(() => {
    setDisplayedSavedCards(savedMovieCards)
  }, [savedMovieCards, location])

  useEffect(() => {
    setErrStatus('')
  }, [location])

  useEffect(() => {
    if(width>=1280) {
      setAmountCards(12);
    } else if (width>=674) {
      setAmountCards(8);
    } else {
      setAmountCards(5);
    }
  }, [width])

  useEffect(() => {
    setDisplayedСards(moviesCards.slice(0, amountCards))

    if (amountCards < moviesCards.length) {
      return setIsMoreBtnDisplayed(true)
    }
    setIsMoreBtnDisplayed(false)
  }, [amountCards, moviesCards])

  function displayMoreCards (setAmount, amount) {
    if (width>=1280) {
        setAmount(amount + 12);
      } else if (width>=674) {
        setAmount(amount + 8);
      } else {
        setAmount(amount + 5);
      };
  }

  function handleDisplayMoreCardsClick () {
    displayMoreCards(setAmountCards, amountCards)
  }

  function handleHeaderBtnClick() {
    setIsSidePanelOpen(true)
}

  function handleCloseSidePanel() {
    setIsSidePanelOpen(false)
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        {location.pathname !== '/signin' &&  location.pathname !== '/signup' && location.pathname !== '/404' &&  (loggedIn || isLoginChecked) && <Header location={location} onOpenSidePanel={handleHeaderBtnClick} loggedIn={loggedIn} width={width}/>}
        <Routes>
          <Route path='/' element={ <Main /> }  />
          {(loggedIn || isLoginChecked) && <Route path='/movies' element={<ProtectedRoute element={Movies}
            query={moviesQuery}
            onMovieSave={handleMovieSave}
            onMovieDelete={handleMovieDelete}
            moviesStatus={moviesStatus}
            loggedIn={loggedIn}
            width={width} 
            cards={displayedСards} 
            isMoreBtnDisplayed={isMoreBtnDisplayed} 
            onDisplayMoreCards={handleDisplayMoreCardsClick}
            onSearch={handleSearchMovies}/>}/>}
          {(loggedIn || isLoginChecked) && <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies}
            query={{search:'', checkbox:false}}
            loggedIn={loggedIn}
            onMovieDelete={handleMovieDelete}
            width={width} 
            moviesStatus={savedMoviesStatus}
            onSearch={handleSearchSavedMovies}
            cards={displayedSavedCards}/>}/>}
          {(loggedIn || isLoginChecked) && <Route path='/profile' element={<ProtectedRoute element={Profile}
            onUpdateUserInfo={handleUpdateUserInfo}
            loggedIn={loggedIn}
            signOut={signOut}/>}/>}
            <Route path='/' element={ <Main /> }  />

          {(loggedIn || isLoginChecked) && <Route path={location.pathname} element={<ProtectedRoute element={Login}
            handleLogin={handleLogin} errText={errStatus} loggedIn={loggedIn} path='/signin'
            />}/>}
          {(loggedIn || isLoginChecked) && <Route path={location.pathname} element={<ProtectedRoute element={Register}
            handleRegister={handleRegister} errText={errStatus}loggedIn={loggedIn}  path='/signup'
            />}/>}
          <Route path='/404' element={ <NotFound/> } />
          {(loggedIn || isLoginChecked) && <Route path='*' element={<Navigate to='/404'/>} />}
        </Routes>
        {location.pathname !== '/signin' &&  location.pathname !== '/signup' && location.pathname !== '/404' && location.pathname !== '/profile' && (loggedIn || isLoginChecked) && <Footer/>}
        <SidePanel isOpen={isSidePanelOpen} onClose={handleCloseSidePanel} loggedIn={loggedIn} width={width}/>
        <Preloader isLoading={isLoading}/> 
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;