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
  const { id, title, duration = 0, posterUrl, addMovieToSaved } = props;
  const { userMovies } = useContext(UserAuthContext);
  const [ movieSaved, setMovieSaved ] = useState(false);
  let location = useLocation();

  const clickHandler = () => {
    addMovieToSaved(id, () => setMovieSaved(true))
  };

  return (
    <div className="movies-card">
      <div className="movies-card__screen">
        <MoviePoster url={posterUrl} />
        {location.pathname === '/movies'
          ? (
              <div className="movies-card__label">
                {userMovies.find((movie) => movie.movieId === id) || movieSaved
                  ? <IconButton
                      view="tick"
                      glyph="tick"
                      handleClick={clickHandler}
                    />
                  : <SolidButton
                      view="gray-save"
                      label={actionButtonText.save}
                      handleClick={clickHandler}
                    />
                }
              </div>
            )
          : (
              <div className="movies-card__label">
                  <IconButton view="delete" glyph="white-cross" />
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
