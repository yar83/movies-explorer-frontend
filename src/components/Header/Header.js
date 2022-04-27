import React from 'react';
import GreenS from '../ui/labels/GreenS/GreenS';
import TextButton from '../ui/buttons/text/TextButton';
import MicroManButton from '../ui/buttons/compound/MicroMan/MicroManButton';
import IconButton from '../ui/buttons/icon/IconButton';
import { moveButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__greens">
        <GreenS />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <TextButton
              label={moveButtonText.movies}
              color="white"
              fontSize="12"
              fontWeight="medium"
            />              
          </li>
          <li className="header__nav-item">
            <TextButton
              label={moveButtonText.savedMovies}
              color="white"
              fontSize="12"
              fontWeight="regular"
            />
          </li>
        </ul>
      </nav>
      <MicroManButton />
      <IconButton glyph="burger" view="burger" />
    </header>
  );
};
