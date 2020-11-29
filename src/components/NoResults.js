import React from 'react';
import '../blocks/no-results.scss';

const NoResults = () => (
    <section className="section_results">
      <i className="no-results__icon"></i>
      <p className="no-results__title">Ничего не найдено</p>
      <p className="no-results__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
    </section>
);

export default NoResults;
