import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList({cards, onDisplayMoreCards, isMoreBtnDisplayed, savedMovie}) {

    return (
      <main className= 'card-list'>
        {cards.length>0 ? 
          <div className='card-list__wrapper'>
            {cards.map((card)=>{
              return (<MoviesCard card={card} key={card.id} savedMovie={savedMovie}/>)
            })}
          </div> :
          <p className='card-list__notice'>Фильмы не найдены</p>
        }
        <button className={(cards.length>0 && isMoreBtnDisplayed && 'card-list__btn') || 'card-list__btn card-list__btn_hidden'} onClick={onDisplayMoreCards}>Ещё</button>
      </main>
    );
  }
  
  export default MoviesCardList;