import { useEffect, useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import '../blocks/404.scss';
import Main from './Main';
import SavedNews from './SavedNews';
import PopupWithForm from './PopupWithForm';
import MainLayout from './MainLayout';
import { getNews } from '../utils/NewsApi';
import * as api from '../utils/MainApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { getTime } from '../utils/constants';

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeForm, setActiveForm] = useState('login');
  const [activeNoResults, setActiveNoResults] = useState(false);
  const [activePreloader, setActivePreloader] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [news, setNews] = useState(null);
  const [currentNews, setCurrentNews] = useState(null);
  const [savedNews, setSavedNews] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [authError, setAuthError] = useState(false);

  const handleChangeForm = () => {
    if (activeForm === 'login') {
      setActiveForm('register');
    } else if (activeForm === 'register') {
      setActiveForm('login');
    } else if (activeForm === 'message') {
      setActiveForm('login');
    }
  };

  const closeAllPopups = () => {
    setPopupOpen(false);
    setTimeout(() => {
      setActiveForm('login');
    }, 250);
  };

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      api.getUser(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res.data);
            setLoggedIn(true);
          }
        })
        .catch((err) => console.log(err));
      api.getArticles(jwt)
        .then((articles) => {
          setSavedNews(articles.data);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleLogin = (data) => {
    console.log(data);
    api.authorize(data.email, data.password)
      .then((res) => {
        console.log(res);
        if (res.message === 'Неправильные почта или пароль') {
          setAuthError(true);
          setTimeout(() => {
            setAuthError(false);
          }, 4000);
        } else if (res.message === 'celebrate request validation failed') {
          setActiveForm('error');
          setPopupOpen(true);
        } else {
          setPopupOpen(false);
          handleTokenCheck();
        }
      })
      .catch((err) => console.log(err)); // сообразить сообщение об ошибке
  };

  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({});
  }

  const handleRegister = (data) => {
    api.register(data.email, data.password, data.name)
      .then((res) => {
        if (res.message === 'Пользователь с таким email уже есть') {
          setAuthError(true);
          setTimeout(() => {
            setAuthError(false);
          }, 4000);
        } else if (res.message === 'celebrate request validation failed') {
          setActiveForm('error');
          setPopupOpen(true);
        } else {
          setActiveForm('message');
          setPopupOpen(true);
          handleChangeForm();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchNews = (searchKeyword) => {
    setNews(null);
    setCurrentNews(null);
    setActivePreloader(true);
    const date = getTime();
    getNews({ searchKeyword, date })
      .then((res) => {
        if (res.articles.length === 0) {
          setActiveNoResults(true);
          return;
        }

        const articles = res.articles.map((element) => {
          return {
            keyword: searchKeyword,
            title: element.title,
            text: element.description,
            source: element.source.name,
            link: element.url,
            image: element.urlToImage,
            date: element.publishedAt,
          };
        });

        const uniqArticles = new Set(articles); // убрали дубликаты

        const uniqArrayArticles = [...uniqArticles];

        setTimeout(() => {
          setNews(uniqArrayArticles);
          localStorage.setItem('currentNews', JSON.stringify(uniqArrayArticles));
          setCurrentNews(uniqArrayArticles.splice(0, 3));
          setActivePreloader(false);
        }, 700);
      })
      .catch((error) => {
        setPopupOpen(true);
        setActiveForm('error');
        setActivePreloader(false);
        console.log(error);
      });
  };

  const handleShowMore = () => {
    const moreNews = news.splice(0, 3);
    setCurrentNews(currentNews.concat(moreNews));
  };

  const handleCardSave = (article) => {
    let isSaved = null;

    if (loggedIn) {
      api.saveNews(article)
        .then((res) => {
          currentNews.forEach((element) => {
            if (element.link === res.data.link) {
              element._id = res.data._id;
            }
          });
          setCurrentNews(currentNews);

          const storageNews = JSON.parse(localStorage.getItem('currentNews'));
          storageNews.forEach((el) => {
            if (el.link === res.data.link) {
              el._id = res.data._id;
            }
          });
          localStorage.setItem('currentNews', JSON.stringify(storageNews));
          setSavedNews([res.data, ...savedNews]);
        })
        .catch((error) => {
          setPopupOpen(true);
          setActiveForm('error');
          console.log(error);
        });
      isSaved = true;
    } else {
      isSaved = false;
    }

    return isSaved;
  };

  const checkArticle = useCallback((article) => {
    if (!loggedIn) return;
    let isSaved = false;

    savedNews.forEach((element) => {
      if (element.title === article.title) {
        isSaved = true;
      }
    });

    return isSaved;
  }, [savedNews]);

  const handleCardDelete = (article) => {
    api.deleteArticle(article._id)
      .then((res) => {
        const newArticles = savedNews.filter((i) => i.title !== res.data.title);
        setSavedNews(newArticles);
      })
      .catch((error) => {
        setPopupOpen(true);
        setActiveForm('error');
        console.log(error);
      });
  };

  useEffect(() => {
    if (localStorage.currentNews) {
      setActivePreloader(true);
      setTimeout(() => {
        setNews(JSON.parse(localStorage.getItem('currentNews')));
        setCurrentNews(JSON.parse(localStorage.getItem('currentNews')).splice(0, 3));
        setActivePreloader(false);
      }, 1000);
    }
    handleTokenCheck();
  }, [loggedIn]);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser} >
        <MainLayout
          direction="main"
          setPopupOpen={() => setPopupOpen(true)}
          popupOpen={popupOpen}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
        >
          <Switch>
            <Route exact path="/">
              <Main
                setPopupOpen={() => setPopupOpen(true)}
                popupOpen={popupOpen}
                handleSearchNews={handleSearchNews}
                news={news}
                currentNews={currentNews}
                savedNews={savedNews}
                activeNoResults={activeNoResults}
                activePreloader={activePreloader}
                handleShowMore={() => handleShowMore()}
                handleCardSave={handleCardSave}
                handleCardDelete={handleCardDelete}
                loggedIn={loggedIn}
                checkArticle={checkArticle}
              />
            </Route>
            <ProtectedRoute
              path="/saved-news"
              component={SavedNews}
              setPopupOpen={() => setPopupOpen(true)}
              savedNews={savedNews}
              loggedIn={loggedIn}
              handleCardSave={handleCardSave}
              checkArticle={checkArticle}
              handleCardDelete={handleCardDelete}
            />
            <Route exact path="*">
              <section className="not-found__section">
                <p className="not-found__title">Страница не найдена</p>
              </section>
            </Route>
          </Switch>
        </MainLayout>
        <PopupWithForm
          isOpen={popupOpen}
          changeForm={() => handleChangeForm()}
          activeForm={activeForm}
          onClose={closeAllPopups}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          authError={authError}
          setPopupOpen={setPopupOpen}
        />
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;
