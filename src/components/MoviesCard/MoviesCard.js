import React, { useContext, useState } from 'react';
import './index.css';
import MoviePoster from '../ui/pictures/MoviePoster/MoviePoster';
import MovieDuration from '../ui/labels/MovieDuration/MovieDuration';
import SolidButton from '../ui/buttons/solid/SolidButton';
import IconButton from '../ui/buttons/icon/IconButton';
import MovieTitle from '../ui/labels/MovieTitle/MovieTitle';
import {actionButtonText} from '../../shared/constants/buttons/button-text';
import { useLocation } from 'react-router-dom';
import { UserAuthContext } from '../../contexts/UserAuthContext'; 

export default function MoviesCard(props) {
  const { id, title, duration = 0, posterUrl, trailerLink, addMovieToSaved, delMovieFromSaved, delCard } = props;
  const { userMovies } = useContext(UserAuthContext);
  const [ movieSaved, setMovieSaved ] = useState(false);
  let location = useLocation();

  const handleSaveBtnClick = () => {
    addMovieToSaved(id, () => setMovieSaved(true));
  };

  const handleTickBtnClick = () => {
    delMovieFromSaved(id, () => setMovieSaved(false));
  }

  const handleDelBtnClick = () => {
    delMovieFromSaved(id, () => delCard(id));
  }

  return (
    <div className="movies-card">
      <div className="movies-card__screen">
        <MoviePoster trailerLink={trailerLink} url={posterUrl} />
        {location.pathname === '/movies'
          ? (
              <div className="movies-card__label">
                {userMovies.find((movie) => movie.movieId === id) || movieSaved
                  ? <IconButton
                      view="tick"
                      glyph="tick"
                      handleClick={handleTickBtnClick}
                    />
                  : <SolidButton
                      view="gray-save"
                      label={actionButtonText.save}
                      clickHandler={handleSaveBtnClick}
                    />
                }
              </div>
            )
          : (
              <div className="movies-card__label">
                  <IconButton
                    view="delete"
                    glyph="white-cross"
                    clickHandler={handleDelBtnClick}
                  />
              </div>
            )
        }
      </div>
      <div className="movies-card__data">
        <MovieTitle title={title} />
        <MovieDuration duration={duration} />
      </div>
    </div>
  );
}
