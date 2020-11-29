import React from 'react';
import { Link } from 'react-router-dom';
import '../blocks/footer.scss';
import githubIcon from '../images/icons/github-icon.svg';
import facebookIcon from '../images/icons/facebook-icon.svg';

const Footer = () => (
  <div className="footer">
    <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
    <nav className="footer__nav">
      <ul className="footer__links">
        <li className="footer__link-item">
          <Link className="footer__link" to="/">Главная</Link>
        </li>
        <li className="footer__link-item">
          <Link className="footer__link" to="https://praktikum.yandex.ru/">Яндекс.Практикум</Link>
        </li>
        <li className="footer__link-item">
          <Link className="footer__link" to="/"><img src={githubIcon} className="footer__icon" /></Link>
        </li>
        <li className="footer__link-item">
          <Link className="footer__link" to="/"><img src={facebookIcon} className="footer__icon"/></Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Footer;
