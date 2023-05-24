import { useState, useEffect } from 'react';
import style from './Landing.module.css';
import Asuncion from '../../assert/Asuncion.jpg';
import BuenosAires from '../../assert/BuenosAires.jpg';
import Roma from '../../assert/Roma.jpg';
import Tokyo from '../../assert/Tokyo.jpg';
import Gaborone from '../../assert/Gaborone.jpg';
import Athens from '../../assert/Athens.jpg';
import Seoul from '../../assert/Seoul.jpg';
import Pretoria from '../../assert/Pretoria.jpg';
import Canberra from '../../assert/Canberra.jpg';
import Wellington from '../../assert/Wellington.jpg';
import { IoMdCreate } from "react-icons/io"
import { MdOutlineFavorite } from "react-icons/md"
import { FaSearchLocation } from "react-icons/fa"
import { RiCompassDiscoverFill } from "react-icons/ri"
import { NavLink } from "react-router-dom"

const images = [
    {
        src: Asuncion,
        country: 'Paraguay',
        capital: 'Asunción'
    },
    {
        src: BuenosAires,
        country: 'Argentina',
        capital: 'Buenos Aires'
    },
    {
        src: Roma,
        country: 'Italia',
        capital: 'Rome'
    },
    {
        src: Athens,
        country: 'Greece',
        capital: 'Athens'
    },
    {
        src: Tokyo,
        country: 'Japan',
        capital: 'Tokyo'
    },
    {
        src: Seoul,
        country: 'South Korea',
        capital: 'Seoul'
    },
    {
        src: Gaborone,
        country: 'Botswana',
        capital: 'Gaborone'
    },
    {
        src: Pretoria,
        country: 'South Africa',
        capital: 'Pretoria'
    },
    {
        src: Canberra,
        country: 'Australia',
        capital: 'Canberra'
    },
    {
        src: Wellington,
        country: 'New Zealand',
        capital: 'Wellington'
    },
];

const Landing = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);  //Estado para cambiar la imagen
    const [imageLoaded, setImageLoaded] = useState(false); //Estado para controlar texto

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImageIndex(currentImageIndex =>
            (currentImageIndex + 1) % images.length
        );
        setImageLoaded(false);
        }, 3500); // Cambia aquí el intervalo de tiempo en milisegundos

        return () => clearInterval(intervalId);
    }, []);

    const currentImage = images[currentImageIndex];

    return (
        <div className={style.contenedorLanding}>

            <img
                className={style.imagesCapital}
                src={currentImage.src}
                alt={`${currentImage.country} - ${currentImage.capital}`}
                onLoad={() => setImageLoaded(true)}
            />
            {imageLoaded ? (
                <>
                    <h2 className={style.countryLanding}>{currentImage.country}</h2>
                    <h3 className={style.capitalLanding}>{currentImage.capital}</h3>
                </>
            ) : null}

            <div className={style.divTitleSubLanding}>
                <h3 className={style.h3TitleLanding}>Join Our Community of Globe Gazers</h3>
                <span className={style.subtitleLanding}>Welcome to our website, where you can explore all the countries of the world! Sign up or log in to access all the features, like searching for countries and getting their information, creating custom travel itineraries, and adding your favorite countries to your list. Start your journey today and discover everything our website has to offer!</span>

                <div className={style.divButtons}>
                    <NavLink to={'/register'}>
                        <button  className={style.registerLanding}>REGISTER</button>
                    </NavLink>

                    <NavLink to={'/login'}>
                        <button className={style.signLanding}>SIGN IN</button>
                    </NavLink>
                </div>
            </div>


            <div className={style.contenedorUl}>

                <h2 className={style.h2UlLanding}>Discover what sets Globe Gazers apart</h2>

                <ul className={style.ulLanding}>
                    <li className={style.liLanding}> 
                        <IoMdCreate className={style.iconLanding} /> 
                        <h3> Create all your activities </h3>
                        <span className={style.spanLanding}>This option allows you to customize your trips and create activities that fit your tastes and preferences.
                        </span>
                    </li>

                    <li  className={style.liLanding}> 
                        <MdOutlineFavorite className={style.iconLanding}/> 
                        <h3> Choose your favorite countries </h3>
                        <span className={style.spanLanding}>
                            This option allows you to save your preferred destinations so you can access them quickly and easily in the future. 
                        </span>
                    </li>

                    <li  className={style.liLanding}> 
                        <FaSearchLocation className={style.iconLanding}/> 
                        <h3>Search all the countries in the world</h3>
                        <span className={style.spanLanding}>This option allows you to explore new cultures and discover unknown places. You can find information about different countries. 
                        </span>
                    </li>

                    <li  className={style.liLanding}> 
                        <RiCompassDiscoverFill className={style.iconLanding}/> 
                        <h3>Discover new countries</h3>
                        <span className={style.spanLanding}>This option invites you to venture into the unknown and discover new places.</span>
                    </li>
                </ul>

            </div>
            
        </div>
    );
};

export default Landing;
