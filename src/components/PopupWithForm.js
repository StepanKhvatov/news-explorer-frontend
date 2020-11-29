import React from 'react';
import AuthForm from './AuthForm';
import PopupWithMessage from './PopupWithMessage';

const PopupWithForm = ({ isOpen, activeForm, changeForm, onClose, handleLogin }) => {
  const overlayRef = React.useRef();

  const handleClose = (evt) => {
    const escKeyCode = 27;
    if (evt.target === overlayRef.current || evt.keyCode === escKeyCode) onClose();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', (evt) => handleClose(evt));
  }, []);

  return (
    <div
      onClick={(evt) => handleClose(evt)}
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      ref={overlayRef}
    >
      <div
        className={(activeForm === 'message') ? 'popup__container popup__container-message' : 'popup__container'}
        style={(activeForm === 'message') ? { alignItems: 'start' } : { alignItems: 'center' }}
      >
        {
          activeForm === 'login'
            ? <AuthForm
              name="Вход"
              onSubmit={handleLogin}
              onClose={onClose}
              changeForm={changeForm}
            />
            : activeForm === 'register'
              ? <AuthForm
                name="Регистрация"
                onSubmit={handleLogin}
                onClose={onClose}
                changeForm={changeForm}
              />
              : activeForm === 'message'
                ? <PopupWithMessage
                  onClose={onClose}
                  changeForm={changeForm}
                />
                : ''
        }
      </div>
    </div>
  );
};

export default PopupWithForm;
