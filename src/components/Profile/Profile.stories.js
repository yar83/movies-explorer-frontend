import React from 'react';
import Profile from '../Profile/Profile';

export default {
  title: 'Design System/Molecules/Profile',
  component: Profile,
};

export const Default = () => <Profile />;
Default.storyName = 'Profile';
Default.parameters = {
  layout: 'centered',
};
