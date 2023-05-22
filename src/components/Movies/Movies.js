import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies({width, cards, onDisplayMoreCards, isLoading, isMoreBtnDisplayed}) {
    return (
      <main className= 'movies'>
        <SearchForm />
        <MoviesCardList width={width} cards={cards} onDisplayMoreCards={onDisplayMoreCards} isMoreBtnDisplayed={isMoreBtnDisplayed}/>
        <Preloader isLoading={isLoading}/> 
      </main>
    );
  }
  
  export default Movies;