import React from 'react';
import Bio from './Bio';
import { userBio } from '../../shared/constants/userbio/userbio';

export default {
  title: 'Design System/Molecules/Bio',
  component: Bio,
};

export const Default = (args) => <Bio {...args} />;
Default.storyName = 'Bio';
Default.args = {
  ...userBio,
};
