import './AboutProject.css'
import Title from '../Title/Title';

function AboutProject() {
    return (
      <section className="about-project">
        <Title title='О проекте'/>
        <div className='about-project__info'>
          <div className='about-project__info-wrapper'>
            <h3 className='about-project__info-title'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__info-p'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='about-project__info-wrapper'>
            <h3 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__info-p'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about-project__bar'>
          <p className='about-project__bar-el about-project__bar-el_colour_black'>1 неделя</p>
          <p className='about-project__bar-el'>4 недели</p>
          <p className='about-project__bar-text'>Back-end</p>
          <p className='about-project__bar-text'>Front-end</p>
        </div>
      </section>
    );
  }
  
  export default AboutProject