import React from 'react';
import Technology from './Technology';
import { technologies } from '../../../../shared/constants/technologies';

export default {
  title: 'Design System/Atoms/Labels/Technology',
  component: Technology,
  argTypes: {
    label: {
      options: technologies,
      control: { type: 'radio' },
    },
  },
};

export const Default = (args) => <Technology {...args} />;
Default.storyName = 'Technology';

