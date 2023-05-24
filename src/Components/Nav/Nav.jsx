import Button from '../Button/Button';
import Button2 from '../Button2/Button2';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import logo from '../../assert/logo.png'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HiLogout } from "react-icons/hi"
import { AiOutlineHome } from "react-icons/ai"
import { IoCreateOutline } from "react-icons/io5"
import { FiUsers } from "react-icons/fi"

const Nav = ({ logOut }) => {
    const { pathname } = useLocation();
    const location = useLocation();

    return(
        <nav className={style.navBar}>

            { pathname === '/' && <img src={logo} alt={logo} />}

            <NavLink to={'/home'}>
                {pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register' && (
                <button className={style.buttonsNav}>
                    <AiOutlineHome className={style.iconoNav} title="Home" />
                </button>
                )}
            </NavLink>

            <NavLink to={'/about'}>
                {pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register' && (
                <button className={style.buttonsNav}>
                    <FiUsers className={style.iconoNav} title="About me" />
                </button>
                )}
            </NavLink>
            
            <NavLink to={'/favorites/activity'}>
                { pathname !== '/' && location.pathname !== "/login" && location.pathname !== "/register" && 
                    <button className={style.buttonsNav}>
                        Favorites activities
                    </button>}
            </NavLink>

            { pathname !== '/' && pathname !== '/login' && pathname !== '/register' && <SearchBar />}

            <NavLink to={'/favorites/country'}>
                { pathname !== '/' && location.pathname !== "/login" && location.pathname !== "/register" && 
                    <button className={style.buttonsNav}>Favorites countries</button>}
            </NavLink>


            <NavLink to={'/activity'}>
                { pathname !== '/' && location.pathname !== "/login" && location.pathname !== "/register" && (
                <button  className={style.buttonsNav}>
                    <IoCreateOutline className={style.iconoNav} title="Create Activity"/>
                </button>)}
            </NavLink>
            
            <NavLink to={'/login'}>
                { pathname === '/' && location.pathname !== "/login"  && <Button text='LOG IN'></Button>}
            </NavLink>

            <NavLink to={'/register'}>
                { pathname === '/' && location.pathname !== "/login" && location.pathname !== "/register" && <Button2 text='CREATE YOUR ACTIVITY'></Button2>}
            </NavLink>

            { location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && (
            <NavLink to="/">
                <button className={style.buttonsNav} onClick={logOut}>
                    <HiLogout  className={style.iconoNav} title="Log Out"/>
                </button>
            </NavLink>
            )}

        </nav>
    );
};

export default Nav;