import React from 'react';
import SearchForm from './SearchForm';
import About from './About';
import Preloader from './Preloader';
import NoResults from './NoResults';
import NewsCardList from './NewsCardList';
import '../blocks/section.scss';

const Main = () => (
  <main>
    <SearchForm />
    <NewsCardList
      cardSettings={{ button: 'save-button', keyword: false, message: 'unauthorized' }}
      sectionSettings={{ title: true, showMoreButton: true }}
    />
    <NoResults />
    <Preloader />
    <About />
  </main>
);

export default Main;
