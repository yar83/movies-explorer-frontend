import React from 'react';
import SolidButton from './SolidButton';
import { actionButtonText } from '../../../../shared/constants/buttons/button-text';

export default {
  title: 'Design System/Atoms/Buttons/Solid Button',
  component: SolidButton,
}

const Default = (args) => <SolidButton {...args} />;

export const GreenSignin = Default.bind({});
GreenSignin.args = {
  view: 'green-signin',
  label: actionButtonText.signin,
}

export const BlueSearch = Default.bind({});
BlueSearch.args = {
  view: 'blue-search',
  label: actionButtonText.search,
};

export const BlueSignin = Default.bind({});
BlueSignin.args = {
  view: 'blue-signin',
  label: actionButtonText.signin,
};
