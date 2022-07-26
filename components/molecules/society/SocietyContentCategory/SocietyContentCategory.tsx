import { FC, ReactNode } from 'react'

import { Flex, Box } from '@chakra-ui/react'

type Props = {
  className?: string
  children: ReactNode
}

const SocietyContentCategory: FC<Props> = (props) => {
  return <Flex>{props.children}</Flex>
}

export default SocietyContentCategory
