import React, { useState, useEffect } from 'react';
import MoviesCardList from './MoviesCardList';

export default {
  title: 'Design System/Molecules/Movies Card List',
  component: MoviesCardList,
};

export const MCS = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {fetch('https://api.nomoreparties.co/beatfilm-movies',
    {
      method: 'GET',
    })
    .then(res => res.json())
    .then(json => {
      let moviesArr =  [];
      for (let i = 0; i < 12; i++ ) {
        moviesArr.push({
          id: json[i].id,
          title: json[i].nameRU,
          duration: json[i].duration,
          posterUrl: json[i].image.url,
        });
      };
      console.log(moviesArr);
      setMovies(moviesArr);
      })
    .catch((err) => console.log(err));
  }, []);

  return <MoviesCardList movies={movies} />;
};

MCS.storyName = 'Movies Card List';
MCS.parameters = {
  layout: 'centered',
};
