import React from 'react';
import MoviesCard from './MoviesCard';

export default {
  title: 'Design System/Molecules/Movies Card',
  component: MoviesCard,
};

export const Default = (args) => <MoviesCard {...args} />;
Default.storyName = 'Movies Card';
Default.args = {
  posterUrl: 'https://api.nomoreparties.co/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg',
  title: 'Длинный скучный фильм, который никто не будет смотреть дважды',
  duration: 77,
};
