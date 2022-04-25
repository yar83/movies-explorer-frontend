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
          <span className="footer__link">{moveButtonText.yandexPraktikum}</span>
          <span className="footer__link">{moveButtonText.github}</span>
          <span className="footer__link">{moveButtonText.facebook}</span>
        </div>
      </div>
    </footer>
  );
};
