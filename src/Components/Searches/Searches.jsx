import { useSelector, useDispatch } from "react-redux";
import { searchCountries } from "../../Redux/Actions/actions";
import { useEffect } from "react";
import Country from "../Country/Country";
import CountryLoading from "../CountryLoading/CountryLoading";
import style from './Searches.module.css'
import GoBackButton from '../GoBackButton/GoBackButton';

const Searches = ({ match }) => {
    const dispatch = useDispatch(); 

    const searchResults = useSelector(state => state.searchResults);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(searchCountries(match))
    }, [dispatch, match])

    return (
        <div className={style.divPadre}>

            <div className={style.buttonBack}>
                <GoBackButton/>
            </div>
            
            <div className={style.contenedorCountries}>
            {
                searchResults[searchResults.length - 1]?.map((country, index) => {
                    if(loading) {
                        return <CountryLoading key={index}/>
                    } else {
                        return (
                            <Country 
                            key={index}
                            id={country.id}
                            name={country.name}
                            flags={country.flags}
                            continents={country.continents}
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

export default Searches;