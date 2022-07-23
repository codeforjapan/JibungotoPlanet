import { FC } from 'react'
import { ListItem, OrderedList } from '@chakra-ui/react'
import styles from 'styles/Home.module.scss'

type Props = {
  className?: string
}

const HomeCaptionSection: FC<Props> = (props) => {
  return (
    <OrderedList className={props.className}>
      <ListItem className={styles['home__caption-section__text']}>
        <a
          className={styles['home__caption-section__link']}
          href="https://www.data.jma.go.jp/cpdinfo/ipcc/ar6/index.html"
        >
          気候変動に関する政府間パネル(IPCC) (2022) 第6次評価報告書
        </a>
      </ListItem>
      <ListItem className={styles['home__caption-section__text']}>
        国立環境研究所 (2021)「
        <a
          className={styles['home__caption-section__link']}
          href="https://lifestyle.nies.go.jp/"
        >
          国内52都市における脱炭素型ライフスタイルの選択肢：カーボンフットプリントと削減効果データブック
        </a>
        」
        ※カーボンフットプリントの対象は二酸化炭素、メタン、亜酸化窒素、フッ素化ガスを含む温室効果ガス（単位はCO2換算kg）
      </ListItem>
      <ListItem className={styles['home__caption-section__text']}>
        WWF & Global Footprint Network (2019)「
        <a
          className={styles['home__caption-section__link']}
          href="https://www.wwf.or.jp/activities/data/20190726sustinable01.pdf"
        >
          環境と向き合うまちづくり
        </a>
        」
      </ListItem>
    </OrderedList>
  )
}

export default HomeCaptionSection
