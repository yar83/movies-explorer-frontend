import React, { useState, useEffect } from 'react';
import Saved from './Saved';

export default {
  title: 'Design System/Pages/Saved',
  component: Saved,
};

export const Default = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {fetch('https://api.nomoreparties.co/beatfilm-movies',
    {
      method: 'GET',
    })
    .then(res => res.json())
    .then(json => {
      let moviesArr =  [];
      for (let i = 0; i < 3; i++ ) {
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

  return <Saved movies={movies} />;
};
Default.storyName = 'Saved';
