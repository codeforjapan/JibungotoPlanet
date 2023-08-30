import { FC } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

type Props = {
  className?: string
  category: Actions.ActionCategory
  value: number | string
}

const CardReductionEffect: FC<Props> = (props) => {
  return (
    <Box
      w="100%"
      padding="4px 0"
      bg={`${props.category}.600`}
      borderRadius="2px"
    >
      <Flex align="end" justify="center">
        <Text fontSize="14px" fontWeight="bold" mr="12px">
          削減効果
        </Text>
        <Text fontSize="24px" fontWeight="bold">
          {props.value}
        </Text>
        <Text fontSize="14px" fontWeight="bold">
          kg CO₂e
        </Text>
      </Flex>
    </Box>
  )
}

export default CardReductionEffect
