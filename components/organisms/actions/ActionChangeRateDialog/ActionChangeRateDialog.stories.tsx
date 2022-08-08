// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import ActionChangeRateDialog from './ActionChangeRateDialog'

export default {
  title: 'components / organisms / actions / ActionChangeRateDialog',
  component: ActionChangeRateDialog
} as ComponentMeta<typeof ActionChangeRateDialog>

export const Index: ComponentStoryObj<typeof ActionChangeRateDialog> = {
  args: {
    amount: 90,
    implementationRate: 25,
    action: '食事を完全菜食（ヴィーガン）にする',
    description:
      '食事を完全菜食（ヴィーガン）にする。食事を完全菜食（ヴィーガン）にする。食事を完全菜食（ヴィーガン）にする。食事を完全菜食（ヴィーガン）にする'
  }
}
