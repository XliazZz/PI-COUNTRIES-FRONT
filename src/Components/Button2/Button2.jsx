import style from './Button2.module.css'

const Button2 = ({text}) => {
    return(
        <button className={style.Button2}>{text}</button>
    )
}

export default Button2;

// Para cambiar el texto del botón, simplemente pasas una nueva prop text al componente de botón:

// <Button onClick={handleClick} text="Hacer algo" />
