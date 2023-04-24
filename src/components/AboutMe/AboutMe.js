import photo from '../../images/photo.jpg';
import './AboutMe.css'
import Title from '../Title/Title';

function AboutMe() {
    return (
      <section className='about-me'>
        <Title title='Студент'/>
            <div className='about-me__wrapper'>
                <div className='about-me__info-wrapper'>
                    <h3 className='about-me__title'>Эдвард</h3>
                    <p className='about-me__subtitle'>Фронтенд-разработчик, 25 лет</p>
                    <p className='about-me__info'>Увлекаюсь фронтендом. C 2020 года работаю бизнес-аналитиком над HR-tech проектами в Озоне. Временно нахожусь не в РФ.</p>
                    <a className='about-me__link' href='https://github.com/EdwardZhr'>Github</a>
                </div>
                <img src={photo} alt="Фото студента" className="about-me__photo"/>
            </div>
      </section>
    );
  }
  
  export default AboutMe