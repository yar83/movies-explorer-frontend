import React from 'react';
import MoviePoster from './MoviePoster';

export default {
  title: 'Design System/Atoms/Movie Poster',
  component: MoviePoster,
};

export const Default = (args) => <MoviePoster {...args} />;
Default.storyName = 'Movie Poster';
Default.args = {
  url: 'https://api.nomoreparties.co/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg',
};
