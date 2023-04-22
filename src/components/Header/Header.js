import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="Логотип" className="header__logo"/>
        <Navigation/>
      </header>
    );
  }
  
  export default Header;