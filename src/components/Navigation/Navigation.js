import {Route, Routes, Link, NavLink} from 'react-router-dom';
import profile from '../../images/profile.svg'
import './Navigation.css'

function Navigation() {
    const navLinks = 
    <ul className='navigation__ul'>
        <li className='navigation__li'> 
            <NavLink to='/movies' className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Фильмы</NavLink> 
        </li>
        <li className='navigation__li'> 
            <NavLink to='/saved-movies' className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Сохранённые фильмы</NavLink>  
        </li>
        <li className='navigation__li'> 
            <div className='navigation__profile-wrapper'> 
                <NavLink to='/profile' className="navigation__link navigation__link_active">Аккаунт</NavLink>
                <NavLink to='/profile' className="navigation__link">
                    <img src={profile} alt="Профиль" className="navigation__profile-img"/>
                </NavLink>
            </div> 
        </li>
    </ul>

    return (
        <nav className="navigation">
            <Routes>
                <Route path='/movies' element={ navLinks } />
                <Route path='/saved-movies' element={ navLinks } />
                <Route path='/profile' element={ navLinks } />
                <Route path='/' element={
                    <ul className='navigation__ul'>
                        <li className='navigation__li'> 
                            <Link to='/signup' className='navigation__signup'>Регистрация</Link>
                        </li>
                        <li className='navigation__li'>
                            <Link to='/signin' className='navigation__signin'>Войти</Link>
                        </li>
                    </ul>
                } />
            </Routes>
        </nav>
    );
}
  
  export default Navigation;