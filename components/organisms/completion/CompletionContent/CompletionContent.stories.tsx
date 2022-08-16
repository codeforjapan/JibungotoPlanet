// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import CompletionContent from './CompletionContent'

export default {
  title: 'components / organisms / completion / CompletionContent',
  component: CompletionContent
} as ComponentMeta<typeof CompletionContent>

export const Index: ComponentStoryObj<typeof CompletionContent> = {
  args: {}
}
