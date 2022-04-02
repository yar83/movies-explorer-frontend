import React from 'react';
import ButtonAccount from './ButtonAccount';
import { moveButtonText } from '../../../../utils/constants/buttons/button-text';

export default {
  title: 'Design System/Atoms/Complex Buttons/Account Button',
  component: ButtonAccount,
};

const Template = (args) => <ButtonAccount {...args} />;

export const AB = Template.bind({});
AB.storyName = 'Account Button';
AB.args = {
  text: moveButtonText.account,
};
