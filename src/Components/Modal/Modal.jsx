import style from './Modal.module.css';

const Modal = ({ children, isOpen }) => {
    return (
        <div className={`${style.modal} ${isOpen ? style.isOpen : ''}`}>
            <div className={style.modalContent}>{children}</div>
        </div>
    );
};

export default Modal;