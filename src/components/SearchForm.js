import React from 'react';
import '../blocks/search-form.scss';
import '../blocks/search-container.scss';

const SearchForm = () => (
    <section className="section section_search">
      <div className="search-container">
        <h1 className="search-container__title">Что творится в мире?</h1>
        <h2 className="search-container__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </h2>
        <form className="search-form">
          <input className="search-form__input" name="search-input"></input>
          <button className="search-form__submit-button" type="submit">
            Искать
          </button>
        </form>
      </div>
    </section>
);

export default SearchForm;
