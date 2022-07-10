// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import HomeContentTitle from './HomeContentTitle'

export default {
  title: 'components / atoms / buttons / HomeContentTitle',
  component: HomeContentTitle
} as ComponentMeta<typeof HomeContentTitle>

export const Index: ComponentStoryObj<typeof HomeContentTitle> = {
  args: {
    title: '1. 知る'
  }
}
