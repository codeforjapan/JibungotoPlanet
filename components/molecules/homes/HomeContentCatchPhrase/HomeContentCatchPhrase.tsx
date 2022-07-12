import { FC, ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  className?: string
  children: ReactNode
}

const HomeContentCatchPhrase: FC<Props> = (props) => {
  const baseStyle = {
    fontSize: '24px',
    lineHeight: '160%',
    letterSpacing: '0.05em',
    fontWeight: 700
  }

  return (
    <Heading className={props.className} style={baseStyle} as="h4">
      {props.children}
    </Heading>
  )
}

export default HomeContentCatchPhrase
