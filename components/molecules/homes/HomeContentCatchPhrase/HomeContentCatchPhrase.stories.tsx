// @ts-ignore
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import HomeContentCatchPhrase from './HomeContentCatchPhrase'

export default {
  title: 'components / atoms / buttons / HomeContentCatchPhrase',
  component: HomeContentCatchPhrase
} as ComponentMeta<typeof HomeContentCatchPhrase>

export const Index: ComponentStoryObj<typeof HomeContentCatchPhrase> = {
  args: {
    children: (
      <span>
        まずはあなたの現状を知ることからはじめ、
        <br />
        ひとりひとりの具体的な気候変動対策を
      </span>
    )
  }
}
