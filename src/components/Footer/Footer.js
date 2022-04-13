import React from 'react';
import TextButton from '../ui/buttons/text/TextButton';
import './index.css';
import { moveButtonText } from '../../shared/constants/buttons/button-text';


export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className="footer__content">
        <div className="footer__copyright">© 2022</div>
        <div className="footer__links">
          <TextButton
            label={moveButtonText.yandexPraktikum}
            color="white"
            fontSize="12"
            fontWeight="regular"
          />
          <TextButton
            label={moveButtonText.github}
            color="white"
            fontSize="12"
            fontWeight="regular"
          />
          <TextButton
            label={moveButtonText.facebook}
            color="white"
            fontSize="12"
            fontWeight="regular"
          />
        </div>
      </div>
    </div>
  );
};
