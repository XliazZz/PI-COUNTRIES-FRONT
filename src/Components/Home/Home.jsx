import Country from '../Country/Country';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries, orderByLetter, orderByPopulation } from '../../Redux/Actions/actions';
import style from './Home.module.css';
import CountryLoading from '../CountryLoading/CountryLoading';
import Activity from '../Activity/Activity';

const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries);
    const loading = useSelector(state => state.loading);
    const { pageNumber } = useParams(); // obtiene el número de página actual de la ruta
    const [currentPage, setCurrentPage] = useState(pageNumber ? pageNumber - 1 : 0);
    
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    
    // número de elementos por página
    const itemsPerPage = 10;
    
    // calcula la sección de elementos para mostrar en la página actual
    const offset = currentPage * itemsPerPage;
    
    // filtra los países por continente si hay un continente seleccionado
    const [selectedContinent, setSelectedContinent] = useState(''); // estado para guardar el continente seleccionado
    let filteredCountries = allCountries;
    if (selectedContinent) {
        filteredCountries = allCountries.filter(country => country.continents.includes(selectedContinent));
    }
    const currentItems = filteredCountries.slice(offset, offset + itemsPerPage);

    // calcula el número de páginas en función de la cantidad de elementos
    const pageCount = Math.ceil(filteredCountries.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo(0, 0);
    }

    
    //Filter continent
    const [continents, setContinents] = useState([]);

    useEffect(() => {
        const fetchContinents = async () => {
            try {
                const response = await fetch('https://pi-countries-back-production-ea0f.up.railway.app/continents');
                const data = await response.json();
                setContinents(data);
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        };

        fetchContinents();
    }, []);

    const handleContinentChange = (event) => {
        setSelectedContinent(event.target.value);
        setCurrentPage(0); // resetea la página actual cuando se cambia el continente seleccionado
    }
    

    //Filter activity
    const [selectedActivityName, setSelectedActivityName] = useState('');
    const [activities, setActivities] = useState([]);

    const handleActivityChange = (event) => {
        setSelectedActivityName(event.target.value);
        setSelectedContinent(''); // resetea el continente seleccionado cuando se cambia la actividad seleccionada
        setCurrentPage(0); // resetea la página actual cuando se cambia la actividad seleccionada
    }
    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch(`https://pi-countries-back-production-ea0f.up.railway.app/activities?season=${selectedActivityName}`);
                const data = await response.json();
                setActivities(data);
            } catch (error) {
                console.error(error);
            }
            };
        
            fetchActivities();
        }, [selectedActivityName]);


    //Order By Letter
    const [aux, setAux] = useState(false);

    const handleOrderByLetter = (event) => {
        dispatch(orderByLetter(event.target.value));
        setAux(true);
    };
    

    //Order By Population
    const handleOrderByPopulation = (event) => {
        dispatch(orderByPopulation(event.target.value));
        setAux(true);
    };

    return (
        <div className={style.elCapo}>

            <div className={style.filterContainer}>

                <div className={style.filtro}>
                    <h2 className={style.h2Filter}>Continents</h2>
                    <select value={selectedContinent} onChange={handleContinentChange}>
                        <option value="">All</option>
                        {continents.map(continent => (
                        <option key={continent} value={continent}>{continent}</option>
                        ))}
                    </select>
                </div>

                <div className={style.filtro}>
                    <h2 className={style.h2Filter}>Activity</h2>
                    <select value={selectedActivityName} onChange={handleActivityChange}>
                        <option value="">All</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                </div>

                <div className={style.filtro}>
                    <h2 className={style.h2Filter}>A-Z</h2>
                    <select onChange={handleOrderByLetter}>
                        <option value="A">Ascending</option>
                        <option value="D">Descending</option>
                    </select>
                </div>

                <div className={style.filtro}>
                    <h2 className={style.h2Filter}>Population</h2>
                    <select onChange={handleOrderByPopulation}>
                        <option value="A">Ascending</option>
                        <option value="D">Descending</option>
                    </select>
                </div>

            </div>

            <div className={style.contenedorActivities}>      
                {selectedActivityName && activities
                    .filter(activity => activity.season === selectedActivityName)
                    .map(activity => (
                        <Activity 
                        key={activity.id}
                        id={activity.id}
                        name={activity.name}
                        difficulty={activity.difficulty}
                        season={activity.season}
                        duration={activity.duration}
                        />
                    ))}       
            </div>

            <div className={style.contenedorCountries}>
            {
                currentItems?.map(country => {
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
                                capital={country.capital}
                                population={country.population}
                            />
                        )
                    }
                })
            }  
            </div>

            <div className={style.pagination}>
                <button
                    className={style.pageButton}
                    onClick={() => handlePageChange({ selected: currentPage - 1 })}
                    disabled={currentPage === 0}
                >
                    Back
                </button>
                <span className={style.spanPage}> {currentPage + 1}/{pageCount} </span>
                <button
                    className={style.pageButton}
                    onClick={() => handlePageChange({ selected: currentPage + 1 })}
                    disabled={currentPage === pageCount - 1}
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default Home;