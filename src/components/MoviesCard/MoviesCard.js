import './MoviesCard.css'
import {useState} from 'react';

function MoviesCard({card, savedMovie}) {

  const [isSaved, setIsSaved] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const onMouseEnterHandler = () => {
    setShowBtn(true);
  };

  const onMouseLeaveHandler = () => {
    setShowBtn(false);
  };

  function save() {
    setIsSaved(!isSaved);
  }

  function openTrailer() {
    window.open(card.trailerLink, '_blank');
  }

    return (
      <div className= 'movies-card' onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
        <img src={`https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`} alt={card.image.name} className="movies-card__img" onClick={openTrailer}/>
        <div className='movies-card__info'>
          <h2 className='movies-card__title' onClick={openTrailer}>{card.nameRU}</h2>
          <button className={((savedMovie && showBtn && `movies-card__save movies-card__save_delete`) || (savedMovie && `movies-card__save movies-card__save_hidden`)) || (isSaved && `movies-card__save movies-card__save_active`) || `movies-card__save`} onClick={save}></button>
          <p className='movies-card__duration'>{`${Math.round(card.duration / 60)}ч ${card.duration % 60}м`}</p>
        </div>
      </div>
    );
  }
  
  export default MoviesCard;