import { FC, ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  catchPhrase?: ReactNode
}

const HomeContentCatchPhrase: FC<Props> = (props) => {
  const baseStyle = {
    fontSize: '24px',
    lineHeight: '160%',
    letterSpacing: '0.05em',
    fontWeight: 700
  }

  return (
    <Heading style={baseStyle} as="h4">
      {props.catchPhrase}
    </Heading>
  )
}

export default HomeContentCatchPhrase
