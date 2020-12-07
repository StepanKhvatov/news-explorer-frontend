import React from 'react';
import AuthForm from './AuthForm';
import PopupWithMessage from './PopupWithMessage';
import PopupWithError from './PopupWithError';

const PopupWithForm = ({ isOpen, activeForm, changeForm, onClose, handleLogin, handleRegister, authError, setPopupOpen }) => {
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
              title="Вход"
              formName="login"
              onSubmit={handleLogin}
              onClose={onClose}
              changeForm={changeForm}
              authError={authError}
              setPopupOpen={setPopupOpen}
            />
            : activeForm === 'register'
              ? <AuthForm
                title="Регистрация"
                formName="register"
                onSubmit={handleRegister}
                onClose={onClose}
                changeForm={changeForm}
                authError={authError}
                setPopupOpen={setPopupOpen}
              />
              : activeForm === 'message'
                ? <PopupWithMessage
                  onClose={onClose}
                  changeForm={changeForm}
                />
                : activeForm === 'error'
                  ? <PopupWithError
                    onClose={onClose}
                  />
                  : ''
        }
      </div>
    </div>
  );
};

export default PopupWithForm;
