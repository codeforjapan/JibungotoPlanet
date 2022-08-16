import { FC, useMemo } from 'react'
import {
  Box,
  Heading,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Tr
} from '@chakra-ui/react'
import BasicButton from 'components/atoms/buttons/Basic'
import Average from 'components/atoms/emissions/Average'
import Cloud from 'components/atoms/emissions/Cloud'
import DatasourceFooter from 'components/DatasourceFooter'
import ShareSNS from 'components/molecules/result/ShareSNS/ShareSNS'
import { useEmissionResult } from 'hooks/emission'
import { useConvertSubdomainLabel } from 'hooks/result'
import { useRouter } from "next/router";

type Props = {
  category: Questions.QuestionCategory
}

const QuestionResultGraph: FC<Props> = ({ category }) => {
  const router = useRouter()
  const result = useEmissionResult(category)
  const subdomainConverter = useConvertSubdomainLabel()

  const sortedResult = useMemo(() => {
    const r = result[category]
    return r
      ? r.filter((v) => v.key !== 'total').sort((a, b) => b.value - a.value)
      : []
  }, [result])

  const maxValue = useMemo(() => {
    return sortedResult[0]?.value
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
      <Table variant="unstyled" fontSize="12px" my={8}>
        <Tbody>
          {sortedResult.map((item, index) => (
            <Tr key={index}>
              <Td
                wordBreak="keep-all"
                px={0}
                py={1}
                textAlign="left"
                minWidth="80px"
              >
                {subdomainConverter(item.key)}
              </Td>
              <Td width="100%" px={3} py={1}>
                <Box
                  width={`${(item.value / maxValue) * 100}%`}
                  height="30px"
                  backgroundColor={
                    index === 0 ? `${category}.400` : `${category}.200`
                  }
                  display="block"
                ></Box>
              </Td>
              <Td px={0} py={1} textAlign="right">
                {Math.round(item.value).toLocaleString()}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/*todo: urlの変更*/}
      <ShareSNS facebook={'/'} line={'/'} twitter={'/'} />

      <Text fontWeight="bold" textAlign="center" mt={10} mb={5}>
        カーボンフットプリント量を減らすために
        <br /> できることを考える
      </Text>

      <BasicButton width="full" isNext onClick={() => router.push(`/category/${category}/action`)}>
        脱炭素アクションをみる
      </BasicButton>

      <Box mt={8}>
        <DatasourceFooter />
      </Box>
    </>
  )
}

export default QuestionResultGraph
