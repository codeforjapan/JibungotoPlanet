// @ts-ignore
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import ActionChangeRateDialog from './ActionChangeRateDialog'

export default {
  title: 'components / organisms / actions / ActionChangeRateDialog',
  component: ActionChangeRateDialog
} as ComponentMeta<typeof ActionChangeRateDialog>

export const Index: ComponentStoryObj<typeof ActionChangeRateDialog> = {
  args: {
    isOpen: true,
    onClose: () => {},
    onClick: () => {},
    actionId: 1,
    actionIntensityRate: 0.5
  }
}
