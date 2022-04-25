import React from 'react';
import ProfileFieldset from './ProfileFieldset';

export default {
  title: 'Design System/Molecules/Profile Fieldset',
  component: ProfileFieldset,
};

export const Default = () => <ProfileFieldset />;
Default.storyName = 'Profile Fieldset';
Default.parameters = {
  layout: 'centered',
};
