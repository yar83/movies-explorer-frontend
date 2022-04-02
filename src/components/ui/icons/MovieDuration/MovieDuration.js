import React from 'react';
import './movie-duration/index.css';

const MovieDuration = ({ duration = 0 }) => {
  let timeString;
  const hours = Math.floor(duration / 60);
  const mins = duration % 60;

  timeString = `${hours}ч `;
  timeString = mins < 10 ? `${timeString}0${mins}м` : `${timeString}${mins}м`;


  return (
    <div className="movie-duration">
      <span className="movie-duration_duration">
        {timeString}
      </span>
    </div>
  );
};

export default MovieDuration;
