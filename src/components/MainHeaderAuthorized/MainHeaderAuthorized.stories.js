import React from 'react';
import MainHeaderAuthorized from './MainHeaderAuthorized';

export default {
  title: 'Design System/Molecules/Main Header Authorized',
  component: MainHeaderAuthorized,
};

export const Default = () => <MainHeaderAuthorized />;
Default.storyName = 'Main Header Authorized';
Default.parameters = {
  layout: 'centered',
};
