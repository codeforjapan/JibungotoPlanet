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

  const questionNum = useMemo(() => {
    switch (category) {
      case 'mobility':
        return '7'
      case 'food':
        return '6'
      case 'housing':
        return '10'
      case 'other':
        return '8'
      default:
        return ''
    }
  }, [category])

  return (
    <Button
      background={'white'}
      borderWidth="1px"
      borderColor="gray.200"
      height={{ base: '70px', md: '160px' }}
      width="100%"
      textAlign={{ base: 'left', md: 'center' }}
      onClick={onClick}
    >
      <Flex
        justifyContent={{ base: 'space-between' }}
        alignItems="center"
        width="100%"
      >
        <Flex
          width="100%"
          alignItems="center"
          justifyContent={{ base: 'space-between', md: 'center' }}
          flexWrap="wrap"
        >
          <Flex alignItems="center" flexWrap="wrap" justifyContent="center">
            <Image
              width={40}
              height={40}
              src={`/icons/${category}.svg`}
              alt={`${category} icons`}
              style={{
                height: 'auto'
              }}
            />
            <Text
              ml={{ base: 3, md: 0 }}
              mt={{ md: 2 }}
              color={`${category}.400`}
              width={{ md: '100%' }}
            >
              {text}
            </Text>
          </Flex>
          <Text fontWeight="bold" width={{ md: '100%' }} mt={{ md: 5 }}>
            約{questionNum}問
          </Text>
        </Flex>
        <ChevronRightIcon fontSize="25px" />
      </Flex>
    </Button>
  )
}

export default CategoryButton
