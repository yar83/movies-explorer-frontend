import React from 'react';
import SignForm from './SignForm';
import SignUpFieldset from '../SignUpFieldset/SignUpFieldset';
import SignInFieldset from '../SignInFieldset/SignInFieldset';
import { actionButtonText } from '../../shared/constants/buttons/button-text'; 

export default {
  title: 'Design System/Molecules/Forms/Sign',
  component: SignForm,
};

const Default = (args) => <SignForm {...args} />;

export const SignUpForm = Default.bind({});
SignUpForm.storyName = 'SignUp Form';
SignUpForm.args = {
  buttonData: {
    view: 'blue-sign',
    label: actionButtonText.signup,
  },
  children: <SignUpFieldset />,
};

export const SingInForm = Default.bind({});
SingInForm.storyName = 'SignIn Form';
SingInForm.args = {
  buttonData: {
    view: 'blue-sign',
    label: actionButtonText.signin,
  },
  children: <SignInFieldset />,
};
