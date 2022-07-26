import { FC, forwardRef, RefObject } from 'react'

import { useRouter } from 'next/router'
import { Flex, Grid, GridItem, Box } from '@chakra-ui/react'

import BasicButton from 'components/atoms/buttons/Basic'
import SocietyContentCatchPhrase from 'components/molecules/society/SocietyContentCatchPhrase/SocietyContentCatchPhrase'
import SocietyContentCategory from 'components/molecules/society/SocietyContentCategory/SocietyContentCategory'
import SocietyContentCategoryItem from 'components/molecules/society/SocietyContentCategoryItem/SocietyContentCategoryItem'
import SocietyContentTitle from 'components/molecules/society/SocietyContentTitle/SocietyContentTitle'

import styles from 'styles/Society.module.scss'

type Props = {
  className?: string
}

const SocietyDetailedSection: FC<Props> = (props) => {
  // Uncomment the below lines to have the event handler associated to the button
  //   const router = useRouter()

  //   const handleButtonClick = (event: MouseEvent) => {
  //     event.preventDefault()
  //     router.push('/')
  //   }

  return (
    <Flex direction={'column'} alignItems="center" width={'80%'}>
      <SocietyContentTitle className={styles['society__section__item-title']}>
        社会が変わる
      </SocietyContentTitle>
      <SocietyContentCatchPhrase className={styles['society__section__item']}>
        気候変動対策は、私たちひとりひとりが取り組むとともに、行政や企業が脱炭素型の製品やサービス、制度を拡充していくことが欠かせません。
      </SocietyContentCatchPhrase>
      <Grid className={styles['society__category__item']}>
        <GridItem>
          <SocietyContentCategory>
            国の政策により再生可能エネルギーが普及する
          </SocietyContentCategory>
        </GridItem>
        <GridItem>
          <div className={styles['society__category__item__arrow']}>
            <span>→</span>
          </div>
        </GridItem>
        <GridItem>
          <SocietyContentCategoryItem
            className={styles['society__category__item']}
          >
            <>
              <p>
                企業で使っている電力の
                <span
                  className={styles['society__category__item__highlighted']}
                >
                  再エネが10％増加
                </span>
                したら…
              </p>
              <p>日本の1人あたりカーボンフットプリントは</p>
              <p>
                <span className={styles['society__category__item__big-text']}>
                  150
                </span>
                kg CO₂e削減されます
              </p>
            </>
          </SocietyContentCategoryItem>
        </GridItem>
      </Grid>

      <Grid className={styles['society__category__item']}>
        <GridItem>
          <SocietyContentCategory>
            製造・流通・小売で脱炭素型のモノづくりと輸送、販売が進む
          </SocietyContentCategory>
        </GridItem>
        <GridItem>
          <div className={styles['society__category__item__arrow']}>
            <span>→</span>
          </div>
        </GridItem>
        <GridItem>
          <SocietyContentCategoryItem>
            <>
              <p>
                購入したモノを届けるまでの
                <span
                  className={styles['society__category__item__highlighted']}
                >
                  排出量が10％削減
                </span>
                したら…
              </p>
              <p>日本の1人あたりカーボンフットプリントは</p>
              <p>
                <span className={styles['society__category__item__big-text']}>
                  100
                </span>
                kg CO₂e削減されます
              </p>
            </>
          </SocietyContentCategoryItem>
        </GridItem>
      </Grid>
      <Grid className={styles['society__category__item']}>
        <GridItem>
          <SocietyContentCategory>
            自治体や政府が脱炭素型の行政サービスに切り替える
          </SocietyContentCategory>
        </GridItem>
        <GridItem>
          <div className={styles['society__category__item__arrow']}>
            <span>→</span>
          </div>
        </GridItem>
        <GridItem>
          <SocietyContentCategoryItem>
            <>
              <p>
                公共施設や行政サービスの
                <span
                  className={styles['society__category__item__highlighted']}
                >
                  排出量が10％削減
                </span>
                したら…
              </p>
              <p>日本の1人あたりカーボンフットプリントは</p>
              <p>
                <span className={styles['society__category__item__big-text']}>
                  130
                </span>
                kg CO₂e削減されます
              </p>
            </>
          </SocietyContentCategoryItem>
        </GridItem>
      </Grid>
      <BasicButton width={'min(400px, 80%)'}>
        {' '}
        {/*  onClick={handleButtonClick}> */}
        戻る
      </BasicButton>
    </Flex>
  )
}

export default SocietyDetailedSection
