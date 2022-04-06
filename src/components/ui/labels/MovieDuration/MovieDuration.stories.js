import React from 'react';
import MovieDuration from './MovieDuration';

export default {
  title: 'Design System/Atoms/Labels/Movie Duration',
  component: MovieDuration,
  argTypes: {
    duration: {
      options: ['12', '77', '742', '1024'],
      control: { type: 'radio' },
    },
  },
};

export const duration = (args) => <MovieDuration {...args} />;
duration.storyName = 'Movie Duration';
