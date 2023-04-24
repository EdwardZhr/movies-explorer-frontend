import img from '../../images/promo-img.svg'
import './Promo.css'

function Promo() {
    return (
      <section className="promo">
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <img src={img} alt="Презентационный логотип" className="promo__img"/>
      </section>
    );
  }
  
  export default Promo