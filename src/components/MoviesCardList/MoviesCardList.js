import React from 'react';
import './index.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movies }) {
  console.log(movies);
  return (
    <div className="movies-card-list">
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          id={movie.id}
          title={movie.nameRU}
          duration={movie.duration}
          posterUrl={`https://api.nomoreparties.co${movie.image.url}`}
        />
      ))}
    </div>
  );
};
