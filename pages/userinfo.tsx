import { NextPage } from 'next'
import UserinfoForm from 'components/molecules/questions/UserinfoForm'
import QuestionContainer from 'components/organisms/questions/Container'

const UserInfo: NextPage = () => {
  return (
    <QuestionContainer title="基本情報">
      <UserinfoForm />
    </QuestionContainer>
  )
}

export default UserInfo
