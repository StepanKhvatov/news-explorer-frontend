import React from 'react';
import { NavLink } from 'react-router-dom';
import '../blocks/navigation.scss';

const Navigation = ({ currentPath, setPopupOpen }) => {
  const navigationLinkClassName = (
    `${(currentPath === '/') ? 'navigation__link' : 'navigation__link navigation__link_color-black'}`
  );

  const navigationButtonClassName = (
    `${(currentPath === '/') ? 'navigation__button' : 'navigation__button navigation__button_color-black'}`
  );

  const logoutIconSource = (
    `${(currentPath === '/') ? './icons/icon-logout-white.svg' : './icons/icon-logout-black.svg'}`
  );

  return (
    <nav className="navigation">
      <NavLink
        className={navigationLinkClassName}
        exact to="/"
        activeClassName="navigation__link_active-white">
        Главная
      </NavLink>
      <NavLink
        className={navigationLinkClassName}
        exact to="/saved-news"
        activeClassName="navigation__link_active-black">
        Сохранённые статьи
      </NavLink>
      <button
        className={navigationButtonClassName}
        onClick={setPopupOpen}
        aria-label="Авторизоваться"
        >
        Авторизоваться
      </button>
      <button className={navigationButtonClassName}>
        Гретта
        <img src={logoutIconSource} className="navigation__signin-icon" alt="Иконка авторизации" />
      </button>
    </nav >
  );
};

export default Navigation;
