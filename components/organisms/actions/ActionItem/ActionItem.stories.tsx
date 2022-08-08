// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import ActionItem from './ActionItem'

export default {
  title: 'components / organisms / actions / ActionItem',
  component: ActionItem
} as ComponentMeta<typeof ActionItem>

export const Index: ComponentStoryObj<typeof ActionItem> = {
  args: {
    amount: 90,
    implementationRate: 25,
    action: '食事を完全菜食（ヴィーガン）にする',
    description:
      '食事を完全菜食（ヴィーガン）にする。食事を完全菜食（ヴィーガン）にする。食事を完全菜食（ヴィーガン）にする。食事を完全菜食（ヴィーガン）にする'
  }
}
