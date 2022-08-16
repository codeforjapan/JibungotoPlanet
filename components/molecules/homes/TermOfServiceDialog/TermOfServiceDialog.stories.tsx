// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import TermOfServiceDialog from './TermOfServiceDialog'

export default {
  title: 'components / molecules / homes / TermOfServiceDialog',
  component: TermOfServiceDialog
} as ComponentMeta<typeof TermOfServiceDialog>

export const Index: ComponentStoryObj<typeof TermOfServiceDialog> = {
  args: {
    isOpen: true
  }
}
