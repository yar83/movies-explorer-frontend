import React from 'react';
import ProfileFieldset from './ProfileFieldset';

export default {
  title: 'Design System/Molecules/ProfileFieldset',
  component: ProfileFieldset,
};

export const Default = () => <ProfileFieldset />;
Default.storyName = 'Profile Fieldset';
Default.parameters = {
  layout: 'centered',
};
