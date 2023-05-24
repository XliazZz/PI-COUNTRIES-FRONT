import Activity from '../Activity/Activity';
import style from './FavoriteActivity.module.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import GoBackButton from '../GoBackButton/GoBackButton';

const FavoriteActivity = () => {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const allCountriesFav = async () => {
            try {
                const respose = await axios.get('https://pi-countries-back-production-ea0f.up.railway.app/favactivity');
                const data = respose.data;
                setFavs(data)
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        }
        allCountriesFav();
    }, [favs])

    return (
        <div className={style.elCapo}>

            <div className={style.buttonBack}>
                <GoBackButton/>
            </div>

            <div className={style.contenedorCountries}>
                {favs?.map(activity => (
                    <Activity 
                    key={activity.id}
                    id={activity.id}
                    name={activity.name}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                    season={activity.season}
                    />
                ))}
            </div>
            
        </div>
    );
};

export default FavoriteActivity;