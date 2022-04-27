import React from 'react';
import ProfileForm from './ProfileForm';

export default {
  title: 'Design System/Molecules/Forms/Profile Form',
  component: ProfileForm,
};

export const Default = () => <ProfileForm />;
Default.storyName = 'Profile Form';
Default.parameters = {
  layout: 'centered',
};
