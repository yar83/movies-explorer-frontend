import React from 'react';
import { moveButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';


export default function NavTab() {
  return (
    <div className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__link">{moveButtonText.aboutProject}</li>
        <li className="nav-tab__link">{moveButtonText.technologies}</li>
        <li className="nav-tab__link">{moveButtonText.student}</li>
      </ul>
    </div>
  );
};
