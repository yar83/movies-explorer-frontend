import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GreenSButton from '../ui/buttons/compound/GreenS/GreenSButton';
import TextButton from '../ui/buttons/text/TextButton';
import MicroManButton from '../ui/buttons/compound/MicroMan/MicroManButton';
import IconButton from '../ui/buttons/icon/IconButton';
import { moveButtonText } from '../../shared/constants/buttons/button-text';
import './index.css';

export default function Header({openNavigation}) {
  let navigate = useNavigate();
  const moveToSavedMoviesPage = () => {
    navigate('../saved-movies');
  };

  const moveToMoviesPage = () => {
    navigate('../movies');
  };

  const moveToMainPage = () => {
    navigate('../');
  };

  let location = useLocation();

  return (
    <header className="header">
      <div className="header__greens">
        <GreenSButton handleClick={moveToMainPage} />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            {location.pathname === '/movies'
              ?
                <TextButton
                  label={moveButtonText.movies}
                  color="white"
                  fontSize="12"
                  fontWeight="medium"
                  handleClick={moveToMoviesPage}
                />              
              :
                <TextButton
                  label={moveButtonText.movies}
                  color="white"
                  fontWeight="regular"
                  fontSize="12"
                  handleClick={moveToMoviesPage}
                />              
            }
          </li>
          <li className="header__nav-item">
            {location.pathname === '/saved-movies'
              ?
                <TextButton
                  label={moveButtonText.savedMovies}
                  color="white"
                  fontSize="12"
                  fontWeight="medium"
                  handleClick={moveToSavedMoviesPage}
                />
              :
                <TextButton
                  label={moveButtonText.savedMovies}
                  color="white"
                  fontSize="12"
                  fontWeight="regular"
                  handleClick={moveToSavedMoviesPage}
                />
            }
          </li>
        </ul>
      </nav>
      <MicroManButton />
      <IconButton glyph="burger" view="burger" clickHandler={openNavigation} />
    </header>
  );
};
