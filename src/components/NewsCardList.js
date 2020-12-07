import React from 'react';
import '../blocks/news-card-list.scss';

const NewsCardList = ({
  sectionSettings,
  handleShowMore,
  children,
}) => (
    <section className="section_results">
      <div className="news-card-list">
        {
          sectionSettings.title
            ? (
              <h2 className="news-card-list__title">Результаты поиска</h2>
            ) : (
              ''
            )
        }
        {
          children
        }
      </div>
      {
        sectionSettings.showMoreButton
          ? (
            <button
              onClick={handleShowMore}
              className="news-card-list__show-more-button">
              Показать ещё
            </button>
          ) : (
            ''
          )
      }
    </section>
);

export default NewsCardList;
