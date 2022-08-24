import { FC, useMemo } from 'react'
import { Box, Table, Tbody, Td, Tr } from '@chakra-ui/react'
import { useConvertSubdomainLabel } from 'hooks/result'
import { roundCo2Amount } from 'utils/calculate'

type Props = {
  category: Questions.QuestionCategory
  sortedResult: {
    key: string
    value: number
  }[]
}

const QuestionResultGraph: FC<Props> = ({ category, sortedResult }) => {
  const subdomainConverter = useConvertSubdomainLabel()

  const maxValue = useMemo(() => {
    return sortedResult[0]?.value
  }, [sortedResult])

  return (
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
              {roundCo2Amount(item.value).toLocaleString()}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default QuestionResultGraph
