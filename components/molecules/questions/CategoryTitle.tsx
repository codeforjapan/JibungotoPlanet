import { FC, useMemo } from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

type Props = {
  category?: Questions.QuestionCategory
}

const CategoryTitle: FC<Props> = ({ category }) => {
  const text = useMemo(() => {
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
        <Image src={`/icons/${category}.svg`} width="70px" height="70px" />
      )}
      <p>{text}</p>
    </Box>
  )
}

export default CategoryTitle
