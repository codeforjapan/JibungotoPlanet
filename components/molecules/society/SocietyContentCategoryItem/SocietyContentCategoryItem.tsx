import { FC, ReactNode } from 'react'

import { Flex, Box } from '@chakra-ui/react'

type Props = {
  className?: string
  children: ReactNode
}

const SocietyContentCategoryItem: FC<Props> = (props) => {
  return (
    <Flex direction={'column'} gap={'0.3em'}>
      {props.children}
    </Flex>
  )
}

export default SocietyContentCategoryItem
