import React from 'react';
import Register from './Register';

export default {
  title: 'Design System/Pages/Register',
  component: Register,
};

export const Default = () => <Register />;
Default.storyName = 'Register';
Default.parameters = {
  layout: 'centered',
};
