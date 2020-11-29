import React from 'react';
import '../blocks/about.scss';
import author from '../images/author.jpg';

const About = () => (
    <section className="section">
      <article className="about">
        <img src={author} className="about__image" />
        <div className="about__info">
          <h2 className="about__title">Об авторе</h2>
          <p className="about__subtitle">Это блок с описанием автора проекта.
        Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
          <p className="about__subtitle">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
        </div>
      </article>
    </section>
);

export default About;
