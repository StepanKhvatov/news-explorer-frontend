import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../blocks/header.scss';

const Header = ({ setPopupOpen, popupOpen, loggedIn, handleLogout }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerHeight);
  const [currentPath, setCurrentPath] = React.useState();
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  const logoClassName = ( // определям класс лого в зависимости от страницы
    `${(currentPath === '/') ? 'header__logo' : ' header__logo header__logo_color-black'} `
  );

  const headerClassName = (
    `${(currentPath === '/') ? 'header' : ' header header_color-black'}`
  );

  React.useEffect(() => {
    setCurrentPath(location.pathname);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth, location]);

  return (
    <div className={headerClassName}>
      <NavLink exact to="/" className={logoClassName}>NewsExplorer</NavLink>
      {
        windowWidth > 760
          ? (
            <Navigation
              handleLogout={handleLogout}
              currentPath={currentPath}
              setPopupOpen={setPopupOpen}
              loggedIn={loggedIn}
              currentUser={currentUser}
            />
          ) : (
            <NavigationMobile
              handleLogout={handleLogout}
              currentPath={currentPath}
              openAuth={setPopupOpen}
              popupOpen={popupOpen}
              loggedIn={loggedIn}
              handleLogout={handleLogout}
            />
          )
      }
    </div>
  );
};

export default Header;
