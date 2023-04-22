import './Footer.css'

function Footer() {
    return (
      <footer className='footer'>
        <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className='footer_wrapper'>
            <p className='footer__el'>© 2023</p>
            <div className='footer_nav'>
                <p className='footer__el'>Жребец Эдвард</p>
                <a className='footer__el' href='https://github.com/EdwardZhr'>Github</a>
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer