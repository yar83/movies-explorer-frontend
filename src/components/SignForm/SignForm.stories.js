import React from 'react';
import SignForm from './SignForm';
import SignUpFieldset from '../SignUpFieldset/SignUpFieldset';
import { actionButtonText } from '../../shared/constants/buttons/button-text'; 

export default {
  title: 'Design System/Molecules/Forms/Sign',
  component: SignForm,
};

export const Default = (args) => <SignForm {...args} />;

export const SignUpForm = Default.bind({});
SignUpForm.storyName = 'SignUp Form';
SignUpForm.args = {
  buttonData: {
    view: 'blue-sign',
    label: actionButtonText.signup,
  },
  children: <SignUpFieldset />,
};
