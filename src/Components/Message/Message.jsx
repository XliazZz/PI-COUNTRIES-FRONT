import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postMessage } from '../../Redux/Actions/actions';
import formMessage from '../../utils/validation/formMessage';
import style from './Message.module.css';
import { AiOutlineCheck } from 'react-icons/ai'
import GoBackButton from '../GoBackButton/GoBackButton';

const Message = () => {

    const dispatch = useDispatch();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [message, setMessage] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        setMessage({
            ...message,
            [event.target.name]: event.target.value
        });
        setErrors(formMessage({
            ...message,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postMessage(message));
        setShowSuccessMessage(true);
    };

    const [errors, setErrors] = useState({});

    const isFormValid =
    !message.name ||
    !message.email ||
    !message.message ||
    Object.values(errors).some((error) => error.length > 0);

    return(
        <div  className={style.contenedorDiv}>
            <form className={style.contenedorForm} onSubmit={handleSubmit} >

                <div className={style.buttonBack}>
                    <GoBackButton/>
                </div>  

                <div className={style.inputsLabel}>
                    <div className={style.divLI}>
                        <label className={style.labelLogin}   htmlFor="name">Name</label>
                        <div>
                            <input 
                                type="text" 
                                name='name'
                                placeholder='Type you name...'
                                value={message.name}
                                className={style.inputLogin}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.errorContainer}>
                            {errors.name && <span className={style.errorMessage}>{errors.name}</span>}
                        </div>
                    </div>
                    
                    <div  className={style.divLI}>
                        <label className={style.labelLogin} htmlFor="email">Email</label>
                        <div>
                            <input 
                                className={style.inputLogin}
                                type="email" 
                                name='email'
                                placeholder='Type your email'
                                value={message.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.errorContainer}>
                            {errors.email && <span className={style.errorMessage}>{errors.email}</span>}
                        </div>
                    </div>

                    <div className={style.divLI}>
                        <label className={style.labelLogin} htmlFor="message">Message</label>
                        <div>
                            <textarea 
                                name='message'
                                placeholder='Type your message'
                                value={message.message}
                                onChange={handleChange}
                                id='message'
                                cols='30'
                                rows='20'
                                className={style.textarea}
                            />
                        </div>
                        <div className={style.errorContainer}>
                            {errors.message && <span className={style.errorMessage}>{errors.message}</span>}
                        </div>
                    </div>
                </div>
                {  showSuccessMessage ? <span className={style.success}> <AiOutlineCheck />Message sent successfully.</span>
:             
                <div className={style.divButton}>
                        <button 
                        disabled={isFormValid}
                        className={style.buttonCreate}>Submit
                        </button>
                </div>
                }
                
            </form>
        </div>
    );
};

export default Message;