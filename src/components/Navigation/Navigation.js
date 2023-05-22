import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

function Navigation({onOpenSidePanel, isSidePanelOpen, loggedIn, width}) {

    const unloggedNavLinks = 
        <ul className='navigation__ul'>
            <li className='navigation__li'> 
                <Link to='/signup' className='navigation__link navigation__link_signup'>Регистрация</Link>
            </li>
            <li className='navigation__li'>
                <Link to='/signin' className='navigation__link navigation__link_signin'>Войти</Link>
            </li>
        </ul>;

    const loggedNavLinks = 
        <ul className='navigation__ul navigation__ul_logged-in'>
            { width <= 768 && <li className='navigation__li navigation__li_logged-in'> 
                <NavLink to='/' className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Главная</NavLink> 
            </li> }
            <li className='navigation__li navigation__li_logged-in'> 
                <NavLink to='/movies' className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Фильмы</NavLink> 
            </li>
            <li className='navigation__li navigation__li_logged-in'> 
                <NavLink to='/saved-movies' className={({isActive}) => `navigation__link ${isActive ? "navigation__link_active" : ""}`}>Сохранённые фильмы</NavLink>  
            </li>
            <li className='navigation__li navigation__li_logged-in'> 
                <div className='navigation__profile-wrapper'> 
                    <NavLink to='/profile' className="navigation__link navigation__link_profile">Аккаунт</NavLink>
                    <NavLink to='/profile' className="navigation__link navigation__link_img"/>
                </div> 
            </li>
        </ul>;


    const navBtn =
        <div className='navigation__btn' onClick={onOpenSidePanel}/> 
    
    return(
        <nav className='navigation'>
            {
                (isSidePanelOpen && loggedNavLinks) || (!loggedIn && unloggedNavLinks) || ((width > 768 && loggedNavLinks) || (width <= 768 && navBtn) || loggedNavLinks)
            }
        </nav>
    )
}  

export default Navigation;