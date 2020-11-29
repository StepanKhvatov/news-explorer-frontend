import React from 'react';
import '../blocks/news-card.scss';

const NewsCard = ({ card, cardSettings }) => {
  const [isSave, setSave] = React.useState(false);

  const cardSaveButtonClassName = (
    `news-card__button ${isSave ? 'news-card__button_active' : 'news-card__button_save'}`
  );

  const handleCardClick = () => {
    setSave(!isSave);
  };

  return (
    <article className="news-card">
      {
        (cardSettings.button === 'save-button')
          ? <button className={cardSaveButtonClassName} onClick={() => handleCardClick()} ></button>
          : <button className="news-card__button news-card__button_delete"></button>
      }
      {
        (cardSettings.keyword)
          ? <div className="news-card__keyword"><p>{card.keyword}</p></div>
          : ''
      }
      {
        (cardSettings.message === 'unauthorized')
          ? <div className="news-card__message"><p className="news-card__message_unauthorized">Войдите,чтобы сохранять статьи</p></div>
          : <div className="news-card__message"><p className="news-card__message_delete">Убрать из сохранённых</p></div>
      }
      <img src={card.image} className="news-card__image"></img>
      <div className="news-card__caption">
        <p className="news-card__date">{card.date}</p>
        <h2 className="news-card__title">{card.title}</h2>
        <p className="news-card__subtitle">{card.text}</p>
        <p className="news-card__source">{card.source}</p>
      </div>

    </article>
  );
};

export default NewsCard;
