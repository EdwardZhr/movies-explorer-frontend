import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies({width, cards, onDisplayMoreCards, isLoading, isMoreBtnDisplayed, savedMovie}) {
    return (
      <main className= 'saved-movies'>
        <SearchForm />
        <MoviesCardList width={width} cards={cards} savedMovie={savedMovie} onDisplayMoreCards={onDisplayMoreCards} isMoreBtnDisplayed={isMoreBtnDisplayed}/>
        <Preloader isLoading={isLoading}/>  
      </main>
    );
  }
  
  export default SavedMovies;