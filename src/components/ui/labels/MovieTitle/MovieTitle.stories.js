import React from 'react';
import MovieTitle from './MovieTitle';

export default {
  title: 'Design System/Atoms/Labels/Movie Title',
  component: MovieTitle,
};

export const mt = (args) => <MovieTitle {...args} />;
mt.args = {
  title: 'Киноальманах «100 лет дизайна»',
};
mt.storyName = 'Movie Title';
