import React from 'react';
import { moveButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';


export default function NavTab() {
  return (
    <div className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__link">
          <a href="#about" className="nav-tab__link-entity">
            {moveButtonText.aboutProject}
          </a>
        </li>
        <li className="nav-tab__link">
          <a href="#technologies" className="nav-tab__link-entity">
            {moveButtonText.technologies}
          </a>
        </li>
        <li className="nav-tab__link">
          <a href="#student" className="nav-tab__link-entity">
            {moveButtonText.student}
          </a>
        </li>
      </ul>
    </div>
  );
};
