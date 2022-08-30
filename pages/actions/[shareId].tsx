import { ParsedUrlQuery } from 'querystring'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import DatasourceFooter from 'components/DatasourceFooter'
import ActionsContent from 'components/organisms/actions/ActionsContent/ActionsContent'
import QuestionContainer from 'components/organisms/questions/Container'

interface Params extends ParsedUrlQuery {
  shareId: string
}

const ActionsSharePage: NextPage<Params> = ({ shareId }) => {
  const router = useRouter()

  return (
    <QuestionContainer title="わたしの脱炭素アクション">
      <ActionsContent shareId={shareId} />
      <Box pt={8}>
        <BasicButton isNext onClick={() => router.push('/')} width="full">
          じぶんもやってみる
        </BasicButton>
      </Box>
      <Box mt={6}>
        <DatasourceFooter />
      </Box>
    </QuestionContainer>
  )
}

export const getServerSideProps: ({ params }: { params: any }) => {
  props: {
    shareId: string
  }
} = ({ params }) => {
  return {
    props: {
      shareId: params?.shareId || ''
    }
  }
}

export default ActionsSharePage
