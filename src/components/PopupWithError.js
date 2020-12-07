import React from 'react';

const PopupWithError = ({ onClose }) => (
  <>
    <button
      className="popup__close-button"
      type="reset"
      aria-label="Закрыть"
      onClick={onClose}
    />
    <h3 className="popup__heading">Произошла ошибка! Попробуйте позже</h3>
  </>
);

export default PopupWithError;
