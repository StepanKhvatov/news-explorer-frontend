import React from 'react';
import { Link } from 'react-router-dom';

const PopupWithMessage = ({ onClose, changeForm }) => (
  <>
    <button
      className="popup__close-button"
      type="reset"
      aria-label="Закрыть"
      onClick={onClose}
    />
    <h3 className="popup__heading">Пользователь успешно зарегистрирован!</h3>
    <Link to='/'
      className="popup__link"
      onClick={() => changeForm()}>Войти
        </Link>
  </>
);

export default PopupWithMessage;
