import './MoviesCard.css'
import {useState} from 'react';
import {useLocation} from 'react-router-dom';

function MoviesCard({card, savedMovie, onMovieSave, onMovieDelete }) {

  const [isSaved, setIsSaved] = useState(card.isSaved);
  const [showBtn, setShowBtn] = useState(false);
  const location = useLocation();

  const imgLink = (function () {
    if (card.thumbnail) {
      return card.thumbnail
    }
    return `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`
})()

  const onMouseEnterHandler = () => {
    setShowBtn(true);
  };

  const onMouseLeaveHandler = () => {
    setShowBtn(false);
  };

  function handleChangeMovieState() {
    if (isSaved) {
      setIsSaved(false);
      onMovieDelete(card);
      return
    }
    setIsSaved(true);
    onMovieSave(card);;
  }

  function openTrailer() {
    window.open(card.trailerLink, '_blank');
  }

    return (
      <div className= 'movies-card' onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
        <img src={imgLink} alt={card.image.name} className="movies-card__img" onClick={openTrailer}/>
        <div className='movies-card__info'>
          <h2 className='movies-card__title' onClick={openTrailer}>{card.nameRU}</h2>
          <button className={((location.pathname==='/saved-movies' && showBtn && `movies-card__save movies-card__save_type_delete`) || (location.pathname==='/saved-movies' && `movies-card__save movies-card__save_hidden`)) || (isSaved && `movies-card__save movies-card__save_active`) || `movies-card__save`} onClick={handleChangeMovieState}></button>
          <p className='movies-card__duration'>{`${Math.floor(card.duration / 60)}ч ${card.duration % 60}м`}</p>
        </div>
      </div>
    );
  }
  
  export default MoviesCard;