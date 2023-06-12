import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies({width, cards, onDisplayMoreCards, isMoreBtnDisplayed, onSearch, moviesStatus, onMovieSave, onMovieDelete, query}) {
    return (
      <main className= 'movies'>
        <SearchForm onSearch={onSearch} query={query}/>
        <MoviesCardList width={width} onMovieSave={onMovieSave} onMovieDelete={onMovieDelete} cards={cards} moviesStatus={moviesStatus} onDisplayMoreCards={onDisplayMoreCards} isMoreBtnDisplayed={isMoreBtnDisplayed}/>
      </main>
    );
  }
  
  export default Movies;