// @ts-ignore
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import ActionItem from './ActionItem'

export default {
  title: 'components / organisms / actions / ActionItem',
  component: ActionItem
} as ComponentMeta<typeof ActionItem>

export const Index: ComponentStoryObj<typeof ActionItem> = {
  args: {
    action: {
      id: 1,
      domain: 'mobility',
      option: 'telework',
      category: 'mobility',
      label: 'テレワーク',
      description: '通勤目的の移動をゼロにする',
      reductionEffect: 346,
      actionIntensityRate: {
        range: [0, 1],
        value: 0,
        defaultValue: 1,
        option: 'telework'
      },
      checked: false
    }
  }
}
