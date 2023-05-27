import './Techs.css'
import Title from '../Title/Title';

function Techs() {
    return (
      <section className='techs'>
        <div className='techs__container'>
          <Title title='Технологии'/>
          <div className='techs__wrapper'>
              <h3 className='techs__title'>7 технологий</h3>
              <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
              <ul className='techs__ul'>
                  <li className='techs__li'>HTML</li>
                  <li className='techs__li'>CSS</li>
                  <li className='techs__li'>JS</li>
                  <li className='techs__li'>React</li>
                  <li className='techs__li'>Git</li>
                  <li className='techs__li'>Express.js</li>
                  <li className='techs__li'>mongoDB</li>
              </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Techs