import React from 'react';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children, direction, setPopupOpen, popupOpen, loggedIn, handleLogout }) => (
  <>
    <Header
      setPopupOpen={setPopupOpen}
      direction={direction}
      popupOpen={popupOpen}
      loggedIn={loggedIn}
      handleLogout={handleLogout}
    />
    {
      children
    }
    <Footer />
  </>
);

export default MainLayout;
