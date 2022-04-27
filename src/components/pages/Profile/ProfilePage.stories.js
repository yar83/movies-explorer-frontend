import React from 'react';
import ProfilePage from './ProfilePage';

export default {
  title: 'Design System/Pages/Profile Page',
  component: ProfilePage,
};

export const Default = () => <ProfilePage />;
Default.storyName = 'Profile Page';
Default.parameters = {
  layout: 'centered',
};
