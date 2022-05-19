import React, { useState, useEffect } from 'react';
import MoviesSection from './MoviesSection';

export default {
  title: 'Design System/Molecules/Movies Section',
  component: MoviesSection,
};

export const MS = () => {
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
      setMovies(moviesArr);
      })
    .catch((err) => console.log(err));
  }, []);

  return <MoviesSection movies={movies} />;
};

MS.storyName = 'Movies Section';
MS.parameters = {
  layout: 'centered',
};
