import React from 'react';
import GhostButton from './GhostButton';
import { actionButtonText, moveButtonText } from '../../../../shared/constants/buttons/button-text';

const labels = Object.values(actionButtonText).concat(Object.values(moveButtonText));

export default {
  title: 'Design System/Atoms/Buttons/Ghost Button',
  component: GhostButton,
  argTypes: {
    label: {
      options: labels,
      control: { type: 'select' },
    },
  },
};

export const butt = (args) => <GhostButton {...args} />;
butt.storyName = 'Ghost Button';
