import {useEffect, useState} from 'react';
import { Route, Routes, useLocation, Navigate} from 'react-router-dom';
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import SidePanel from '../SidePanel/SidePanel';
import Footer from '../Footer/Footer'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import useResize from '../../hooks/useResize';
import moviesCards from '../../utils/data';
import savedMoviesCards from '../../utils/saved'
import NotFound from '../NotFound/NotFound';

function App() {

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [amountCards, setAmountCards] = useState(0);
  const [amountSavedCards, setAmountSavedCards] = useState(0);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMoreBtnDisplayed, setIsMoreBtnDisplayed] = useState(true);
  const [isMoreSavedBtnDisplayed, setIsMoreSavedBtnDisplayed] = useState(true);
  const [userInfo, setUserInfo] = useState({name: 'Эдвард', email: 'edward@mail.ru', password: '12345'})
  const location = useLocation()
  const width  = useResize();

  const savedMovie = true;

  useEffect(() => {
    if(width>=1280) {
      setAmountCards(12);
      setAmountSavedCards(12);
    } else if (width>=674) {
      setAmountCards(8);
      setAmountSavedCards(8);
    } else {
      setAmountCards(5);
      setAmountSavedCards(5);
    }
  }, [width])

  useEffect(() => {
    setCards(moviesCards.slice(0, amountCards))
    if (amountCards > moviesCards.length) {
      setIsMoreBtnDisplayed(false)
    }
  }, [amountCards])

  useEffect(() => {
    setSavedCards(savedMoviesCards.slice(0, amountSavedCards))
    if (amountSavedCards > savedMoviesCards.length) {
      setIsMoreSavedBtnDisplayed(false)
    }
  }, [amountSavedCards])

  function displayMoreCards (setAmount, amount) {
    setIsLoading(true)
    setTimeout(() => {
      if(width>=1280) {
        setAmount(amount + 12);
      } else if (width>=674) {
        setAmount(amount + 8);
      } else {
        setAmount(amount + 5);
      }
      setIsLoading(false)}, 1500);
  }

  function handleDisplayMoreSavedCardsClick () {
    displayMoreCards(setAmountSavedCards, amountSavedCards)
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
    <div className='App'>
      {location.pathname !== '/signin' &&  location.pathname !== '/signup' && location.pathname !== '/404' && <Header location={location} onOpenSidePanel={handleHeaderBtnClick} loggedIn={loggedIn} width={width}/>}
      <Routes>
        <Route path='/' element={ <Main /> }  />
        <Route path='/movies' element={ <Movies width={width} cards={cards} isMoreBtnDisplayed={isMoreBtnDisplayed} onDisplayMoreCards={handleDisplayMoreCardsClick} isLoading={isLoading}/> }  />
        <Route path='/saved-movies' element={ <SavedMovies width={width} savedMovie={savedMovie} cards={savedCards} isMoreBtnDisplayed={isMoreSavedBtnDisplayed} onDisplayMoreCards={handleDisplayMoreSavedCardsClick} isLoading={isLoading}/> }  />
        <Route path='/profile' element={ <Profile userInfo={userInfo} setUserInfo={setUserInfo}/> } />
        <Route path='/signin' element={ <Login/> } />
        <Route path='/signup' element={ <Register/> } />
        <Route path='/404' element={ <NotFound/> } />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
      {location.pathname !== '/signin' &&  location.pathname !== '/signup' && location.pathname !== '/404' && location.pathname !== '/profile' && <Footer/>}
      <SidePanel isOpen={isSidePanelOpen} onClose={handleCloseSidePanel} loggedIn={loggedIn} width={width}/>
    </div>
  );
}

export default App;
