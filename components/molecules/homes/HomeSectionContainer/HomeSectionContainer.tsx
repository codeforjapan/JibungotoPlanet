import { FC, ReactNode } from 'react'
import { SimpleGrid } from '@chakra-ui/react'

type Props = {
  className?: string
  children: ReactNode
}

const HomeSectionContainer: FC<Props> = (props) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 1, md: 10 }}
      className={props.className}
    >
      {props.children}
    </SimpleGrid>
  )
}

export default HomeSectionContainer
