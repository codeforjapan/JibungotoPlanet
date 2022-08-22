import { FC, ReactNode } from 'react'

import { Box } from '@chakra-ui/react'

type Props = {
  className?: string
  children: ReactNode
}

const SocietyContentCategory: FC<Props> = (props) => {
  return <Box>{props.children}</Box>
}

export default SocietyContentCategory
