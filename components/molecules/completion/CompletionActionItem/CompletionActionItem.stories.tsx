// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import CompletionActionItem from 'components/molecules/completion/CompletionActionItem/CompletionActionItem'

export default {
  title: 'components / molecules / completion / CompletionActionItem',
  component: CompletionActionItem
} as ComponentMeta<typeof CompletionActionItem>

export const Index: ComponentStoryObj<typeof CompletionActionItem> = {
  args: {
    amount: 40,
    implementationRate: 25,
    action: 'バランスの取れた食事にする',
    description: '食事全体を、食事バランスガイドで推奨される健康的な食生活のバランスに整える。'
  }
}
