import { useState, useEffect } from 'react';
import { postActivity, getAllCountries } from '../../Redux/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { formActivity } from '../../utils/validation/formActivity'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import style from './FormActivity.module.css'
import summer from '../../assert/Season/summer.jpg';
import spring from '../../assert/Season/spring.jpg';
import autumn from '../../assert/Season/autumn.jpg';
import winter from '../../assert/Season/winter.jpg';
import seasons from '../../assert/Season/seasons.jpg';

const FormActivity = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries);

    
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch])
    
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [errors, setErrors] = useState({});
    const [activityData, setActivityData] = useState({
        name: '',
        difficulty: 0,
        duration: 0,
        season: '',
        selectedCountries,
    });
    
    const handleChange = (event) => {
        setActivityData({
            ...activityData,
            [event.target.name]: event.target.value
        });
        setErrors(formActivity({
            ...activityData,
            [event.target.name]: event.target.value
        }));
    };
    
    //Funcion para elegir y setear la dificultad por medio de los botones.
    const handleDifficulty = (difficulty) => {
        setActivityData({
            ...activityData,
            difficulty: difficulty,
        });
    };

    const handleCountrySelect = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map(option => {
            return {
                id: option.value,
                name: option.text
            }
        });
        
        const newSelectedCountries = selectedOptions.filter(option => {
            return !selectedCountries.some(country => country.id === option.id)
        })
        
        setSelectedCountries([...selectedCountries, ...newSelectedCountries]);
        
        setActivityData({
            ...activityData,
            selectedCountries: [...selectedCountries, ...newSelectedCountries],
        })
    };
    
    const handleCountryDelete = (countryId) => {
        const updatedSelectedCountries = selectedCountries.filter(
                (country) => country.id !== countryId
            );
            setSelectedCountries(updatedSelectedCountries);
            setActivityData({
                ...activityData,
                selectedCountries: updatedSelectedCountries,
            });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(activityData));
        setShowSuccessMessage(true);
    };
    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    return(
        <div className={style.padre}>

            <form className={style.form}>

                <img 
                    className={style.seasons}
                    src={
                        activityData.season === 'Summer' ? summer 
                        : activityData.season === 'Autumn' ? autumn 
                        : activityData.season === 'Winter' ? winter 
                        : activityData.season === 'Spring' ? spring 
                        : seasons
                    } 
                    alt="" 
                />

                <div className={style.divLabelInput}>
                    <label className={style.labelActivity} htmlFor="name">Name</label>
                    <div className={style.inputErrorContainer}>
                        <input 
                            disabled={showSuccessMessage}
                            className={style.inputActivity}
                            type="text"
                            name='name'
                            placeholder='Enter name activity'
                            value={activityData.name} 
                            onChange={handleChange}
                        />
                        {errors.name && <div className={style.error}>{errors.name}</div>}
                    </div>
                </div>

                <div className={style.divLabelInput}>
                    <label  className={style.labelActivity}  htmlFor="difficulty">Difficulty</label>
                    <div className={style.inputErrorContainer}>
                        {[1, 2, 3, 4, 5].map((difficulty) => (
                        <button
                            disabled={showSuccessMessage}
                            className={style.difficultyButton}
                            key={difficulty}
                            type='button'
                            onClick={() => handleDifficulty(difficulty)}
                        >
                            {difficulty <= activityData.difficulty ? <AiFillStar className={style.starGold}/> : <AiOutlineStar className={style.starWhite} />}
                        </button>
                        ))}
                        {errors.difficulty && <div className={style.error}>{errors.difficulty}</div>}
                    </div>
                </div>


                <div className={style.divLabelInput}>
                    <label className={style.labelActivity} htmlFor="duration">Duration</label>
                    <div className={style.inputErrorContainer}>
                        <input 
                            disabled={showSuccessMessage}
                            className={style.inputActivity}
                            type="number"
                            name="duration"
                            min="0"
                            step="15"
                            placeholder="Enter duration in minutes"
                            value={activityData.duration}
                            onChange={handleChange}
                        />
                        {errors.duration && <div className={style.error}>{errors.duration}</div>}
                    </div>
                </div>

                
                <div className={style.divLabelInput}>
                    <label className={style.labelActivity} htmlFor="season">Season</label>
                    <div className={style.inputErrorContainer}>
                        <select 
                            disabled={showSuccessMessage}
                            className={style.selectActivity}
                            name="season" 
                            id="season"
                            value={activityData.season}
                            onChange={handleChange}
                        >
                            <option value="">Select Season</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                        {errors.season && <div className={style.error}>{errors.season}</div>}
                    </div>
                </div>

                <div className={style.divLabelInput}>
                    <label className={style.labelActivity} htmlFor="selectedCountries">Choose country/countries:</label>
                    <select
                        disabled={showSuccessMessage}
                        className={style.selectCountries}
                        name="selectedCountries"
                        multiple
                        value={selectedCountries.map(country => country.id)}
                        onChange={handleCountrySelect}
                    >
                        {allCountries.map((country) => (
                            <option  key={country.id} value={country.id}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    {errors.selectedCountries && <div className={style.error}>{errors.selectedCountries}</div>}
                </div>

                <h4 className={style.selected}>
                    You selected:
                    {selectedCountries.map((country) => (
                        
                        <button
                            disabled={showSuccessMessage}
                            className={style.buttonCountry}
                            type="button"
                            onClick={() => handleCountryDelete(country.id)}
                        >
                            {country.name}
                        </button>
                    ))}
                </h4>
                {showSuccessMessage ? (
                    <div className={style.success}> <AiOutlineCheck /> Activity created successfully!</div>
                    ) : (
                        <div className={style.divSubmit}>
                            <button 
                                className={style.buttonCreate}
                                disabled={
                                !activityData.name ||
                                !activityData.difficulty ||
                                !activityData.duration ||
                                !activityData.season ||
                                Object.values(errors).some((error) => error.length > 0)
                                }
                                onClick={handleSubmit}>
                                Create your activity
                            </button>
                        </div>
                    )}
            </form>
        </div>
    );
};

export default FormActivity;