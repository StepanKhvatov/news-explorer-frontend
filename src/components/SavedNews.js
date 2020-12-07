import React from 'react';
import NewsCardList from './NewsCardList';
import SavedNewsHeader from './SavedNewsHeader';
import NewsCard from './NewsCard';

function SavedNews({ savedNews, loggedIn, handleCardSave, checkArticle, handleCardDelete }) {
  return (
    <>
      <SavedNewsHeader savedNews={savedNews} />
      <NewsCardList
        cardSettings={{ button: 'delete-button', keyword: true, message: 'delete-message' }}
        sectionSettings={{ title: false, showMoreButton: false }}
        savedNews={savedNews}
      >
        {
          savedNews
            ? savedNews.map((article, index) => <NewsCard key={index} article={article} cardSettings={{ button: 'delete-button', keyword: true, message: 'delete-message' }} handleCardSave={handleCardSave} loggedIn={loggedIn} checkArticle={checkArticle} handleCardDelete={handleCardDelete} />)
            : null
        }
      </NewsCardList>
    </>
  );
}

export default SavedNews;
