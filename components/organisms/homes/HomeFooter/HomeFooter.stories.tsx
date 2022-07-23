// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import HomeFooter from './HomeFooter'

export default {
  title: 'components / organisms / homes / HomeFooter',
  component: HomeFooter
} as ComponentMeta<typeof HomeFooter>

export const Index: ComponentStoryObj<typeof HomeFooter> = {
  args: {}
}
