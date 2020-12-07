import React from 'react';
import SearchForm from './SearchForm';
import About from './About';
import Preloader from './Preloader';
import NoResults from './NoResults';
import NewsCardList from './NewsCardList';
import '../blocks/section.scss';
import NewsCard from './NewsCard';

const Main = ({
  handleSearchNews,
  activeNoResults,
  activePreloader,
  currentNews,
  handleShowMore,
  handleCardSave,
  handleCardDelete,
  loggedIn,
  savedNews,
  handleSaveNews,
  checkArticle,
}) => (
    <main>
      <SearchForm handleSearchNews={handleSearchNews} />
      {
        (currentNews !== null)
          ? (
            <NewsCardList
              cardSettings={{ button: 'save-button', keyword: false, message: 'unauthorized' }}
              sectionSettings={{ title: true, showMoreButton: true }}
              currentNews={currentNews}
              savedNews={savedNews}
              handleShowMore={handleShowMore}
              handleCardSave={handleCardSave}
              loggedIn={loggedIn}
              handleSaveNews={handleSaveNews}
              checkArticle={checkArticle}
            >
              {
                currentNews.map((article) => <NewsCard key={article.link} article={article} cardSettings={{ button: 'save-button', keyword: false, message: 'unauthorized' }} handleCardSave={handleCardSave} handleCardDelete={handleCardDelete} loggedIn={loggedIn} checkArticle={checkArticle}/>)
              }
            </NewsCardList>
          ) : ''

      }
      {
        (activeNoResults)
          ? (
            <NoResults />
          ) : ''
      }
      {
        (activePreloader)
          ? (
            <Preloader />
          ) : ''
      }
      <About />
    </main>
);

export default Main;
