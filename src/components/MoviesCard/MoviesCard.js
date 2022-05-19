import React from 'react';
import './index.css';
import MoviePoster from '../ui/pictures/MoviePoster/MoviePoster';
import MovieDuration from '../ui/labels/MovieDuration/MovieDuration';
import MovieSaved from '../ui/labels/MovieSaved/MovieSaved';
import SolidButton from '../ui/buttons/solid/SolidButton';
import IconButton from '../ui/buttons/icon/IconButton';
import MovieTitle from '../ui/labels/MovieTitle/MovieTitle';
import {actionButtonText} from '../../shared/constants/buttons/button-text';
import moviesIdsMock from '../../shared/mock/moviesdb-mock';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ id, title, duration = 0, posterUrl }) {
  let location = useLocation();

  return (
    <div className="movies-card">
      <div className="movies-card__screen">
        <MoviePoster url={posterUrl} />
        {location.pathname === '/movies'
          ? (
              <div className="movies-card__label">
                {moviesIdsMock.ids.includes(id)
                  ? <MovieSaved /> 
                  : <SolidButton view="gray-save" label={actionButtonText.save} />
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
