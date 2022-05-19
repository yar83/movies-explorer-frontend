import React from 'react';
import './index.css';

export default function MovieDuration({ duration = 0 }) {

  const formattedDuration = `${Math.floor(duration / 60) > 0 ? Math.floor(duration / 60) : 0}ч ${duration % 60 > 9 ? duration % 60 : '0' + duration % 60}м`;

  return (
    <div className="movie-duration">
      {formattedDuration}
    </div>
  );
};
