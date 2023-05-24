import style from './Button.module.css'

const Button = ({text}) => {
    return(
        <button className={style.Button}>{text}</button>
    )
}

export default Button;

// Para cambiar el texto del botón, simplemente pasas una nueva prop text al componente de botón:

// <Button onClick={handleClick} text="Hacer algo" />
