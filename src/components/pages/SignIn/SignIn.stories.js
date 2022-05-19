import React from 'react';
import SignIn from './SignIn';

export default {
  title: 'Design System/Pages/SignIn',
  component: SignIn,
};

export const Default = () => <SignIn />;
Default.storyName = 'SignIn';
Default.parameters = {
  layout: 'centered',
};
