import { NextPage } from 'next'
import QuestionContainer from 'components/organisms/questions/Container'
import TopCategories from 'components/organisms/top/Categories'

const TopPage: NextPage = () => {
  return (
    <QuestionContainer>
      <TopCategories />
    </QuestionContainer>
  )
}

export default TopPage
