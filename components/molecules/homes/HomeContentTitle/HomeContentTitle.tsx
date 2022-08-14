import { FC, ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  className?: string
  children: ReactNode
}

const HomeContentTitle: FC<Props> = (props) => {
  const baseStyle = {
    lineHeight: '140%',
    letterSpacing: '0.1em',
    fontWeight: 700
  }

  return (
    <Heading className={props.className} style={baseStyle} fontSize={{base: "36px", md: "50px"}} as="h3">
      {props.children}
    </Heading>
  )
}

export default HomeContentTitle
