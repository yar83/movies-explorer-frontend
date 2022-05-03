import React, { useState, useEffect } from 'react';
import Movies from './Movies';

export default {
  title: 'Design System/Pages/Movies',
  component: Movies,
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

  return <Movies movies={movies} />;
};

Default.storyName = 'Movies';
Default.parameters = {
  layout: 'centered',
};
