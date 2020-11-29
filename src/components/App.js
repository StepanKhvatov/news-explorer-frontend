import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import SavedNews from './SavedNews';
import PopupWithForm from './PopupWithForm';
import MainLayout from './MainLayout';

const App = () => {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [activeForm, setActiveForm] = React.useState('login');

  const closeAllPopups = () => {
    setPopupOpen(false);
    setTimeout(() => {
      setActiveForm('login');
    }, 250);
  };

  const handleChangeForm = () => {
    if (activeForm === 'login') {
      setActiveForm('register');
    } else if (activeForm === 'register') {
      setActiveForm('login');
    } else if (activeForm === 'message') {
      setActiveForm('login');
    }
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    setActiveForm('message');
    setPopupOpen(true);
  };

  return (
    <>
      <MainLayout
        direction="main"
        setPopupOpen={() => setPopupOpen(true)}
        popupOpen={popupOpen}>
        <Switch>
          <Route exact path="/">
            <Main setPopupOpen={() => setPopupOpen(true)} popupOpen={popupOpen} />
          </Route>
          <Route exact path="/saved-news">
            <SavedNews setPopupOpen={() => setPopupOpen(true)} />
          </Route>
        </Switch>
      </MainLayout>
      <PopupWithForm
        isOpen={popupOpen}
        changeForm={() => handleChangeForm()}
        activeForm={activeForm}
        onClose={closeAllPopups}
        handleLogin={handleLogin}
      />
    </>
  );
};

export default App;
