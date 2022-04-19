import React from 'react';
import './index.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movies }) {

  return (
    <div className="movies-card-list">
    {movies.map((movie) => (
      <MoviesCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        duration={movie.duration}
        posterUrl={`https://api.nomoreparties.co/uploads/${movie.poster}`}
      />
    ))}
    </div>
  );
};
