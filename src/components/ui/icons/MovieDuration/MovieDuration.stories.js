import React from 'react';
import MovieDuration from './MovieDuration';

export default {
  title: 'Design System/Atoms/Icons/MovieDuration',
  component: MovieDuration,
};

const Template = (args) => <MovieDuration {...args} />;

export const lt10min = Template.bind({});
lt10min.args = {
  duration: 9,
};

export const lt1hour = Template.bind({});
lt1hour.args = {
  duration: 45,
};

export const lt10hour = Template.bind({});
lt10hour.args = {
  duration: 77,
};

export const mt10hour = Template.bind({});
mt10hour.args = {
  duration: 854,
};
