import React from 'react';
import Button from './Button';
import { actionButtonText, moveButtonText } from '../../../utils/constants/buttons/button-text';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Signin = Template.bind({});
Signin.args = {
  type: 'signin',
  text: actionButtonText.signin,
};

export const More = Template.bind({});
More.args = {
  type: 'more',
  text: actionButtonText.more,
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  text: actionButtonText.search,
};

export const Signup = Template.bind({});
Signup.args = {
  type: 'signup',
  text: actionButtonText.signup,
};

export const Enter = Template.bind({});
Enter.args = {
  type: 'enter',
  text: moveButtonText.enter,
};

export const PlainEnter = Template.bind({});
PlainEnter.args = {
  type: 'plain-enter',
  text: moveButtonText.enter,
}

export const PlainRegister = Template.bind({});
PlainRegister.args = {
  type: 'plain-register',
  text: moveButtonText.register,
}

export const PlainRegisterHeader = Template.bind({});
PlainRegisterHeader.args = {
  type: 'plain-register-header',
  text: moveButtonText.register,
}

export const PlainBack = Template.bind({});
PlainBack.args = {
  type: 'plain-back',
  text: moveButtonText.back,
}

export const PlainEdit = Template.bind({});
PlainEdit.args = {
  type: 'plain-edit',
  text: actionButtonText.edit,
}

export const PlainSignout = Template.bind({});
PlainSignout.args = {
  type: 'plain-signout',
  text: actionButtonText.signout,
}

export const Save = Template.bind({});
Save.args = {
  type: 'save',
  text: actionButtonText.save,
};

export const Delete = Template.bind({});
Delete.args = {
  type: 'delete',
}

export const Burger = Template.bind({});
Burger.args = {
  type: 'burger',
}
