import React from 'react';
import './index.css';
import { moveButtonText } from '../../shared/constants/buttons/button-text';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className="footer__content">
        <div className="footer__copyright">© 2022</div>
        <div className="footer__links">
          <span className="footer__link">
            <a href="https://praktikum.yandex.ru" className="footer__link-entity" target="blank">
              {moveButtonText.yandexPraktikum}
            </a>
          </span>
          <span className="footer__link">
            <a href="https://github.com/yar83" className="footer__link-entity" target="blank">
              {moveButtonText.github}
            </a>
          </span>
          <span className="footer__link">
            <a href="https://facebook.com/yar.bashmakov" className="footer__link-entity" target="blank">
              {moveButtonText.facebook}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
