import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies({width, cards, onDisplayMoreCards, isLoading, isMoreBtnDisplayed, onMovieDelete, moviesStatus, onSearch, query}) {
    return (
      <main className= 'saved-movies'>
        <SearchForm onSearch={onSearch} query={query}/>
        <MoviesCardList width={width} cards={cards} onMovieDelete={onMovieDelete} moviesStatus={moviesStatus} onDisplayMoreCards={onDisplayMoreCards} isMoreBtnDisplayed={isMoreBtnDisplayed}/>
        <Preloader isLoading={isLoading}/>  
      </main>
    );
  }
  
  export default SavedMovies;