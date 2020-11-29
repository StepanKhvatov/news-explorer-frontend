import React from 'react';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children, direction, setPopupOpen, popupOpen }) => (
  <>
    <Header setPopupOpen={setPopupOpen} direction={direction} popupOpen={popupOpen} />
    {
      children
    }
    <Footer />
  </>
);

export default MainLayout;
