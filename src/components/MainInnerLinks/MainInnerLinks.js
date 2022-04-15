import React from 'react';
import { moveButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';


export default function MainInnerLinks() {
  return (
    <div className="main-inner-links">
      <ul className="main-inner-links__list">
        <li className="main-inner-links__link">{moveButtonText.aboutProject}</li>
        <li className="main-inner-links__link">{moveButtonText.technologies}</li>
        <li className="main-inner-links__link">{moveButtonText.student}</li>
      </ul>
    </div>
  );
};
