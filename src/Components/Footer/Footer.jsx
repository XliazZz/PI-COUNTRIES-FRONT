import style from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {

    const { pathname } = useLocation();

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return(
        <footer className={style.footer}>

            <div className={style['footer-content']}>

                <div className={style['footer-section']}>
                <h3 className={style.h3Footer}>About us</h3>

                {pathname === '/' ?                 
                    <ul>
                        <li><NavLink  onClick={handleClick} to="/terms">Terms and conditions</NavLink></li>
                        <li><NavLink onClick={handleClick} to="/register">Globe Gazers</NavLink></li>
                        <li><NavLink  onClick={handleClick} to="/register">About me</NavLink></li>
                    </ul>
                    : 
                    <ul>
                        <li><NavLink  onClick={handleClick} to="/terms">Terms and conditions</NavLink></li>
                        <li><NavLink onClick={handleClick}  to="/about">Globe Gazers</NavLink></li>
                        <li><NavLink onClick={handleClick}  to="/about">About me</NavLink></li>
                    </ul>
                }
                </div>

                <div className={style['footer-section']}>
                    <h3>Contact us</h3>
                    <ul>
                        <li>martinezelias166@gmail.com</li>
                        <li>+54-11-4888-4304</li>
                        <li><NavLink onClick={handleClick}  to={'/message'}>Message</NavLink></li>
                        <li><NavLink to='/faq' onClick={handleClick}>FAQ</NavLink></li>
                    </ul>
                </div>
                
                <div className={style['footer-section']}>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/xliazzzx" target="_blank" rel="noreferrer">Instagram <FaInstagram className={style.icono} /></a></li>
                        <li><a href="https://www.linkedin.com/in/elias-martinez-040980246/" target="_blank" rel="noreferrer" >Linkedin <FaLinkedin className={style.icono} /></a></li>
                        <li><a href="https://www.github.com/XliazZz" target="_blank" rel="noreferrer">GitHub  <FaGithub className={style.icono} /></a></li>
                    </ul>
                </div>

            </div>

        </footer>
    );
};

export default Footer;