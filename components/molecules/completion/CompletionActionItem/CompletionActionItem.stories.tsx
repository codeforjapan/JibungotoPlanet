// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import CompletionActionItem from 'components/molecules/completion/CompletionActionItem/CompletionActionItem'

export default {
  title: 'components / molecules / completion / CompletionActionItem',
  component: CompletionActionItem
} as ComponentMeta<typeof CompletionActionItem>

export const Index: ComponentStoryObj<typeof CompletionActionItem> = {
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
