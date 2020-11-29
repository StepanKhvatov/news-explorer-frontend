import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
import '../blocks/header.scss';

const Header = ({ setPopupOpen, popupOpen }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerHeight);
  const [currentPath, setCurrentPath] = React.useState();
  const location = useLocation();

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
        (windowWidth > 760)
          ? <Navigation currentPath={currentPath} setPopupOpen={setPopupOpen} />
          : <NavigationMobile currentPath={currentPath} openAuth={setPopupOpen} popupOpen={popupOpen} />
      }

    </div>
  );
};

export default Header;
