import React from 'react';
import icons from '../../../shared/images/icons/index';
import Icon from './Icon';

export default {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    glyph: {
      options: Object.keys(icons),
      control: {
        type: 'radio'
      },
    },
  },
};

export const IconStory = (args) => <Icon {...args} />;
IconStory.args = {
  glyph: 'burger',
};
IconStory.storyName = 'Icon';
