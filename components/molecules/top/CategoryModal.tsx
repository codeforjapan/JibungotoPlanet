import { FC, useMemo } from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import Average from 'components/atoms/emissions/Average'
import Cloud from 'components/atoms/emissions/Cloud'
import { useEmissionResult } from 'hooks/emission'
import ModalBase from '../modal/Base'
import CategoryTitle from '../questions/CategoryTitle'

type Props = {
  isOpen: boolean
  onClose: () => void
  modalCategory: Questions.QuestionCategory
}

const CategoryModal: FC<Props> = ({ isOpen, onClose, modalCategory }) => {
  const result = useEmissionResult(modalCategory)

  const selectedCategoryResult = useMemo(() => {
    return result[modalCategory]
  }, [result, modalCategory])

  const isEstimated = useMemo(() => {
    return selectedCategoryResult?.length > 1
  }, [selectedCategoryResult])

  const totalEmission = useMemo(() => {
    return Number(selectedCategoryResult?.find((r) => r.key === 'total')?.value)
  }, [selectedCategoryResult])

  const EstimatedResult: FC = () => {
    return (
      <>
        <Cloud category={modalCategory} amount={Math.round(totalEmission)} />
        <Average category={modalCategory} amount={totalEmission} />
      </>
    )
  }

  const categoryQuestionDesc = useMemo(() => {
    if (isEstimated) return <EstimatedResult />

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
            消費財やレジャーに関する質問が約8問あります。
            <br />
            <br />
            質問に答えると、あなたの1年間のカーボンフットプリント量が分かります。
          </>
        )

      default:
        return ''
    }
  }, [modalCategory, EstimatedResult])

  const linkPath = useMemo(() => {
    switch (modalCategory) {
      case 'mobility':
        return '/category/mobility/questions/mq1'
      case 'food':
        return '/category/food/questions/fd1'
      case 'housing':
        return '/category/housing/questions/hs1'
      case 'other':
        return '/category/other/questions/ot1'
      default:
        return ''
    }
  }, [modalCategory])

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <CategoryTitle category={modalCategory} />
      <Text my={6}>{categoryQuestionDesc}</Text>
      <Link href={linkPath}>
        <BasicButton width="full">
          {isEstimated ? 'もう一度やり直す' : '質問をはじめる'}
        </BasicButton>
      </Link>
    </ModalBase>
  )
}

export default CategoryModal
