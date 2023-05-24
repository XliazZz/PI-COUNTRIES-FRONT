import { useState, useEffect  } from 'react';
import { useDispatch } from "react-redux";
import { deleteFavoriteCountry, postFavoriteCountry } from '../../Redux/Actions/actions';
import Modal from '../Modal/Modal';
import DetailCountry from '../DetailCountry/DetailCountry'
import style from './Country.module.css';
import axios from 'axios';

const Country = ({ id, name, flags, continents, capital, subregion, area, population }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const onClose = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body.classList.add(style.noScroll);
        } else {
            body.classList.remove(style.noScroll);
        }
    }, [isOpen]);

    const dispatch = useDispatch();
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            dispatch(deleteFavoriteCountry(id));
        } else {
            setIsFav(true);
            dispatch(postFavoriteCountry({ id, name, flags, continents, capital, subregion, area, population }));
        };
    };

    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const allCountriesFav = async () => {
            try {
                const respose = await axios.get('https://pi-countries-back-production-ea0f.up.railway.app/fav');
                const data = respose.data;
                setFavs(data)
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        }
        allCountriesFav();
    }, [])

    useEffect(() => {
        favs?.forEach((fav) => {
            if (fav && fav.id === id) {
                setIsFav(true);
            }
            });
    }, [favs]);

    return(
        <div className={style.container}>

            <div className={style.buttonContainer}>
                <button
                    className={style.buttonHeart}
                    onClick={handleFavorite}
                >
                    {isFav ? "❤️ " : "🤍"}
                </button>
            </div>
            
            <div className={style.card} onClick={toggleModal}>
                <img className={style.imagen} src={flags} alt={name} />
                <div className={style.intro}>
                    <h1>{name}</h1>
                    <p>{capital}</p>
                    <p>{continents}</p>
                </div>
            </div>

            {isOpen && (
                <Modal isOpen={isOpen}>
                    <button className={style.closeButton} onClick={onClose}>X</button>
                    <DetailCountry id={id} />
                </Modal>
            )}
        </div>
    );
};

export default Country;