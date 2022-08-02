import { Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import ModalBase from '../modal/Base'
import CategoryTitle from '../questions/CategoryTitle'

type Props = {
  isOpen: boolean
  onClose: () => void
  modalCategory?: Questions.QuestionCategory
}

const CategoryModal: FC<Props> = ({ isOpen, onClose, modalCategory }) => {
  const categoryQuestionDesc = useMemo(() => {
    switch (modalCategory) {
      case 'food':
        return (
          <>
            普段の食事に関する質問が約6問あります。
            <br />
            <br />
            質問に答えると、あなたの1年間のカーボンフットプリント量が分かります。
          </>
        )
      case 'mobility':
        return (
          <>
            普段の移動に関する質問が約7問あります。
            <br />
            <br />
            自家用車をお持ちの場合は、年間走行距離の分かるものがお手元にあるとスムーズに答えることができます。
          </>
        )
      case 'housing':
        return (
          <>
            住居に関する質問が約10問あります。
            <br />
            <br />
            電気の検針票やガスの使用量が分かるものがお手元にあるとスムーズに答えることができます。
          </>
        )
      case 'other':
        return (
          <>
            消費財やレジャーに関する質問が約5問あります。
            <br />
            <br />
            質問に答えると、あなたの1年間のカーボンフットプリント量が分かります。
          </>
        )

      default:
        return ''
    }
  }, [modalCategory])

  const linkPath = useMemo(() => {
    switch (modalCategory) {
      case 'mobility':
        return '/questions/mobility/mq1'

      default:
        return ''
    }
  }, [modalCategory])

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <CategoryTitle category={modalCategory} />
      <Text my={6}>{categoryQuestionDesc}</Text>
      <Link href={linkPath}>
        <BasicButton width="full">質問をはじめる</BasicButton>
      </Link>
    </ModalBase>
  )
}

export default CategoryModal
