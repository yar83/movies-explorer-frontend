import React from 'react';
import FilterCheckbox from './FilterCheckbox';
import { checkBoxCaptions } from '../../shared/constants/captions/captions';

export default {
  title: 'Design System/Molecules/Filter Checkbox',
  component: FilterCheckbox,
};

export const Default = (args) => <FilterCheckbox {...args} />;
Default.storyName = 'Filter Checkbox';
Default.args = {
  label: checkBoxCaptions.shortMeters,
};
