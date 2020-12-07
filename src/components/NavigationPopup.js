import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../blocks/navigation-mobile.scss';
import '../blocks/popup.scss';

const NavigationPopup = ({ menuOpen, onClick, closePopup, openAuth, loggedIn, handleLogout }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const popupClassName = (
    `${(menuOpen) ? 'popup popup_opened' : 'popup'}`
  );

  const handleLogin = () => {
    closePopup();
    openAuth();
  };

  const handleLogoutButton = () => {
    closePopup();
    handleLogout();
  };

  return (
    <div className={popupClassName}>
      <div className="navigation-mobile__container">
        <div className="header header_location-popup">
          <NavLink
            exact to="/"
            className="header__logo">
            NewsExplorer
          </NavLink>
          <button
            onClick={onClick}
            className='navigation-mobile__button-close'
          />
        </div>
        <ul className="navigation-mobile__links">
          <li>
            <NavLink
              onClick={closePopup}
              className="navigation-mobile__link"
              exact to="/">
              Главная
            </NavLink>
          </li>
          {
            loggedIn
              ? (
                <li>
                  <NavLink
                    onClick={closePopup}
                    className="navigation-mobile__link"
                    exact to="/saved-news">
                    Сохранённые статьи
                  </NavLink>
                </li>
              ) : (
                ''
              )
          }
        </ul>
        {
          loggedIn
            ? (
              <button
                onClick={() => handleLogoutButton()}
                className="navigation__button navigation__button_location-popup"
                aria-label="Авторизоваться"
              >
                {currentUser.name}
              </button>
            ) : (
              <button
                onClick={() => handleLogin()}
                className="navigation__button navigation__button_location-popup"
                aria-label="Авторизоваться"
              >
                Авторизоваться
              </button>
            )
        }
      </div>
    </div>
  );
};

export default NavigationPopup;
