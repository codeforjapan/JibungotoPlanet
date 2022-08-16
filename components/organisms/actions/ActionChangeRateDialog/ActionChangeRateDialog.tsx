import { FC, useState } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import ActionRateSlider from 'components/molecules/actions/ActionRateSlider/ActionRateSlider'
import ModalBase from 'components/molecules/modal/Base'

type Props = {
  isOpen: boolean
  onClose: { (): void }
  onClick: { (arg: number): void }
  action: {
    id: number
    intensityRate: number
  }
}

const ActionChangeRateDialog: FC<Props> = (props) => {
  const [rate, setRate] = useState<number>(props.action.intensityRate)

  return (
    <ModalBase isOpen={props.isOpen} onClose={props.onClose}>
      <Heading as="h3" fontSize="16px" textAlign="center" my={5}>
        実施率を変更する
      </Heading>
      <Text py={6}>
        ライフスタイルを一気に変えることはできなくても、週に1回ならはじめられそう。
        実施率を調整して、できることから行動にしてみましょう。
      </Text>
      <Box py={12} my={3}>
        <ActionRateSlider rate={rate} onChange={setRate} />
      </Box>
      <BasicButton width="full" onClick={() => props.onClick(rate)}>
        変更を保存する
      </BasicButton>
    </ModalBase>
  )
}

export default ActionChangeRateDialog
