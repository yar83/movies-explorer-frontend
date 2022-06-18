import React, { useContext } from 'react';
import './index.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import mainApi from '../../utils/api/MainApi';
import { UserAuthContext } from '../../contexts/UserAuthContext'; 
import { endpoint } from '../../utils/const/moviesApi';

export default function MoviesCardList({ movies, delCard }) {
  const currentUser = useContext(UserAuthContext); 
  
  const addMovieToSaved = (id, cb) => {
    const movie = movies.find((movie) => movie.id === id);
    mainApi.saveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailerLink: movie.trailerLink,
      image: `${endpoint}${movie.image.url}`,
      thumbnail: `${endpoint}${movie.image.formats.thumbnail.url}`,
      owner: currentUser._id,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then(() => {
        currentUser.updateUserMovies();
        cb();
      })
      .catch((err) => console.log(err));
  }

  const delMovieFromSaved = (id, cb) => {
    mainApi.delMovie(id)
      .then(() => {
        currentUser.updateUserMovies();
        cb();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="movies-card-list">
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          id={movie.id}
          title={movie.nameRU}
          duration={movie.duration}
          posterUrl={`https://api.nomoreparties.co${movie.image.url}`}
          addMovieToSaved={addMovieToSaved}
          delMovieFromSaved={delMovieFromSaved}
          delCard={delCard}
        />
      ))}
    </div>
  );
};
