import img from '../../images/promo-img.svg'
import './Promo.css'

function Promo() {
    return (
      <section className='promo'>
        <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <img src={img} alt="Презентационный логотип" className='promo__img'/>
        </div>
      </section>
    );
  }
  
  export default Promo