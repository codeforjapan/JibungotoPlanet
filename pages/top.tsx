import { NextPage } from 'next'
import ActionsContent from 'components/organisms/actions/ActionsContent/ActionsContent'
import QuestionContainer from 'components/organisms/questions/Container'
import ActionsContainer from 'components/organisms/top/ActionsContainer'
import TopCategories from 'components/organisms/top/Categories'
import TopFooter from 'components/organisms/top/Footer'

const TopPage: NextPage = () => {
  return (
    <>
      <QuestionContainer>
        <TopCategories />
      </QuestionContainer>
      <ActionsContainer>
        <ActionsContent />
        <TopFooter />
      </ActionsContainer>
    </>
  )
}

export default TopPage
