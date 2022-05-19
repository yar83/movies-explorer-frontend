import React from 'react';
import Preloader from './Preloader';

export default {
  title: 'Design System/Molecules/Preloader',
  component: Preloader,
};

export const Default = () => <Preloader />;
Default.storyName = 'Preloader';
Default.parameters = {
    layout: 'centered',
};
