import { FC, useMemo } from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import CardReductionEffect from 'components/molecules/action/CardReductionEffect/CardReductionEffect'
import { roundCo2Amount } from 'utils/calculate'

type Props = {
  actions: Actions.Action[]
  category: Actions.ActionCategory
}

const ActionHeader: FC<Props> = (props) => {
  const totalIntensityRate = useMemo(() => {
    let total = 0
    props.actions.forEach((action) => {
      if (action.checked) {
        total +=
          roundCo2Amount(
            action.reductionEffect * (action.actionIntensityRate?.value || 1)
          ) || 0
      }
    })
    return total
  }, [props.actions])

  return (
    <>
      <Heading as="h2" fontSize="18px">
        今日から、日々の生活で取り組めそうなものを選んでみよう。
      </Heading>
      <Text fontSize="14px" mt="16px">
        すでに取り組んでいるアクションがある場合は、頻度を増やしてみましょう。
      </Text>

      <Box p="30px 24px" bg="#F8F8F8" mt="32px">
        <VStack spacing="16px">
          <Text fontSize="14px" fontWeight="bold" letterSpacing="0.7px">
            カーボンフットプリントの削減効果
          </Text>
          <Text fontSize="14px">
            そのアクションを行うことによる、1年あたりのカーボンフットプリントの最大削減効果を表しています。
          </Text>
          <Text fontSize="14px">
            削減効果が大きければ大きいほどカーボンフットプリント量を減らすことにつながります。
          </Text>
          <CardReductionEffect value={'XX'} category={props.category} />
        </VStack>
      </Box>
    </>
  )
}

export default ActionHeader
