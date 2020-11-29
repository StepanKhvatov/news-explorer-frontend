import React from 'react';
import NavigationPopup from './NavigationPopup';
import '../blocks/navigation-mobile.scss';

const NavigationMobile = ({ currentPath, openAuth, popupOpen }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const menuButtonClassName = (
    `${(currentPath === '/') ? 'navigation-mobile__button' : 'navigation-mobile__button navigation-mobile__button_color-black'}`
  );

  return (
    <>
      {
        (!popupOpen) ? <button onClick={() => setMenuOpen(!menuOpen)} className={menuButtonClassName}></button> : ''
      }
      <NavigationPopup
        onClick={() => setMenuOpen(!menuOpen)}
        closePopup={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
        openAuth={openAuth} />
    </>
  );
};

export default NavigationMobile;
