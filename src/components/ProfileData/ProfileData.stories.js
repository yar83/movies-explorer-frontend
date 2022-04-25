import React from 'react';
import ProfileData from './ProfileData';

export default {
  title: 'Design System/Molecules/Profile Data',
  component: ProfileData,
};

export const Default = () => {
  return (
    <>
      <ProfileData />
    </>
  );
};

Default.storyName = 'Profile Data';
Default.parameters = {
  layout: 'centered',
};
