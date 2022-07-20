import { FC } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import EarthSmileIcon from '../icons/EarthSmile'

const Average: FC = () => {
  return (
    <Flex fontWeight="bold" justifyContent="center" alignItems="center" my={3}>
      <Box as="span" p={1} borderRadius={4} border="1px">
        日本平均より
      </Box>
      <Box mx={2}>20%少ない</Box>
      <Flex width={8} alignItems="center">
        <EarthSmileIcon />
      </Flex>
    </Flex>
  )
}

export default Average
