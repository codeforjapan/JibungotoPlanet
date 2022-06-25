// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Basic from './Basic';

export default {
  title: 'components / atoms / buttons / Basic',
  component: Basic,
} as ComponentMeta<typeof Basic>;

export const Index: ComponentStoryObj<typeof Basic> = {
  args: {
    children: <span>children</span>,
    isNext: true,
    theme: 'brandPrimary',
    themeIntensity: '400'
  },
};
