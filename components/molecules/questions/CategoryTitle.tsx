import { FC, ReactNode, useMemo } from 'react'
import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/react'

type Props = {
  category?: Questions.QuestionCategory
  title?: string | ReactNode
}

const CategoryTitle: FC<Props> = ({ category, title }) => {
  const text = useMemo(() => {
    //  todo parserを書いて改行に対応するようにする
    if (title) return title
    switch (category) {
      case 'mobility':
        return '移動について'
      case 'food':
        return '食について'
      case 'housing':
        return '住居について'
      case 'other':
        return 'モノとサービスについて'
      default:
        return (
          <>
            あなたの1年間の
            <br /> カーボンフットプリント量
          </>
        )
    }
  }, [category])

  return (
    <Box
      color={category && `${category}.400`}
      textAlign="center"
      fontSize="20px"
      fontWeight="bold"
      pt={3}
    >
      {category && (
        <Flex alignItems="center" flexWrap="wrap" justifyContent="center">
          <Image
            src={`/icons/${category}.svg`}
            width={70}
            height={70}
            alt={`${category} icons`}
          />
        </Flex>
      )}
      <p>{text}</p>
    </Box>
  )
}

export default CategoryTitle
