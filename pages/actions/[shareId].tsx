import { ParsedUrlQuery } from 'querystring'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import DatasourceFooter from 'components/DatasourceFooter'
import ActionsContent from 'components/organisms/actions/ActionsContent/ActionsContent'
import QuestionContainer from 'components/organisms/questions/Container'
import {useEmissionResult} from "../../hooks/emission";

interface Params extends ParsedUrlQuery {
  shareId: string
}

const ActionsSharePage: NextPage<Params> = ({ shareId }) => {
  const router = useRouter()
  const emission = useEmissionResult('all', shareId)

  return (
    <QuestionContainer title="わたしの脱炭素アクション">
      <ActionsContent shareId={shareId} emission={emission} />
      <Box pt={8}>
        <BasicButton
          isNext
          onClick={() => router.push(process.env.NEXT_PUBLIC_SHARE_URL ?? '/')}
          width="full"
        >
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
