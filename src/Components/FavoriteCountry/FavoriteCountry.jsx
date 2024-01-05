import CountryLoading from "../CountryLoading/CountryLoading";
import Country from "../Country/Country";
import style from './FavoriteCountry.module.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import GoBackButton from '../GoBackButton/GoBackButton';
import { URL } from '../../Redux/Actions/actions';

const FavoriteCountry = () => {
    const loading = useSelector(state => state.loading)
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const allCountriesFav = async () => {
            try {
                const respose = await axios.get(`${URL}/fav`);
                const data = respose.data;
                setFavs(data)
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        }
        allCountriesFav();
    }, [favs])

    return(
        <div  className={style.elCapo}>

            <div className={style.buttonBack}>
                <GoBackButton/>
            </div>
            
            <div className={style.contenedorCountries}>
            {
                favs?.map(country => {
                    if (loading) {
                        return <CountryLoading key={country.id} />
                    } else{
                        return (
                            <Country
                                key={country.id}
                                id={country.id}
                                name={country.name}
                                flags={country.flags}
                                continents={country.continents}
                                area={country.area}
                                subregion={country.sub}
                                capital={country.capital}
                                population={country.population}
                            />
                        )
                    }
                })
            }
            </div>

        </div>
    );
};

export default FavoriteCountry;