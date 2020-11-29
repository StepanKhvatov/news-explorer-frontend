import React from 'react';
import NewsCard from './NewsCard';
import cards from '../utils/constants';
import '../blocks/news-card-list.scss';

const NewsCardList = ({ cardSettings, sectionSettings }) => (
    <section className="section_results">
      <div className="news-card-list">
        {
          (sectionSettings.title) ? <h2 className="news-card-list__title">Результаты поиска</h2> // выводим заголовок на главную страницу
            : ''
        }
        {
          cards.map((card) => <NewsCard key={card.id} card={card} cardSettings={cardSettings} />)
        }
      </div>
      {
        (sectionSettings.showMoreButton) ? <button className="news-card-list__show-more-button">Показать ещё</button> // выводим кнопку "показать ещё"
          : ''
      }

    </section>
);

export default NewsCardList;
