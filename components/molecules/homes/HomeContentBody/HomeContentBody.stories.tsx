// @ts-ignore
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import HomeContentBody from './HomeContentBody'

export default {
  title: 'components / atoms / buttons / HomeContentBody',
  component: HomeContentBody
} as ComponentMeta<typeof HomeContentBody>

export const Index: ComponentStoryObj<typeof HomeContentBody> = {
  args: {
    children: (
      <span>
        日本でも大型台風、集中豪雨、35℃以上の猛暑日などの異常気象が起きています。こうした気候変動による自然災害の増加、食料生産や経済システムへの悪影響を食い止めるには、産業革命後の気温上昇をできる限り1.5℃、少なくとも2℃未満に抑えることが必要です
        <sup>1</sup>。<br />
        この気候目標を達成するためには、2030年までに1人1年あたりのカーボンフットプリント量
        <small>（ひとりの暮らしで発生する炭素の排出量）</small>を
        <span style={{ backgroundColor: '#F1FF55' }}>
          約3トンCO₂e<small>（二酸化炭素に換算した温室効果ガスの排出量）</small>
          に減らす必要があります。
        </span>
        現在、日本人1人あたりの平均は約7トンCO₂eです<sup>2</sup>。
      </span>
    )
  }
}
