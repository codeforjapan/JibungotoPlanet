import { FC, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Box, Heading, Spinner, Text } from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import Average from 'components/atoms/emissions/Average'
import Cloud from 'components/atoms/emissions/Cloud'
import DatasourceFooter from 'components/DatasourceFooter'
import QuestionResultGraph from 'components/molecules/result/ResultGraph'
import { useEmissionResult } from 'hooks/emission'
import { useProfile } from 'hooks/profile'

type Props = {
  category: Questions.QuestionCategory
}

export const MyResult: FC<Props> = ({ category }) => {
  const router = useRouter()
  const result = useEmissionResult(category)
  const { profile } = useProfile()

  const sortedResult = useMemo(() => {
    const r = result[category]
    return r
      ? r
          .filter((v) => v.key !== 'total' && v.value !== 0)
          .sort((a, b) => b.value - a.value)
      : []
  }, [result])

  const total = useMemo(() => {
    const r = result[category]
    return r ? Math.round(r.find((m) => m.key === 'total')?.value || 0) : 0
  }, [result])

  return (
    <>
      <Heading as="h2" fontSize="18px" textAlign="center" my={5}>
        あなたの1年間の
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
        カーボンフットプリント量を減らすために
        <br /> できることを考える
      </Text>

      <BasicButton
        width="full"
        isNext
        onClick={() => router.push(`/category/${category}/action`)}
      >
        脱炭素アクションをみる
      </BasicButton>

      <Box mt={8}>
        <DatasourceFooter />
      </Box>
    </>
  )
}

export default MyResult
