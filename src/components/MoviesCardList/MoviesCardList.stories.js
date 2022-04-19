import React from 'react';
import MoviesCardList from './MoviesCardList';

fetch('https://api.nomoreparties.co/beatfilm-movies',
  {
    method: 'GET',
  })
  .then(res => res.json())
  .catch((err) => console.log(err));


export default {
  title: 'Design System/Molecules/Movies Card List',
  component: MoviesCardList,
};

export const Default = (args) => <MoviesCardList {...args} />;
Default.storyName = 'Movies Card List';
Default.properties = {
  layout: 'centered',
};
Default.args = {
  movies: [],
}
