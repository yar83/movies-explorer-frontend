import React from 'react';
import TechnologyStack from './TechnologyStack';
import { technologies } from '../../shared/constants/technologies';

export default {
  title: 'Design System/Molecules/Technology Stack',
  component: TechnologyStack,
};

export const Default = (args) => <TechnologyStack {...args} />;
Default.args = {
  labels: technologies,
};
Default.storyName = 'Technology Stack';
