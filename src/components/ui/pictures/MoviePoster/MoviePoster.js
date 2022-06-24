import React from 'react';
import './index.css';

export default function MoviePoster({ trailerLink, url }) {
  return (
    <div className="movie-poster">
      <a href={trailerLink} target="_blank">
        <img className="movie-poster__image" src={url} alt="Название фильма" />
      </a>
    </div>
  );
}
