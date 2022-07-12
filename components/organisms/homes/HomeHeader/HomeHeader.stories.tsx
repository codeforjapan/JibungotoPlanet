// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import HomeHeader from './HomeHeader'

export default {
  title: 'components / atoms / buttons / HomeHeader',
  component: HomeHeader
} as ComponentMeta<typeof HomeHeader>

export const Index: ComponentStoryObj<typeof HomeHeader> = {
  args: {}
}
