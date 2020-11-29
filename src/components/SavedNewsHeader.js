import React from 'react';
import '../blocks/saved-news-header.scss';

const SavedNewsHeader = () => (
    <section className="section_news-header">
      <h2 className="saved-news-header__title">Сохранённые статьи</h2>
      <h3 className="saved-news-header__subtitle">Грета, у вас 5 сохранённых статей</h3>
      <p className="saved-news-header__keywords">
        По ключевым словам:
        <strong className="save-news-header__keywords_strong"> Природа</strong>,
        <strong className="save-news-header__keywords_strong"> Тайга</strong> и
        <strong className="save-news-header__keywords_strong"> 2-м другим</strong>
      </p>
    </section>
);

export default SavedNewsHeader;
