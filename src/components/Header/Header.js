import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ location }) {
    return (
      <header className={  location.pathname === '/' ? 'header header_main' : 'header' }>
        <img src={ logo } alt='Логотип' className='header__logo'/>
        <Navigation location = { location }/>
      </header>
    );
  }
  
  export default Header;