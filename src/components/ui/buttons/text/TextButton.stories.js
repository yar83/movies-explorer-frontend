import React from 'react';
import TextButton from './TextButton';
import { actionButtonText, moveButtonText } from '../../../../shared/constants/buttons/button-text';

const labels = Object.values(actionButtonText).concat(Object.values(moveButtonText));

export default {
  title: 'Design System/Atoms/Buttons/Text Button',
  component: TextButton,
  argTypes: {
    label: {
      options: labels,
      control: { type: 'select' },
    },
    color: {
      options: ['white', 'blue', 'red'],
      control: { type: 'select' },
    },
    fontSize: {
      options: ['10', '11', '12', '14', '18'],
      control: { type: 'select' },
    },
    fontWeight: {
      options: ['regular', 'medium'],
      control: {type: 'select' },
    },
    underScored: {
      options: [true, false],
      control: {type: 'radio'},
    },
  },
};

export const Default = (args) => <TextButton {...args} />;
Default.storyName = 'Text Button';
Default.args = {
  label: moveButtonText.back,
  color: 'red',
  fontSize: '14',
  underScored: false,
};
