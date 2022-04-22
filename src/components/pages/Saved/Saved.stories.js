import React from 'react';
import Saved from './Saved';

export default {
  title: 'Design System/Pages/Saved',
  component: Saved,
};

export const Default = () => <Saved />;
Default.storyName = 'Saved';
Default.parameters = {
  layout: 'centered',
};
