import { FC, ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  className?: string
  children: ReactNode
}

const SocietyContentTitle: FC<Props> = (props) => {
  const baseStyle = {
    fontSize: '50px',
    lineHeight: '140%',
    letterSpacing: '0.1em',
    fontWeight: 700
  }

  return (
    <Heading className={props.className} style={baseStyle} as="h3">
      {props.children}
    </Heading>
  )
}

export default SocietyContentTitle
