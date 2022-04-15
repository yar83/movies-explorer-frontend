import React from 'react';
import MainHeader from './MainHeader';

export default {
  title: 'Design System/Molecules/Main Header',
  component: MainHeader,
};

export const Default = () => <MainHeader />;
Default.storyName = 'Main Header';
Default.parameters = {
  layout: 'centered',
};
