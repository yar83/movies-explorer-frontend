import React from 'react';
import Header from './Header';

export default {
  title: 'Design System/Molecules/Header',
  component: Header,
};

export const Default = () => <Header />;
Default.storyName = 'Header';
Default.parameters = {
  layout: 'centered',
};
