import React from 'react';
import './index.css';
import MoviePoster from '../ui/pictures/MoviePoster/MoviePoster';
import MovieDuration from '../ui/labels/MovieDuration/MovieDuration';
import MovieSaved from '../ui/labels/MovieSaved/MovieSaved';
import SolidButton from '../ui/buttons/solid/SolidButton';
import MovieTitle from '../ui/labels/MovieTitle/MovieTitle';
import {actionButtonText} from '../../shared/constants/buttons/button-text';

export default function Movie({ id, title, duration = 0, posterUrl }) {
  return (
    <div className="movie">
      <MoviePoster url={posterUrl} />
      <div className="movie__label">
        <SolidButton view="gray-save" label={actionButtonText.save} />
      </div>
      <div className="movie__data">
        <MovieTitle title={title} />
        <MovieDuration duration={duration} />
      </div>
    </div>
  );
}
