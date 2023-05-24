import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import style from './GoBackButton.module.css';

const GoBackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navegar hacia atrás en el historial
    };

    return (
        <button onClick={goBack} className={style.backForm}><BiArrowBack /></button>
    );
};

export default GoBackButton;
