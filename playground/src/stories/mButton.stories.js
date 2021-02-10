import React from 'react';

import { Button } from './myButton';

export default {
  title: 'myButton',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    labelColor: {control: 'color'},
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small button',
};
