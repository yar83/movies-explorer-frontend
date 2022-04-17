import React from 'react';
import Portfolio from './Portfolio';
import { userBio } from '../../shared/constants/userbio/userbio';

export default {
  title: 'Design System/Molecules/Portfolio',
  component: Portfolio,
};

export const Default = (args) => <Portfolio {...args} />;
Default.storyName = 'Portfolio';
Default.args = {
  portfolio: userBio.portfolio,
};
