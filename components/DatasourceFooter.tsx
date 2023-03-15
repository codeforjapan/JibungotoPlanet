import { FC, useMemo } from 'react'
import { Box, Text, useDisclosure } from '@chakra-ui/react'
import BasicButton from './atoms/buttons/Basic'
import ModalBase from './molecules/modal/Base'

const DatasourceFooter: FC = () => {
  const year = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Box as="footer" textAlign="center" fontSize="12px">
        <Box
          as="span"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => {
            onOpen()
          }}
        >
          データソースについて
        </Box>{' '}
        | © {year} Code for Japan
        {/* <Box pt={2}> */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        {/* <a href="/api/auth/logout" style={{ textDecoration: 'underline' }}>
            ログアウトする
          </a>
        </Box> */}
      </Box>
      <ModalBase isOpen={isOpen} onClose={onClose} maxWidth="800px">
        <Box pt={10} pb={20} fontSize="14px">
          <Text as="h2" fontWeight="bold" fontSize="14px" mb={2}>
            ユーザーのカーボンフットプリント推計
          </Text>
          <Text as="p" mb={5}>
            選択式の設問に基づき、ユーザーの消費量と排出原単位が日本の平均からどの程度乖離しているかの推定を行っています。日本の平均フットプリントは、衣食住の家計消費を網羅したカーボンフットプリントのデータベース
            <sup>1,2</sup>
            を用いています。
            <br />
            ユーザーのカーボンフットプリント推計に用いたデータソースは次の通りです。
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            電力消費量の季節調整
          </Text>
          <Text as="p" mb={5}>
            総務省統計局. 2015. 電気使用量の推移 平成27年2月27日より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            ガス消費量の季節調整
          </Text>
          <Text as="p" mb={5}>
            環境省. 2015. 家庭からの二酸化炭素排出量の推計に係る実態調査
            全国試験調査 平成26年10月～平成27年9月より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            ガスと灯油の熱量換算
          </Text>
          <Text as="p" mb={5}>
            資源エネルギー庁. 2006.
            市町村別エネルギー消費統計作成のためのガイドラインより算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            平均世帯人数
          </Text>
          <Text as="p" mb={5}>
            総務省統計局. 2015. 国勢調査より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            自動車1台当たりの乗車人数
          </Text>
          <Text as="p" mb={5}>
            国土交通省. 2015. 全国道路・街路交通情勢調査
            自動車起終点調査（OD調査）より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            食品摂取量（カロリー）
          </Text>
          <Text as="p" mb={5}>
            農林水産省. n.d. 食事バランスガイド. 厚生労働省. 2015.
            国民健康・栄養調査より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            食品ロス（食べ残し・直接廃棄）の頻度と発生量
          </Text>
          <Text as="p" mb={5}>
            東京都環境局. 2017. 家庭系食品ロス発生要因等調査より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            食品ロス（食べ残し・直接廃棄）の割合
          </Text>
          <Text as="p" mb={5}>
            農林水産省. 2016. 食品ロス統計調査報告（世帯調査）より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            肉類・魚介類の摂取頻度
          </Text>
          <Text as="p" mb={5}>
            日本食肉消費総合センター. 2020. 食肉に関する意識調査報告書より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            乳製品・卵の摂取頻度
          </Text>
          <Text as="p" mb={5}>
            農畜産業振興機構. 2025. 牛乳・乳製品の消費動向に関する調査.
            一般社団法人JC総研. 2015. たまごの消費行動調査の概要より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            飲酒の頻度
          </Text>
          <Text as="p" mb={5}>
            国税庁. n.d. お酒に関するアンケートの集計より算出
          </Text>

          <Text as="p" mb={2}>
            特に記載が無いものは以下のデータソース を用いています。
          </Text>
          <Box as="ol" pl={5}>
            <li>
              <Text as="p" mb={2}>
                Ryu Koide et al. 2021. Exploring Carbon Footprint Reduction
                Pathways through Urban Lifestyle Changes: A Practical Approach
                Applied to Japanese Cities. Environmental Research Letters. 16
                084001
              </Text>
            </li>
            <li>
              <Text as="p" mb={2}>
                国立環境研究所. 2021.
                国内52都市における脱炭素型ライフスタイルの選択肢：カーボンフットプリントと削減効果データブック
              </Text>
            </li>
          </Box>

          <Text as="h2" fontWeight="bold" fontSize="14px" mb={2} mt={10}>
            脱炭素アクションのカーボンフットプリント削減効果推計
          </Text>

          <Text as="p" mb={5}>
            カーボンフットプリントの推計結果に基づき、ユーザーのライフスタイルの特徴を踏まえた脱炭素アクションのカーボンフットプリント削減効果を推計しています。
            <br />
            <br />
            脱炭素アクションは、データソース<sup>1,2</sup>
            で文献レビューに基づき特定された65の脱炭素型ライフスタイル転換の選択肢の中から、主要な選択肢を抜粋し、類似した選択肢は平均値を取ることで抽出したアクションが含まれています。削減効果の推定にあたり、ユーザーのカーボンフットプリント推計結果をベースラインとして用いた上で、Webツールの実装用に簡易化した削減効果のパラメーターに基づき計算を行なっています。
            <br />
            <br />
            削減効果は、それぞれの脱炭素アクションを最大限取り入れた場合を実施率100%とし、ユーザーが選択した実施率に応じて、カーボンフットプリントの最大削減効果に実施率を乗ずることにより算出しています。
          </Text>

          <Text as="p" mb={2}>
            脱炭素アクションについての詳細は次の文献を参照ください。
          </Text>
          <Box as="ol" pl={5} mb={5}>
            <li>
              <Text as="p" mb={2}>
                Ryu Koide et al. 2021. Exploring Carbon Footprint Reduction
                Pathways through Urban Lifestyle Changes: A Practical Approach
                Applied to Japanese Cities. Environmental Research Letters. 16
                084001
              </Text>
            </li>
            <li>
              <Text as="p" mb={2}>
                国立環境研究所. 2021.
                国内52都市における脱炭素型ライフスタイルの選択肢：カーボンフットプリントと削減効果データブック
              </Text>
            </li>
          </Box>

          <Text as="p" mb={5}>
            エンドロールに表示される社会全体の取り組みについての削減効果は、データソース
            における日本平均のカーボンフットプリントデータに基づき、次のように推計を行っています。削減効果は、1人1年あたりに換算して表示しています。
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            再生可能エネルギーの普及
          </Text>
          <Text as="p" mb={5}>
            家庭で使用される電力を除き、家計が消費するすべての製品やサービスの供給段階で使用される電力のうち再生可能エネルギーの割合が10％増加すると仮定
            <br />
            各部門における電力由来の温室効果ガス排出量はデータソース
            <sup>3,4</sup>より算出
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            脱炭素型のモノづくり
          </Text>
          <Text as="p" mb={5}>
            家計が購入する消費財（食品を除く）および移動手段の供給段階（原材料採取、製造、組立、輸送、流通、小売）におけるカーボンフットプリントが10%削減されると仮定
          </Text>

          <Text as="h3" fontWeight="bold" mb={2}>
            自治体や政府の脱炭素型サービス
          </Text>
          <Text as="p" mb={5}>
            データソース<sup>3,4,5</sup>
            より算出した政府消費（中央政府、地方政府）のカーボンフットプリントが10%削減されると仮定
          </Text>

          <Box as="ol" pl={5} start={3}>
            <li>
              <Text as="p" mb={2}>
                南斉規介. 2019. 産業連関表による環境負荷原単位データブック(3EID)
                国立環境研究所
              </Text>
            </li>
            <li>
              <Text as="p" mb={2}>
                Keisuke Nansai et al. 2020. Carbon footprint of Japanese health
                care services from 2011 to 2015. Resources, Conservation &
                Recycling, 152, 104525.
              </Text>
            </li>
            <li>
              <Text as="p" mb={2}>
                総務省. 2015. 平成27年産業連関表
              </Text>
            </li>
          </Box>
        </Box>

        <Box
          background="white"
          position="absolute"
          bottom={0}
          left={0}
          py={2}
          boxShadow="0 -1px 2px 0 grey"
          width="100%"
          textAlign="center"
          borderRadius="0 0 10px 10px"
        >
          <BasicButton width="300px" size="sm" onClick={() => onClose()}>
            閉じる
          </BasicButton>
        </Box>
      </ModalBase>
    </>
  )
}

export default DatasourceFooter
