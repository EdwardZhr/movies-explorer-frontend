import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({location, onOpenSidePanel, loggedIn, width}) {
    return (
      <header className={  location.pathname === '/' ? 'header header_main' : 'header' }>
        <Link to='/'>
          <img src={logo} alt='Логотип' className='header__logo'/>
        </Link>
        <Navigation onOpenSidePanel= {onOpenSidePanel} loggedIn={loggedIn} width={width}/>
      </header>
    );
  }
  
  export default Header;