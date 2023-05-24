import style from './CountryLoading.module.css';

const CountryLoading = () => {
    return(
        <div className={style.contenedorLoading}>
            <div className={style.countryLoading}>
                <div className={style.flagLoading}></div>
                <div className={style.nameLoading}></div>
            </div>
        </div>
    );
};

export default CountryLoading;