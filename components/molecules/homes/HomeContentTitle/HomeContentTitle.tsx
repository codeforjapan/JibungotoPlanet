import { FC, ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  classname?: string;
  children: ReactNode;
}

const HomeContentTitle: FC<Props> = (props) => {
  const baseStyle = {
    fontSize: '50px',
    lineHeight: '140%',
    letterSpacing: '0.1em',
    fontWeight: 700
  }

  return (
    <Heading className={props.classname} style={baseStyle} as="h3">
      {props.children}
    </Heading>
  )
}

export default HomeContentTitle
