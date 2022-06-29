import React from 'react';
import { useNavigate } from 'react-router-dom';
import GreenS from '../ui/labels/GreenS/GreenS';
import TextButton from '../ui/buttons/text/TextButton';
import MicroManButton from '../ui/buttons/compound/MicroMan/MicroManButton';
import IconButton from '../ui/buttons/icon/IconButton';
import { moveButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';

export default function MainHeaderAuthorized({ burgerBtnClickHandler }) {
  const navigate = useNavigate();

  return (
    <header className="main-header-authorized-wrapper">
      <div className="main-header-authorized">
        <div className="main-header-authorized__greens">
          <GreenS/>
        </div>
        <nav className="main-header-authorized__nav">
          <ul className="main-header-authorized__nav-list">
            <li className="main-header-authorized__nav-item">
              <TextButton
                label={moveButtonText.movies}
                handleClick={() => navigate('/movies', { replace: true })}
                color="white"
                fontWeight="medium"
                fontSize="12"
              />              
            </li>
            <li className="main-header-authorized__nav-item">
              <TextButton
                label={moveButtonText.savedMovies}
                handleClick={() => navigate('/saved-movies', { replace: true })}
                color="white"
                fontSize="12"
                fontWeight="medium"
              />
            </li>
          </ul>
        </nav>
        <MicroManButton isOnMain={true} />
        <IconButton glyph="burger" view="burger" clickHandler={burgerBtnClickHandler}/>
      </div>
    </header>
  );
};
