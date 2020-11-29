import { Link } from 'react-router-dom';

const AuthForm = ({ onSubmit, onClose, changeForm, name }) => (
    <form
      onSubmit={onSubmit}
      className="popup__form"
      noValidate
    >
      <button
        className="popup__close-button"
        type="reset"
        aria-label="Закрыть"
        onClick={onClose}
      />
      <h3 className="popup__heading">{name}</h3>
      <span className="popup__input-name">Email</span>
      <input
        id="input-place"
        name="name"
        className="popup__input"
        type="text"
        minLength="1"
        maxLength="30"
        required
        placeholder="Введите почту"
      />
      <span className="popup__error">Неправильный формат email</span>
      <span className="popup__input-name">Пароль</span>
      <input
        id="input-link"
        name="link"
        className="popup__input"
        type="url"
        required
        placeholder="Введите пароль"
      />
      <span className="popup__error">Пароль слишком короткий</span>
      {
        (name === 'Регистрация')
          ? <>
            <span className="popup__input-name">Имя</span>
            <input
              id="input-link"
              name="link"
              className="popup__input"
              type="url"
              required
              placeholder="Введите своё имя"
            />
            <span className="popup__error">Имя слишком короткое</span>
          </>
          : ''
      }
      <p className="popup__attention">Такой пользователь уже есть</p>
      <button
        className="popup__submit-button"
        aria-label="Создать"
        type="submit"
      >
        Войти
      </button>
      <p className="popup__choise">или
       <Link to='/'
          className="popup__link"
          onClick={() => changeForm()}>{(name === 'Вход') ? ' Зарегестрироваться' : ' Войти'}
        </Link>
      </p>
    </form>
);

export default AuthForm;
