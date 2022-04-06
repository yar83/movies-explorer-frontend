import React from 'react';
import Movie from './Movie';

export default {
  title: 'Design System/Molecules/Movie',
  component: Movie,
};

export const Default = (args) => <Movie {...args} />;
Default.storyName = 'Movie';
Default.args = {
  posterUrl: 'https://api.nomoreparties.co/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg',
  title: 'Длинный скучный фильм, который никто не будет смотреть дважды',
  duration: 77,
};
