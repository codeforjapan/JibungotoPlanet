import { FC, useMemo } from 'react'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'

type Props = {
  category: Questions.QuestionCategory
  onClick?: () => void
}

const CategoryButton: FC<Props> = ({ category, onClick }) => {
  const text = useMemo(() => {
    switch (category) {
      case 'mobility':
        return '移動'
      case 'food':
        return '食'
      case 'housing':
        return '住居'
      case 'other':
        return 'モノとサービス'
      default:
        return ''
    }
  }, [category])

  return (
    <Button
      background="white"
      borderWidth="1px"
      borderColor="gray.200"
      height="70px"
      width="100%"
      textAlign="left"
      onClick={onClick}
    >
      <Flex alignItems="center" width="100%">
        <Image
          width="40px"
          height="40px"
          src={`/icons/${category}.svg`}
          alt=""
        />
        <Text ml={3} color={`${category}.400`}>
          {text}
        </Text>
      </Flex>
      <Text fontWeight="bold">約10問</Text>
      <ChevronRightIcon fontSize="25px" />
    </Button>
  )
}

export default CategoryButton
