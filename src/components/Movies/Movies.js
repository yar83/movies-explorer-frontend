import React from 'react';
import './movies.css';
import Movie from '../Movie/Movie';

export default function Movies({ movies }) {
  return (
    <div className="movies">
    {movies.map((movie) => (
      <Movie
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
