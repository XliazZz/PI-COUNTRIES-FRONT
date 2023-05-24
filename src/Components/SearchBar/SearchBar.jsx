import { useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { searchCountries } from "../../Redux/Actions/actions";
import { FaSearch } from "react-icons/fa"
import style from './SearchBar.module.css';

const SearchBar = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch(); 

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const navigate = useNavigate();

    const handleClick = () => {
        if(name) {
            dispatch(searchCountries(name, navigate));
            setName('');
        };
    };

    return (
        <>
            <input className={style.inputBar} type="search" placeholder="Search countries..." onChange={handleChange} value={name} />

            <NavLink to="/searches">
                <button className={style.iconoBar} disabled={!name} onClick={handleClick}><FaSearch /></button>
            </NavLink>
        </>
    );
};

export default SearchBar;