import { ParsedUrlQuery } from 'querystring'
import { useMemo } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box, Heading, Spinner, Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import Average from 'components/atoms/emissions/Average'
import Cloud from 'components/atoms/emissions/Cloud'
import DatasourceFooter from 'components/DatasourceFooter'
import QuestionResultGraph from 'components/molecules/result/ResultGraph'
import { useEmissionResult } from 'hooks/emission'

interface Params extends ParsedUrlQuery {
  category: Questions.QuestionCategory
  shareId: string
}

const SharedResult: NextPage<Params> = ({ category, shareId }) => {
  const router = useRouter()
  const result = useEmissionResult(category, shareId)

  const sortedResult = useMemo(() => {
    const r = result[category]
    return r
      ? r.filter((v) => v.key !== 'total').sort((a, b) => b.value - a.value)
      : []
  }, [result])

  const total = useMemo(() => {
    const r = result[category]
    return r ? Math.round(r.find((m) => m.key === 'total')?.value || 0) : 0
  }, [result])

  return (
    <>
      <Heading as="h2" fontSize="18px" textAlign="center" my={5}>
        わたしの1年間の
        <br />
        カーボンフットプリント量
      </Heading>

      <Cloud amount={total} category={category} />
      <Average amount={total} category={category} />

      {result.loading && (
        <Box textAlign="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color={`${category}.400`}
            size="xl"
          />
        </Box>
      )}

      <QuestionResultGraph category={category} sortedResult={sortedResult} />

      <Text fontWeight="bold" textAlign="center" mt={10} mb={5}>
        自分もやってみる
      </Text>

      <BasicButton width="full" isNext onClick={() => router.push(`/`)}>
        はじめる
      </BasicButton>

      <Box mt={8}>
        <DatasourceFooter />
      </Box>
    </>
  )
}

export default SharedResult
