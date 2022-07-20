import { FC, useMemo } from 'react'
import {
  Box,
  Container,
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
import { useEmissionResult } from 'hooks/emission'
import { useConvertSubdomainLabel } from 'hooks/result'
import ShareSNS from './ShareSNS'

const QuestionResultGraph: FC = () => {
  const { mobility, loading } = useEmissionResult()
  const subdomainConverter = useConvertSubdomainLabel()

  const sortedResult = useMemo(() => {
    return mobility
      .filter((v) => v.key !== 'total')
      .sort((a, b) => b.value - a.value)
  }, [mobility])

  const maxValue = useMemo(() => {
    return sortedResult[0]?.value
  }, [mobility])

  const total = useMemo(() => {
    return Math.round(mobility.find((m) => m.key === 'total')?.value || 0)
  }, [mobility])

  return (
    <>
      <Heading as="h2" fontSize="18px" textAlign="center" my={5}>
        あなたの1年間の
        <br />
        カーボンフットプリント量
      </Heading>

      <Cloud amount={total} category="mobility"></Cloud>
      <Average />

      {loading && (
        <Box textAlign="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color={`mobility.400`}
            size="xl"
          />
        </Box>
      )}
      <Table variant="unstyled" fontSize="12px" my={8}>
        <Tbody>
          {sortedResult.map((item, index) => (
            <Tr key={index}>
              <Td wordBreak="keep-all" px={0} py={1} textAlign="left">
                {subdomainConverter(item.key)}
              </Td>
              <Td width="100%" px={3} py={1}>
                <Box
                  width={`${(item.value / maxValue) * 100}%`}
                  height="30px"
                  backgroundColor={
                    index === 0 ? 'mobility.400' : 'mobility.200'
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

      <ShareSNS />

      <Text fontWeight="bold" textAlign="center" mt={10} mb={5}>
        カーボンフットプリント量を減らすためにできることを考える
      </Text>

      <BasicButton width="full" isNext>
        脱炭素アクションをみる
      </BasicButton>

      <Box mt={8}>
        <DatasourceFooter />
      </Box>
    </>
  )
}

export default QuestionResultGraph
