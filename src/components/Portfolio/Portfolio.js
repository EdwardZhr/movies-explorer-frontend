import './Portfolio.css'

function Portfolio() {
    return (
      <section className='portfolio'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__ul'>
            <li className='portfolio__li'>
                <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/EdwardZhr/how-to-learn'>
                    Статичный сайт
                    <div className='portfolio__arrow'>↗</div>
                </a>
            </li>
            <li className='portfolio__li'>
                <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/EdwardZhr/russian-travel'>
                    Адаптивный сайт
                    <div className='portfolio__arrow'>↗</div>
                </a>
            </li>
            <li className='portfolio__li'>
                <a className='portfolio__link' target="_blank" rel="noreferrer" href='https://github.com/EdwardZhr/react-mesto-api-full-gha'>
                    Одностраничное приложение
                    <div className='portfolio__arrow'>↗</div>
                </a>
            </li>
        </ul>
      </section>
    );
  }
  
  export default Portfolio