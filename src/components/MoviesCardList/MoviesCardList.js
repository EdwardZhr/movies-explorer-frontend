import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({cards, onDisplayMoreCards, isMoreBtnDisplayed, moviesStatus, onMovieSave, onMovieDelete}) {

    return (
      <main className= 'card-list'>
        {cards.length > 0 ? 
          <div className='card-list__wrapper'>
            {cards.map((card)=>{
              return (<MoviesCard card={card} key={card.id || card.movieId} onMovieSave={onMovieSave} onMovieDelete={onMovieDelete}/>)
            })}
          </div> :
          <p className='card-list__notice'>{moviesStatus}</p>
        }
        <button className={(cards.length > 0 && isMoreBtnDisplayed && 'card-list__btn') || 'card-list__btn card-list__btn_hidden'} onClick={onDisplayMoreCards}>Ещё</button>
      </main>
    );
  }
  
  export default MoviesCardList;