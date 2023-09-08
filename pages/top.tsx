import { NextPage } from 'next'
import { Box, Spinner } from '@chakra-ui/react'
import ActionsContent from 'components/organisms/actions/ActionsContent/ActionsContent'
import QuestionContainer from 'components/organisms/questions/Container'
import ActionsContainer from 'components/organisms/top/ActionsContainer'
import TopCategories from 'components/organisms/top/Categories'
import TopFooter from 'components/organisms/top/Footer'
import { useActions, useHasActions } from 'hooks/actions'

const categories: Questions.QuestionCategory[] = [
  'housing',
  'food',
  'mobility',
  'other'
]

const getCategoryTitle = (category: Questions.QuestionCategory) => {
  switch (category) {
    case 'mobility':
      return '移動について'
    case 'food':
      return '食について'
    case 'housing':
      return '住居について'
    case 'other':
      return 'モノとサービスについて'
    default:
      return ''
  }
}

const TopPage: NextPage = () => {
  const hasActions = useHasActions()

  return (
    <>
      <QuestionContainer>
        <TopCategories />
        {!hasActions && <TopFooter />}
      </QuestionContainer>
      {hasActions && (
        <ActionsContainer>
          <ActionsContent />
          <TopFooter />
        </ActionsContainer>
      )}
    </>
  )
}

export default TopPage
