import React from 'react';
import '../blocks/saved-news-header.scss';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { uniq } from '../utils/constants';

const SavedNewsHeader = ({ savedNews }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const keywords = [...new Set(savedNews.map((i) => i.keyword))];
  const uniqKeywords = uniq(keywords);

  React.useEffect(() => {
    console.log(uniqKeywords);
  });

  return (
    <section className="section_news-header">
      <h2 className="saved-news-header__title">Сохранённые статьи</h2>
      <h3 className="saved-news-header__subtitle">
        {
          `${currentUser.name}, ${(savedNews.length === 0) ? 'у вас нет стохранённых статей' : (`количество сохранённых Вами стaтей - ${savedNews.length}`)}`
        }
      </h3>
      {
        (uniqKeywords.length !== 0)
          ? (
            <p className="saved-news-header__keywords">
              По ключевым словам:
              {
                (keywords.length <= 3)
                  ? (
                    uniqKeywords.map((element, index) => (
                      <Keyword key={index} word={element} />
                    ))
                  ) : (keywords.length >= 3) ? (
                    uniqKeywords.slice(0, 3).map((element, index) => (
                      <Keyword key={index} word={element} />
                    ))
                  ) : (
                    ''
                  )
              }
              {
                (uniqKeywords.length === 4)
                  ? <strong className="save-news-header__keywords_strong"> и одному другому</strong>
                  : ''
              }
              {
                (uniqKeywords.length > 4)
                  ? <strong className="save-news-header__keywords_strong"> и {uniqKeywords.length - 3} другим</strong>
                  : ''
              }
            </p>
          ) : (
            ''
          )
      }
    </section>
  );
};

export default SavedNewsHeader;

const Keyword = ({ word }) => {
  return (
    <>
      <strong className="save-news-header__keywords_strong"> {word}</strong>
    </>
  );
};
