import { FC } from 'react'
import { Box, Heading } from '@chakra-ui/react'

const ActionHeader: FC = () => {
  return (
    <>
      <Heading as="h2" fontSize="18px" textAlign="center" my={5}>
        あなたにしかできない
        <br />
        脱炭素アクションを選ぶ
      </Heading>
      <Box>
        あなたの診断結果に基づいた、削減効果の高いアクションです。
        気候変動への影響を小さくするために、できることからはじめましょう。
      </Box>
      <Box pt={3}>
        行動の難易度に合わせて、あらかじめ実施率を設定しています。
      </Box>
    </>
  )
}

export default ActionHeader
