import React from 'react';
import MovieDuration from './MovieDuration';

export default {
  title: 'Design System/Atoms/Icons/Movie Duration',
  component: MovieDuration,
  argTypes: {
    duration: {
      options: [9, 45, 77, 854],
      control: { type: 'radio' },
    },
  },
};

export const Movieduration = (args) => <MovieDuration {...args} />;
Movieduration.storyName = 'Movie Duration';
