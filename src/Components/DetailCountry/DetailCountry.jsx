import { useState, useEffect } from "react";
import axios from 'axios';
import style from './DetailCountry.module.css'
import { URL } from "../../Redux/Actions/actions";

const DetailCountry = ({id}) => {
    const [country, setCountry] = useState({});
    
    useEffect(() => {
        const inEffect = async () => {
            try {
                const { data } = await axios(`${URL}/countries/byId/${id}`) ;

                if(data.name) {
                    setCountry(data);
                } else {
                    throw new Error('Country not found')
                }
            } catch (error) {
                console.log("Country update in useeffect in component Detail", error);
            }
        }
        inEffect();
        return setCountry({});
    }, [id]);

    const renderActivities = (activities) => {
        return activities && activities.length > 0 ? (
            <div>
                It is also known for its activities such as <span className={style.activities}>{activities.map(activity => activity.name).join(', ')}</span>
            </div>
            ) : (
            ''
        );
    };

    return(
        <div className={style.DivDetail}>

            <div className={style.card}>
                <h2 className={style.flagDetail}>{country.flags}</h2>
                <div className={style.detail}>
                    <span> <strong>{country.name} ({country.id})</strong> is a country located in <strong>{country.subregion}</strong>, part of the larger <strong>{country.continents}</strong> region. Its capital, <strong>{country.capital}</strong> , is the largest city in the country. With an area of <strong>{country.area} km²</strong>, it is {country.area > 5000000 ? 'one of the largest' : country.area > 1000000 ? 'a large' : country.area > 500000 ? 'a medium-sized' : country.area > 100000 ? 'a small' : 'one of the smallest'} countries in {country.continents}. The country has a population of <strong>{country.population}</strong>, with a diverse population that includes people from different ethnicities and cultures.
                    {country.population > 1000000000 ? " It is one of the most populous countries in the world." :
                    country.population > 500000000 ? " It is a heavily populated country." :
                    country.population > 100000000 ? " It is a densely populated country." :
                    country.population > 50000000 ? " It is a moderately populated country." :
                    " It is one of the less populated countries in the world."}{renderActivities(country.activities)}</span>
                </div>
            </div>
            
        </div>
    );
};

export default DetailCountry;