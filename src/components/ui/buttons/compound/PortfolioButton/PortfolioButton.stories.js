import React from 'react';
import PortfolioButton from './PortfolioButton';
import { userBio } from '../../../../../shared/constants/userbio/userbio'; 

export default {
  title: 'Design System/Atoms/Buttons/Compound Buttons/Portfolio Button',
  component: PortfolioButton,
  argTypes: {
    label: {
      options: userBio.portfolio.map((el) => el.title),
      control: { type: 'radio' },
    },
  },
};

export const Default = (args) => <PortfolioButton {...args} />;
Default.storyName = 'Portfolio Button';
