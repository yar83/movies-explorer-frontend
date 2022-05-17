import React from 'react';
import IconButton from '../ui/buttons/icon/IconButton';
import TextButton from '../ui/buttons/text/TextButton';
import MicroManButton from '../ui/buttons/compound/MicroMan/MicroManButton';
import { moveButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';

export default function Navigation({ isOpen, onClose }) {
  return (
    <div className={`navigation ${isOpen ? 'navigation_open' : ''}`}>
      <div className="navigation__container">
        <div className="navigation__close-butt" onClick={onClose} >
          <IconButton view="close" glyph="white-cross" />
        </div>
        <div className="navigation__menu">
          <TextButton
            label={moveButtonText.main}
            color="white"
            fontSize="18"
            underScored={false}
            fontWeight="medium"
          />
          <TextButton
            label={moveButtonText.movies}
            color="white"
            fontSize="18"
            underScored={true}
            fontWeight="medium"
          />
          <TextButton
            label={moveButtonText.savedMovies}
            color="white"
            fontSize="18"
            underScored={false}
            fontWeight="medium"
          />
        </div>
        <div className="navigation__account">
          <MicroManButton />
        </div>
      </div>
    </div>
  );
};
