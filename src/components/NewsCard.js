import { useState, useEffect } from 'react';
import '../blocks/news-card.scss';
import { checkMonth } from '../utils/constants';

const NewsCard = ({ article, cardSettings, handleCardSave, handleCardDelete, loggedIn, checkArticle }) => {
  const [isSave, setSave] = useState(false);
  const [isMessageVisible, setMessageVisible] = useState(false);
  const date = new Date(article.date);
  const newDate = `${date.getDay()} ${checkMonth(date.getMonth())}, ${date.getFullYear()}`;

  const cardSaveButtonClassName = (
    `news-card__button ${isSave ? 'news-card__button_active' : 'news-card__button_save'}`
  );

  const cardMessageClassName = (
    isMessageVisible ? 'news-card__message news-card__message_active' : 'news-card__message'
  );

  const handleButtonSave = () => {
    if (!checkArticle(article) && !isSave) {
      handleCardSave(article);
      if (loggedIn) {
        setSave(true);
      }
    } else if (isSave && checkArticle(article)) {
      handleCardDelete(article);
      if (loggedIn) {
        setSave(false);
      }
    }
  };

  const handleButtonDelete = () => {
    handleCardDelete(article);
    setSave(false);
  };

  const handleMouseEnter = () => {
    if (!loggedIn && cardSettings.button === 'save-button') {
      setMessageVisible(true);
    } else if (loggedIn && cardSettings.button === 'delete-button') {
      setMessageVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setMessageVisible(false);
  };

  useEffect(() => {
    if (loggedIn && checkArticle(article)) {
      setSave(true);
    }
  }, []);

  return (

    <article className="news-card">
      <a className="news-card__link" href={article.link} target="_blank" />
      {
        (cardSettings.button === 'save-button')
          ? (
            <button
              className={cardSaveButtonClassName}
              onClick={handleButtonSave}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ) : (
            <button
              className="news-card__button news-card__button_delete"
              onClick={handleButtonDelete}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          )
      }
      {
        (cardSettings.keyword)
          ? <div className="news-card__keyword"><p>{article.keyword}</p></div>
          : ''
      }
      {
        (cardSettings.message === 'unauthorized')
          ? (
            <div className={cardMessageClassName}>
              <p className="news-card__message_unauthorized">Войдите,чтобы сохранять статьи</p>
            </div>
          ) : (
            <div className={cardMessageClassName}>
              <p className="news-card__message_delete">Убрать из сохранённых</p>
            </div>
          )
      }
      <img src={article.image} className="news-card__image" />
      <div className="news-card__caption">
        <p className="news-card__date">{newDate}</p>
        <h2 className="news-card__title">{article.title}</h2>
        <p className="news-card__subtitle">{article.text}</p>
        <p className="news-card__source">{article.source}</p>
      </div>
    </article>
  );
};

export default NewsCard;
