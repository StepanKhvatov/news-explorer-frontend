import { useRef } from 'react';
import '../blocks/search-form.scss';
import '../blocks/search-container.scss';

const SearchForm = ({ handleSearchNews }) => {
  const searchInputRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearchNews(searchInputRef.current.value);
    searchInputRef.current.value = '';
  };

  return (
    <section className="section section_search">
      <div className="search-container">
        <h1 className="search-container__title">Что творится в мире?</h1>
        <h2 className="search-container__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </h2>
        <form onSubmit={handleSubmit} className="search-form">
          <input ref={searchInputRef} className="search-form__input" name="search-input"></input>
          <button className="search-form__submit-button" type="submit">
            Искать
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
