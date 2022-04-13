import React from 'react';
import './index.css';

export default function MoviePoster({ url }) {
  return (
    <div className="movie-poster">
      <img className="movie-poster__image" src={url} alt="Название фильма" />
    </div>
  );
}