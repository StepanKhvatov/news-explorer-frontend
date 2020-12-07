import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

const AuthForm = ({ onSubmit, onClose, changeForm, formName, title, authError }) => {
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitButtonClassName = (
    `${disabled ? 'popup__submit-button popup__submit-button_disabled' : 'popup__submit-button'}`
  );

  const emailErrorClassName = (
    `${(!errors.email) ? 'popup__error' : 'popup__error popup__error_active'}`
  );

  const passwordErrorClassName = (
    `${(!errors.password) ? 'popup__error' : 'popup__error popup__error_active'}`
  );

  const nameErrorClassName = (
    `${(!errors.name) ? 'popup__error' : 'popup__error popup__error_active'}`
  );

  const authErrorClassName = (
    `${(authError) ? 'popup__attention popup__attention_active' : 'popup__attention'}`
  );

  const handleResetForm = () => {
    setErrors({});
    if (formName === 'register') {
      nameRef.current.value = '';
    }
    emailRef.current.value = '';
    passwordRef.current.value = '';
    setDisabled(true);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let data = {};
    if (formName === 'login') {
      data = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      handleResetForm();
    } else if (formName === 'register') {
      data = {
        name: nameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
      };
      handleResetForm();
      changeForm();
    }

    onSubmit(data);
  };

  const checkInputValid = (evt) => {
    if (!evt.target.checkValidity()) {
      setErrors({ ...errors, [evt.target.name]: true });
    } else if (evt.target.checkValidity()) {
      setErrors({ ...errors, [evt.target.name]: false });
    }

    if (evt.target.value === '') {
      setErrors({ ...errors, [evt.target.name]: false });
    }
  };

  const handleChange = (evt) => {
    checkInputValid(evt);
    if (evt.target.closest('form').checkValidity()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="popup__form"
      id="form"
    >
      <button
        className="popup__close-button"
        type="reset"
        aria-label="Закрыть"
        onClick={onClose}
      />
      <h3 className="popup__heading">{title}</h3>
      <span className="popup__input-name">Email</span>
      <input
        name="email"
        className="popup__input"
        type="email"
        minLength="1"
        maxLength="30"
        required
        placeholder="Введите почту"
        onChange={(evt) => handleChange(evt)}
        ref={emailRef}
      />
      <span className={emailErrorClassName}>Неправильный формат email</span>
      <span className="popup__input-name">Пароль</span>
      <input
        name="password"
        className="popup__input"
        type="password"
        required
        minLength="4"
        maxLength="30"
        placeholder="Введите пароль"
        onChange={(evt) => handleChange(evt)}
        ref={passwordRef}
      />
      <span className={passwordErrorClassName}>Пароль слишком короткий</span>
      {
        (title === 'Регистрация')
          ? <>
            <span className="popup__input-name">Имя</span>
            <input
              name="name"
              className="popup__input"
              type="text"
              required
              minLength="4"
              maxLength="30"
              placeholder="Введите своё имя"
              onChange={(evt) => handleChange(evt)}
              ref={nameRef}
            />
            <span className={nameErrorClassName}>Имя слишком короткое</span>
          </>
          : ''
      }
      {
        (title === 'Регистрация')
          ? <p className={authErrorClassName}>Такой пользователь уже есть</p>
          : <p className={authErrorClassName}>Неправильно введён email или пароль</p>
      }
      <button
        className={submitButtonClassName}
        aria-label="Создать"
        type="submit"
        disabled={disabled}
      >
        Войти
      </button>
      <p className="popup__choise">или
       <Link to='/'
          className="popup__link"
          onClick={() => {
            handleResetForm();
            changeForm();
          }}>{(title === 'Вход') ? ' Зарегестрироваться' : ' Войти'}
        </Link>
      </p>
    </form>
  );
};

export default AuthForm;
