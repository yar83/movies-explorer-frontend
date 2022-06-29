import React from 'react';
import IconButton from './IconButton';

export default {
  title: 'Design System/Atoms/Buttons/Icon Button',
  component: IconButton,
}

const Default = (args) => <IconButton {...args} />;

export const Close = Default.bind({});
Close.args = {
  view: 'close',
  glyph: 'white-cross',
};

export const Burger = Default.bind({});
Burger.args = {
  view: 'burger',
  glyph: 'burger',
};

export const Delete = Default.bind({});
Delete.args = {
  view: 'delete',
  glyph: 'white-cross',
};

export const Tick = Default.bind({});
Tick.args = {
  view: 'tick',
  glyph: 'tick'
};
